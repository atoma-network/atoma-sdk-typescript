# ChatCompletionStreamResponse

Represents the chat completion stream response.

This is used to represent the chat completion stream response in the chat completion request.
It can be either a chat completion chunk or a chat completion stream.

## Example Usage

```typescript
import { ChatCompletionStreamResponse } from "atoma-sdk/models/components";

let value: ChatCompletionStreamResponse = {
  data: {
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
        cachedTokens: 1,
      },
      totalTokens: 21,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                                                                                                 | [components.ChatCompletionChunk](../../models/components/chatcompletionchunk.md)                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                     | Represents the chat completion chunk.<br/><br/>This is used to represent the chat completion chunk in the chat completion request.<br/>It can be either a chat completion chunk or a chat completion chunk choice. |