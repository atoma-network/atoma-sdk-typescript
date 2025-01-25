# ChatCompletionChunk

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
      finishReason: "stop",
      index: 0,
    },
  ],
  created: 1677652288,
  id: "chatcmpl-123",
  model: "meta-llama/Llama-3.3-70B-Instruct",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `choices`                                                                                      | [components.ChatCompletionChunkChoice](../../models/components/chatcompletionchunkchoice.md)[] | :heavy_check_mark:                                                                             | A list of chat completion chunk choices.                                                       |                                                                                                |
| `created`                                                                                      | *number*                                                                                       | :heavy_check_mark:                                                                             | The Unix timestamp (in seconds) of when the chunk was created.                                 | 1677652288                                                                                     |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | A unique identifier for the chat completion chunk.                                             | chatcmpl-123                                                                                   |
| `model`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | The model used for the chat completion.                                                        | meta-llama/Llama-3.3-70B-Instruct                                                              |