# Chat
(*chat*)

## Overview

OpenAI's API chat completions v1 endpoint

### Available Operations

* [completionsCreate](#completionscreate) - Create completion
* [create](#create) - Create chat completion
* [createStream](#createstream)

## completionsCreate

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
  const result = await atomaSDK.chat.completionsCreate({
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
import { chatCompletionsCreate } from "atoma-sdk/funcs/chatCompletionsCreate.js";

// Use `AtomaSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const atomaSDK = new AtomaSDKCore({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await chatCompletionsCreate(atomaSDK, {
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
| `request`                                                                                                                                                                      | [components.CompletionRequest](../../models/components/completionrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ChatCompletionResponse](../../models/components/chatcompletionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## create

This function processes chat completion requests by determining whether to use streaming
or non-streaming response handling based on the request payload. For streaming requests,
it configures additional options to track token usage.

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
  const result = await atomaSDK.chat.create({
    frequencyPenalty: 0,
    functions: [
      {
        "name": "get_current_weather",
        "description": "Get the current weather in a location",
        "parameters": {
          "type": "object",
          "properties": {
            "location": {
              "type": "string",
              "description": "The location to get the weather for",
            },
          },
          "required": [
            "location",
          ],
        },
      },
    ],
    logitBias: {
      "1234567890": 0.5,
      "1234567891": -0.5,
    },
    maxCompletionTokens: 4096,
    messages: [
      {
        content: "You are a helpful AI assistant",
        name: "AI expert",
        role: "system",
      },
      {
        content: "Hello!",
        name: "John Doe",
        role: "user",
      },
      {
        content: "I'm here to help you with any questions you have. How can I assist you today?",
        name: "AI",
        role: "assistant",
      },
    ],
    model: "meta-llama/Llama-3.3-70B-Instruct",
    n: 1,
    parallelToolCalls: true,
    presencePenalty: 0,
    seed: 123,
    serviceTier: "auto",
    stop: [
      "json([\"stop\", \"halt\"])",
    ],
    temperature: 0.7,
    tools: [
      {
        function: {
          description: "Get the current weather in a location",
          name: "get_current_weather",
          parameters: {
            "type": "object",
            "properties": {
              "location": {
                "type": "string",
                "description": "The location to get the weather for",
              },
            },
            "required": [
              "location",
            ],
          },
        },
        type: "function",
      },
    ],
    topLogprobs: 1,
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
import { chatCreate } from "atoma-sdk/funcs/chatCreate.js";

// Use `AtomaSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const atomaSDK = new AtomaSDKCore({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await chatCreate(atomaSDK, {
    frequencyPenalty: 0,
    functions: [
      {
        "name": "get_current_weather",
        "description": "Get the current weather in a location",
        "parameters": {
          "type": "object",
          "properties": {
            "location": {
              "type": "string",
              "description": "The location to get the weather for",
            },
          },
          "required": [
            "location",
          ],
        },
      },
    ],
    logitBias: {
      "1234567890": 0.5,
      "1234567891": -0.5,
    },
    maxCompletionTokens: 4096,
    messages: [
      {
        content: "You are a helpful AI assistant",
        name: "AI expert",
        role: "system",
      },
      {
        content: "Hello!",
        name: "John Doe",
        role: "user",
      },
      {
        content: "I'm here to help you with any questions you have. How can I assist you today?",
        name: "AI",
        role: "assistant",
      },
    ],
    model: "meta-llama/Llama-3.3-70B-Instruct",
    n: 1,
    parallelToolCalls: true,
    presencePenalty: 0,
    seed: 123,
    serviceTier: "auto",
    stop: [
      "json([\"stop\", \"halt\"])",
    ],
    temperature: 0.7,
    tools: [
      {
        function: {
          description: "Get the current weather in a location",
          name: "get_current_weather",
          parameters: {
            "type": "object",
            "properties": {
              "location": {
                "type": "string",
                "description": "The location to get the weather for",
              },
            },
            "required": [
              "location",
            ],
          },
        },
        type: "function",
      },
    ],
    topLogprobs: 1,
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
| `request`                                                                                                                                                                      | [components.CreateChatCompletionRequest](../../models/components/createchatcompletionrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ChatCompletionResponse](../../models/components/chatcompletionresponse.md)\>**

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
  const result = await atomaSDK.chat.createStream({
    frequencyPenalty: 0,
    functions: [
      {
        "name": "get_current_weather",
        "description": "Get the current weather in a location",
        "parameters": {
          "type": "object",
          "properties": {
            "location": {
              "type": "string",
              "description": "The location to get the weather for",
            },
          },
          "required": [
            "location",
          ],
        },
      },
    ],
    logitBias: {
      "1234567890": 0.5,
      "1234567891": -0.5,
    },
    maxCompletionTokens: 4096,
    messages: [
      {
        content: "You are a helpful AI assistant",
        name: "AI expert",
        role: "system",
      },
      {
        content: "Hello!",
        name: "John Doe",
        role: "user",
      },
      {
        content: "I'm here to help you with any questions you have. How can I assist you today?",
        name: "AI",
        role: "assistant",
      },
    ],
    model: "meta-llama/Llama-3.3-70B-Instruct",
    n: 1,
    parallelToolCalls: true,
    presencePenalty: 0,
    seed: 123,
    serviceTier: "auto",
    stop: [
      "json([\"stop\", \"halt\"])",
    ],
    temperature: 0.7,
    tools: [
      {
        function: {
          description: "Get the current weather in a location",
          name: "get_current_weather",
          parameters: {
            "type": "object",
            "properties": {
              "location": {
                "type": "string",
                "description": "The location to get the weather for",
              },
            },
            "required": [
              "location",
            ],
          },
        },
        type: "function",
      },
    ],
    topLogprobs: 1,
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
import { chatCreateStream } from "atoma-sdk/funcs/chatCreateStream.js";

// Use `AtomaSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const atomaSDK = new AtomaSDKCore({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await chatCreateStream(atomaSDK, {
    frequencyPenalty: 0,
    functions: [
      {
        "name": "get_current_weather",
        "description": "Get the current weather in a location",
        "parameters": {
          "type": "object",
          "properties": {
            "location": {
              "type": "string",
              "description": "The location to get the weather for",
            },
          },
          "required": [
            "location",
          ],
        },
      },
    ],
    logitBias: {
      "1234567890": 0.5,
      "1234567891": -0.5,
    },
    maxCompletionTokens: 4096,
    messages: [
      {
        content: "You are a helpful AI assistant",
        name: "AI expert",
        role: "system",
      },
      {
        content: "Hello!",
        name: "John Doe",
        role: "user",
      },
      {
        content: "I'm here to help you with any questions you have. How can I assist you today?",
        name: "AI",
        role: "assistant",
      },
    ],
    model: "meta-llama/Llama-3.3-70B-Instruct",
    n: 1,
    parallelToolCalls: true,
    presencePenalty: 0,
    seed: 123,
    serviceTier: "auto",
    stop: [
      "json([\"stop\", \"halt\"])",
    ],
    temperature: 0.7,
    tools: [
      {
        function: {
          description: "Get the current weather in a location",
          name: "get_current_weather",
          parameters: {
            "type": "object",
            "properties": {
              "location": {
                "type": "string",
                "description": "The location to get the weather for",
              },
            },
            "required": [
              "location",
            ],
          },
        },
        type: "function",
      },
    ],
    topLogprobs: 1,
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
| `request`                                                                                                                                                                      | [components.CreateChatCompletionStreamRequest](../../models/components/createchatcompletionstreamrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[EventStream<components.ChatCompletionStreamResponse>](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |