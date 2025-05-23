# ChatCompletionResponse

Represents the chat completion response.

This is used to represent the chat completion response in the chat completion request.
It can be either a chat completion or a chat completion stream.

## Example Usage

```typescript
import { ChatCompletionResponse } from "atoma-sdk/models/components";

let value: ChatCompletionResponse = {
  choices: [
    {
      index: 0,
      message: {
        name: "AI expert",
        role: "system",
      },
    },
  ],
  created: 1677652288,
  id: "chatcmpl-123",
  model: "meta-llama/Llama-3.3-70B-Instruct",
  object: "chat.completion",
  serviceTier: "auto",
  systemFingerprint: "fp_44709d6fcb",
  usage: {
    completionTokens: 12,
    promptTokens: 9,
    promptTokensDetails: {
      audioTokens: 0,
      cachedTokens: 10,
    },
    totalTokens: 21,
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `choices`                                                                                                                                    | [components.ChatCompletionChoice](../../models/components/chatcompletionchoice.md)[]                                                         | :heavy_check_mark:                                                                                                                           | A list of chat completion choices.                                                                                                           | [{"index": 0, "message": {"role": "assistant", "content": "Hello! How can you help me today?"}, "finish_reason": null, "stop_reason": null}] |
| `created`                                                                                                                                    | *number*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The Unix timestamp (in seconds) of when the chat completion was created.                                                                     | 1677652288                                                                                                                                   |
| `id`                                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | A unique identifier for the chat completion.                                                                                                 | chatcmpl-123                                                                                                                                 |
| `model`                                                                                                                                      | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The model used for the chat completion.                                                                                                      | meta-llama/Llama-3.3-70B-Instruct                                                                                                            |
| `object`                                                                                                                                     | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The object of the chat completion.                                                                                                           | chat.completion                                                                                                                              |
| `serviceTier`                                                                                                                                | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | The service tier of the chat completion.                                                                                                     | auto                                                                                                                                         |
| `systemFingerprint`                                                                                                                          | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | The system fingerprint for the completion, if applicable.                                                                                    | fp_44709d6fcb                                                                                                                                |
| `usage`                                                                                                                                      | [components.CompletionUsage](../../models/components/completionusage.md)                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |                                                                                                                                              |