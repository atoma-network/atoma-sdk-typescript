# ConfidentialChat
(*confidentialChat*)

## Overview

Atoma's API confidential chat completions v1 endpoint

### Available Operations

* [create](#create) - Create confidential chat completion

## create

This handler processes chat completion requests in a confidential manner, providing additional
encryption and security measures for sensitive data processing. It supports both streaming and
non-streaming responses while maintaining data confidentiality through AEAD encryption and TEE hardware,
for full private AI compute.

## Returns

Returns a `Result` containing either:
* An HTTP response with the chat completion result
* A streaming SSE connection for real-time completions
* An `AtomaProxyError` error if the request processing fails

## Errors

Returns `AtomaProxyError::InvalidBody` if:
* The 'stream' field is missing or invalid in the payload

Returns `AtomaProxyError::InternalError` if:
* The inference service request fails
* Response processing encounters errors
* State manager updates fail

## Security Features

* Utilizes AEAD encryption for request/response data
* Supports TEE (Trusted Execution Environment) processing
* Implements secure key exchange using X25519
* Maintains confidentiality throughout the request lifecycle

### Example Usage

```typescript
import { AtomaSDK } from "atoma-sdk";

const atomaSDK = new AtomaSDK({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await atomaSDK.confidentialChat.create({
    ciphertext: "<value>",
    clientDhPublicKey: "<value>",
    modelName: "<value>",
    nodeDhPublicKey: "<value>",
    nonce: "<value>",
    plaintextBodyHash: "<value>",
    salt: "<value>",
    stackSmallId: 486589,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AtomaSDKCore } from "atoma-sdk/core.js";
import { confidentialChatCreate } from "atoma-sdk/funcs/confidentialChatCreate.js";

// Use `AtomaSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const atomaSDK = new AtomaSDKCore({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await confidentialChatCreate(atomaSDK, {
    ciphertext: "<value>",
    clientDhPublicKey: "<value>",
    modelName: "<value>",
    nodeDhPublicKey: "<value>",
    nonce: "<value>",
    plaintextBodyHash: "<value>",
    salt: "<value>",
    stackSmallId: 486589,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.ConfidentialComputeRequest](../../models/components/confidentialcomputerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ConfidentialComputeResponse](../../models/components/confidentialcomputeresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |