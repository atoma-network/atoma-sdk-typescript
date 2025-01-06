# ConfidentialImages
(*confidentialImages*)

## Overview

Atoma's API confidential images v1 endpoint

### Available Operations

* [generate](#generate) - Create confidential image

## generate

This handler processes image generation requests in a confidential manner, providing additional
encryption and security measures for sensitive data processing. It supports both streaming and
non-streaming responses while maintaining data confidentiality through AEAD encryption and TEE hardware,
for full private AI compute.

### Example Usage

```typescript
import { AtomaSDK } from "atoma-sdk";

const atomaSDK = new AtomaSDK({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await atomaSDK.confidentialImages.generate({
    ciphertext: "<value>",
    clientDhPublicKey: "<value>",
    modelName: "<value>",
    nodeDhPublicKey: "<value>",
    nonce: "<value>",
    plaintextBodyHash: "<value>",
    salt: "<value>",
    stackSmallId: 740198,
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
import { confidentialImagesGenerate } from "atoma-sdk/funcs/confidentialImagesGenerate.js";

// Use `AtomaSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const atomaSDK = new AtomaSDKCore({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await confidentialImagesGenerate(atomaSDK, {
    ciphertext: "<value>",
    clientDhPublicKey: "<value>",
    modelName: "<value>",
    nodeDhPublicKey: "<value>",
    nonce: "<value>",
    plaintextBodyHash: "<value>",
    salt: "<value>",
    stackSmallId: 740198,
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