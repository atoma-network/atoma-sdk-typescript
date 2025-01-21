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

/**
 * Create confidential chat completion
 *
 * @remarks
 * This handler processes chat completion requests in a confidential manner, providing additional
 * encryption and security measures for sensitive data processing. It supports both streaming and
 * non-streaming responses while maintaining data confidentiality through AEAD encryption and TEE hardware,
 * for full private AI compute.
 *
 * ## Returns
 *
 * Returns a `Result` containing either:
 * * An HTTP response with the chat completion result
 * * A streaming SSE connection for real-time completions
 * * An `AtomaProxyError` error if the request processing fails
 *
 * ## Errors
 *
 * Returns `AtomaProxyError::InvalidBody` if:
 * * The 'stream' field is missing or invalid in the payload
 *
 * Returns `AtomaProxyError::InternalError` if:
 * * The inference service request fails
 * * Response processing encounters errors
 * * State manager updates fail
 *
 * ## Security Features
 *
 * * Utilizes AEAD encryption for request/response data
 * * Supports TEE (Trusted Execution Environment) processing
 * * Implements secure key exchange using X25519
 * * Maintains confidentiality throughout the request lifecycle
 */
export async function confidentialChatCreate(
  client: AtomaSDKCore,
  request: components.CreateChatCompletionRequest,
  options?: RequestOptions,
): Promise<
  Result<
    components.ChatCompletionResponse,
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
      components.ConfidentialComputeRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload, { explode: true });

  const path = pathToFunc("/v1/confidential/chat/completions")();

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.bearerAuth);
  const securityInput = secConfig == null ? {} : { bearerAuth: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "confidential_chat_completions_create",
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

  const [result] = await M.match<
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
  if (!result.ok) {
    return result;
  }

  return result;
}
