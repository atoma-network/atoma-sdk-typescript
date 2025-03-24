// This is manually edited to ensure that the response is properly encrypted and decrypted.
import { box, randomBytes } from 'tweetnacl';
import * as z from "zod";
import { AtomaSDKCore } from "../core.js";
import { encodeJSON } from "../lib/encodings.js";
import { EventStream } from "../lib/event-streams.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
import { decryptMessage, encryptMessage } from '../lib/crypto_utils.js';

export function confidentialChatCreateStream(
  client: AtomaSDKCore,
  request: components.CreateChatCompletionRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    EventStream<components.ChatCompletionStreamResponse>,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: AtomaSDKCore,
  request: components.CreateChatCompletionRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      EventStream<components.ChatCompletionStreamResponse>,
      | APIError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) =>
      components.CreateChatCompletionRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }

  // Generate client keypair for encryption
  const clientKeyPair = generateKeyPair();

  try {
    // Encrypt the request with stream flag set to true

    const payload = parsed.value;

    const requestWithStream = { payload, stream: true };
    const [nodePublicKey, salt, confidentialRequest] = await encryptMessage(
      client,
      clientKeyPair.privateKey,
      requestWithStream,
      request.model
    );
    const body = encodeJSON("body", confidentialRequest, { explode: true });
    const path = pathToFunc("/v1/confidential/chat/completions#stream")();

    const headers = new Headers({
      "Content-Type": "application/json",
      Accept: "text/event-stream",
    });

    const secConfig = await extractSecurity(client._options.bearerAuth);
    const securityInput = secConfig == null ? {} : { bearerAuth: secConfig };
    const requestSecurity = resolveGlobalSecurity(securityInput);

    const context = {
      baseURL: options?.serverURL ?? client._baseURL ?? "",
      operationID: "confidential_chat_completions_create_stream",
      oAuth2Scopes: [],
      resolvedSecurity: requestSecurity,
      securitySource: client._options.bearerAuth,
      retryConfig: options?.retries
        || client._options.retryConfig
        || { strategy: "none" },
      retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    };

    const requestRes = client._createRequest(context, {
      security: requestSecurity,
      method: "POST",
      baseURL: options?.serverURL,
      path: path,
      headers: headers,
      body: body,
      timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
    }, options);
    if (!requestRes.ok) {
      throw [requestRes, { status: "invalid" }];
    }
    const req = requestRes.value;

    const doResult = await client._do(req, {
      context,
      errorCodes: ["400", "401", "4XX", "500", "5XX"],
      retryConfig: context.retryConfig,
      retryCodes: context.retryCodes,
    });
    if (!doResult.ok) {
      throw [doResult, { status: "request-error", request: req }];
    }
    const response = doResult.value;

    const [result] = await M.match<
      EventStream<components.ChatCompletionStreamResponse>,
      | APIError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >(
      M.sse(
        200,
        z.instanceof(ReadableStream<Uint8Array>).transform(stream => {
          return new EventStream({
            stream,
            decoder(rawEvent) {
              // Check if this is a raw event with a special "DONE" message
              if (rawEvent.data === 'DONE') {
                return components.ChatCompletionStreamResponse$inboundSchema.parse({
                  data: JSON.stringify({ finish_reason: "stop" })
                });
              }

              // Parse the encrypted event data
              const encryptedResponse = components.ConfidentialComputeStreamResponse$inboundSchema.parse(rawEvent);

              // Decrypt the response data
              const decryptedData = decryptMessage(
                Buffer.from(encryptedResponse.data.ciphertext, 'base64'),
                clientKeyPair.privateKey,
                nodePublicKey,
                salt,
                Buffer.from(encryptedResponse.data.nonce, 'base64')
              );

              if (!decryptedData) {
                throw new Error('Failed to decrypt stream response');
              }

              // Parse decrypted response
              const decryptedJson = JSON.parse(new TextDecoder().decode(decryptedData));

              return { data: components.ChatCompletionChunk$inboundSchema.parse(decryptedJson) }
            },
          });
        }),
      ),
      M.fail([400, 401, "4XX"]),
      M.fail([500, "5XX"]),
    )(response);
    if (!result.ok) {
      throw result.error;
    }

    return [result, { status: "complete", request: req, response }];
  } catch (error) {
    throw new APIError("Failed to prepare confidential stream request: " + String(error), new Response());
  }
}

/**
 * Helper function to generate a random keypair
 * @returns An object containing the keypair
 */
export function generateKeyPair() {
  const keypair = box.keyPair();
  return {
    publicKey: keypair.publicKey,
    privateKey: keypair.secretKey
  };
}

/**
 * Helper function to generate random bytes
 * @param length Number of bytes to generate
 * @returns Random bytes
 */
export function generateRandomBytes(length: number): Uint8Array {
  return randomBytes(length);
}