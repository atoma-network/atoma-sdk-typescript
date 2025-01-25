# ChatCompletionStreamResponse

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
        finishReason: "stop",
        index: 0,
      },
    ],
    created: 1677652288,
    id: "chatcmpl-123",
    model: "meta-llama/Llama-3.3-70B-Instruct",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [components.ChatCompletionChunk](../../models/components/chatcompletionchunk.md) | :heavy_check_mark:                                                               | N/A                                                                              |