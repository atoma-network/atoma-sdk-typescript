# ChatCompletionChoice

## Example Usage

```typescript
import { ChatCompletionChoice } from "atoma-sdk/models/components";

let value: ChatCompletionChoice = {
  index: 963663,
  message: {
    content: "<value>",
    role: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `finishReason`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | The reason the chat completion was finished.                                         |
| `index`                                                                              | *number*                                                                             | :heavy_check_mark:                                                                   | The index of this choice in the list of choices.                                     |
| `logprobs`                                                                           | *any*                                                                                | :heavy_minus_sign:                                                                   | Log probability information for the choice, if applicable.                           |
| `message`                                                                            | [components.ChatCompletionMessage](../../models/components/chatcompletionmessage.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |