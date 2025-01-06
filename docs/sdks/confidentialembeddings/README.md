# ConfidentialEmbeddings
(*confidentialEmbeddings*)

## Overview

Atoma's API confidential embeddings v1 endpoint

### Available Operations

* [create](#create) - Create confidential embeddings

## create

This endpoint follows the OpenAI API format for generating vector embeddings from input text,
but with confidential processing (through AEAD encryption and TEE hardware).
The handler receives pre-processed metadata from middleware and forwards the request to
the selected node.

## Returns
* `Ok(Response)` - The embeddings response from the processing node
* `Err(AtomaProxyError)` - An error status code if any step fails

## Errors
* `INTERNAL_SERVER_ERROR` - Processing or node communication failures

### Example Usage

```typescript
import { AtomaSDK } from "atoma-sdk";

const atomaSDK = new AtomaSDK({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await atomaSDK.confidentialEmbeddings.create({
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
import { confidentialEmbeddingsCreate } from "atoma-sdk/funcs/confidentialEmbeddingsCreate.js";

// Use `AtomaSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const atomaSDK = new AtomaSDKCore({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await confidentialEmbeddingsCreate(atomaSDK, {
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