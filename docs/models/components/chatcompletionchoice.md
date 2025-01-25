# ChatCompletionChoice

## Example Usage

```typescript
import { ChatCompletionChoice } from "atoma-sdk/models/components";

let value: ChatCompletionChoice = {
  finishReason: "stop",
  index: 0,
  message: {
    content: "Hello! How can you help me today?",
    name: "john_doe",
    role: "user",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `finishReason`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | The reason the chat completion was finished.                                         | stop                                                                                 |
| `index`                                                                              | *number*                                                                             | :heavy_check_mark:                                                                   | The index of this choice in the list of choices.                                     | 0                                                                                    |
| `logprobs`                                                                           | *any*                                                                                | :heavy_minus_sign:                                                                   | Log probability information for the choice, if applicable.                           |                                                                                      |
| `message`                                                                            | [components.ChatCompletionMessage](../../models/components/chatcompletionmessage.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |