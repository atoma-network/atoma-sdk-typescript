# NodePublicAddressRegistration
(*nodePublicAddressRegistration*)

## Overview

Node public address registration

### Available Operations

* [nodePublicAddressRegistration](#nodepublicaddressregistration) - Register node

## nodePublicAddressRegistration

This endpoint allows nodes to register or update their public address in the system.
When a node comes online or changes its address, it can use this endpoint to ensure
the system has its current address for routing requests.

## Errors

Returns various `AtomaProxyError` variants:
* `MissingHeader` - If the signature header is missing
* `InvalidHeader` - If the signature header is malformed
* `InvalidBody` - If:
  - The request body cannot be read
  - The signature is invalid
  - The body cannot be parsed
  - The sui address doesn't match the signature
* `InternalError` - If:
  - The state manager channel is closed
  - The registration event cannot be sent
  - Node Sui address lookup fails

### Example Usage

```typescript
import { AtomaSDK } from "atoma-sdk";

const atomaSDK = new AtomaSDK({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await atomaSDK.nodePublicAddressRegistration.nodePublicAddressRegistration();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AtomaSDKCore } from "atoma-sdk/core.js";
import { nodePublicAddressRegistrationNodePublicAddressRegistration } from "atoma-sdk/funcs/nodePublicAddressRegistrationNodePublicAddressRegistration.js";

// Use `AtomaSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const atomaSDK = new AtomaSDKCore({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await nodePublicAddressRegistrationNodePublicAddressRegistration(atomaSDK);

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
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |