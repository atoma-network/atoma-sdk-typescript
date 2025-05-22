# ChatCompletionsCreateStreamResponseBody

Chat completions

## Example Usage

```typescript
import { ChatCompletionsCreateStreamResponseBody } from "atoma-sdk/models/operations";

let value: ChatCompletionsCreateStreamResponseBody = {
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
        audioTokens: 0,
        cachedTokens: 10,
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