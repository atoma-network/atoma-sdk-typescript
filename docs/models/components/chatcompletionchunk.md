# ChatCompletionChunk

Represents the chat completion chunk.

This is used to represent the chat completion chunk in the chat completion request.
It can be either a chat completion chunk or a chat completion chunk choice.

## Example Usage

```typescript
import { ChatCompletionChunk } from "atoma-sdk/models/components";

let value: ChatCompletionChunk = {
  choices: [
    {
      delta: {
        content: "Hello",
        role: "assistant",
      },
      index: 0,
    },
  ],
  created: 1677652288,
  id: "chatcmpl-123",
  model: "meta-llama/Llama-3.3-70B-Instruct",
  object: "chat.completion.chunk",
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

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  | Example                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `choices`                                                                                                                                                    | [components.ChatCompletionChunkChoice](../../models/components/chatcompletionchunkchoice.md)[]                                                               | :heavy_check_mark:                                                                                                                                           | A list of chat completion chunk choices.                                                                                                                     | [{"index": 0, "delta": {"role": "assistant", "content": "Hello! How can you help me today?"}, "logprobs": null, "finish_reason": null, "stop_reason": null}] |
| `created`                                                                                                                                                    | *number*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | The Unix timestamp (in seconds) of when the chunk was created.                                                                                               | 1677652288                                                                                                                                                   |
| `id`                                                                                                                                                         | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | A unique identifier for the chat completion chunk.                                                                                                           | chatcmpl-123                                                                                                                                                 |
| `model`                                                                                                                                                      | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | The model used for the chat completion.                                                                                                                      | meta-llama/Llama-3.3-70B-Instruct                                                                                                                            |
| `object`                                                                                                                                                     | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | The object of the chat completion chunk (which is always `chat.completion.chunk`)                                                                            | chat.completion.chunk                                                                                                                                        |
| `usage`                                                                                                                                                      | [components.CompletionUsage](../../models/components/completionusage.md)                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |                                                                                                                                                              |