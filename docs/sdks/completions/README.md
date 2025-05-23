# Completions
(*completions*)

## Overview

OpenAI's API completions v1 endpoint

### Available Operations

* [create](#create) - Create completions
* [createStream](#createstream)

## create

This function processes completion requests by using the chat completions endpoint.

## Returns

Returns a Response containing either:
- A streaming SSE connection for real-time completions
- A single JSON response for non-streaming completions

## Errors

Returns an error status code if:
- The request processing fails
- The streaming/non-streaming handlers encounter errors
- The underlying inference service returns an error

### Example Usage

```typescript
import { AtomaSDK } from "atoma-sdk";

const atomaSDK = new AtomaSDK({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await atomaSDK.completions.create({
    frequencyPenalty: 0,
    logitBias: {
      "1234567890": 0.5,
      "1234567891": -0.5,
    },
    logprobs: 1,
    model: "meta-llama/Llama-3.3-70B-Instruct",
    n: 1,
    presencePenalty: 0,
    prompt: [
      "Hello!",
    ],
    seed: 123,
    stop: [
      "json([\"stop\", \"halt\"])",
    ],
    stream: false,
    suffix: "json(\"\n\")",
    temperature: 0.7,
    topP: 1,
    user: "user-1234",
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
import { completionsCreate } from "atoma-sdk/funcs/completionsCreate.js";

// Use `AtomaSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const atomaSDK = new AtomaSDKCore({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await completionsCreate(atomaSDK, {
    frequencyPenalty: 0,
    logitBias: {
      "1234567890": 0.5,
      "1234567891": -0.5,
    },
    logprobs: 1,
    model: "meta-llama/Llama-3.3-70B-Instruct",
    n: 1,
    presencePenalty: 0,
    prompt: [
      "Hello!",
    ],
    seed: 123,
    stop: [
      "json([\"stop\", \"halt\"])",
    ],
    stream: false,
    suffix: "json(\"\n\")",
    temperature: 0.7,
    topP: 1,
    user: "user-1234",
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
| `request`                                                                                                                                                                      | [components.CompletionsRequest](../../models/components/completionsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CompletionsResponse](../../models/components/completionsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createStream

### Example Usage

```typescript
import { AtomaSDK } from "atoma-sdk";

const atomaSDK = new AtomaSDK({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await atomaSDK.completions.createStream({
    frequencyPenalty: 0,
    logitBias: {
      "1234567890": 0.5,
      "1234567891": -0.5,
    },
    logprobs: 1,
    model: "meta-llama/Llama-3.3-70B-Instruct",
    n: 1,
    presencePenalty: 0,
    prompt: "<value>",
    seed: 123,
    stop: [
      "json([\"stop\", \"halt\"])",
    ],
    suffix: "json(\"\n\")",
    temperature: 0.7,
    topP: 1,
    user: "user-1234",
  });

  for await (const event of result) {
    // Handle the event
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AtomaSDKCore } from "atoma-sdk/core.js";
import { completionsCreateStream } from "atoma-sdk/funcs/completionsCreateStream.js";

// Use `AtomaSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const atomaSDK = new AtomaSDKCore({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await completionsCreateStream(atomaSDK, {
    frequencyPenalty: 0,
    logitBias: {
      "1234567890": 0.5,
      "1234567891": -0.5,
    },
    logprobs: 1,
    model: "meta-llama/Llama-3.3-70B-Instruct",
    n: 1,
    presencePenalty: 0,
    prompt: "<value>",
    seed: 123,
    stop: [
      "json([\"stop\", \"halt\"])",
    ],
    suffix: "json(\"\n\")",
    temperature: 0.7,
    topP: 1,
    user: "user-1234",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const event of result) {
    // Handle the event
    console.log(event);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateCompletionsStreamRequest](../../models/components/createcompletionsstreamrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[EventStream<operations.CompletionsCreateStreamResponseBody>](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |