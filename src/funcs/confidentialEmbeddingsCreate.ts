/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { AtomaSDKCore } from "../core.js";
import { encodeJSON } from "../lib/encodings.js";
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
import { Result } from "../types/fp.js";
import { generateKeyPair, encryptMessage, decryptMessage } from "../lib/crypto_utils.js";

/**
 * Create confidential embeddings
 *
 * @remarks
 * This endpoint follows the OpenAI API format for generating vector embeddings from input text,
 * but with confidential processing (through AEAD encryption and TEE hardware).
 * The handler receives pre-processed metadata from middleware and forwards the request to
 * the selected node.
 *
 * ## Returns
 * * `Ok(Response)` - The embeddings response from the processing node
 * * `Err(AtomaProxyError)` - An error status code if any step fails
 *
 * ## Errors
 * * `INTERNAL_SERVER_ERROR` - Processing or node communication failures
 */
export async function confidentialEmbeddingsCreate(
  client: AtomaSDKCore,
  request: components.CreateEmbeddingRequest,
  options?: RequestOptions,
): Promise<
  Result<
    components.CreateEmbeddingResponse,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) =>
      components.CreateEmbeddingRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }

  // Generate client keypair for encryption
  const clientKeyPair = generateKeyPair();

  try {
    // Encrypt the request
    const [nodePublicKey, salt, confidentialRequest] = await encryptMessage(
      client,
      clientKeyPair.privateKey,
      parsed.value,
      request.model
    );

    const body = encodeJSON("body", confidentialRequest, { explode: true });
    const path = pathToFunc("/v1/confidential/embeddings")();

    const headers = new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    });

    const secConfig = await extractSecurity(client._options.bearerAuth);
    const securityInput = secConfig == null ? {} : { bearerAuth: secConfig };
    const requestSecurity = resolveGlobalSecurity(securityInput);

    const context = {
      operationID: "confidential_embeddings_create",
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
      return requestRes;
    }
    const req = requestRes.value;

    const doResult = await client._do(req, {
      context,
      errorCodes: ["400", "401", "4XX", "500", "5XX"],
      retryConfig: context.retryConfig,
      retryCodes: context.retryCodes,
    });
    if (!doResult.ok) {
      return doResult;
    }
    const response = doResult.value;

    const [encryptedResult] = await M.match<
      components.ConfidentialComputeResponse,
      | APIError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >(
      M.json(200, components.ConfidentialComputeResponse$inboundSchema),
      M.fail([400, 401, "4XX", 500, "5XX"]),
    )(response);
    if (!encryptedResult.ok) {
      return encryptedResult;
    }

    // Decrypt the response
    const decryptedData = decryptMessage(
      Buffer.from(encryptedResult.value.ciphertext, 'base64'),
      clientKeyPair.privateKey,
      nodePublicKey,
      salt,
      Buffer.from(encryptedResult.value.nonce, 'base64')
    );

    if (!decryptedData) {
      return {
        ok: false,
        error: new APIError("Failed to decrypt response", response)
      };
    }

    // Parse decrypted response
    try {
      const decryptedJson = JSON.parse(new TextDecoder().decode(decryptedData));
      const embeddingResponse = components.CreateEmbeddingResponse$inboundSchema.parse(decryptedJson);
      return {
        ok: true,
        value: embeddingResponse
      };
    } catch (e) {
      return {
        ok: false,
        error: new APIError("Failed to parse decrypted response", response)
      };
    }
  } catch (e) {
    return {
      ok: false,
      error: new APIError("Failed to prepare confidential request: " + String(e), new Response())
    };
  }
}
