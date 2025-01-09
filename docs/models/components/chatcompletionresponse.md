# ChatCompletionResponse

## Example Usage

```typescript
import { ChatCompletionResponse } from "atoma-sdk/models/components";

let value: ChatCompletionResponse = {
  choices: [
    {
      index: 548814,
      message: {
        content: "<value>",
        role: "<value>",
      },
    },
  ],
  created: 715190,
  id: "<id>",
  model: "Jetta",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `choices`                                                                            | [components.ChatCompletionChoice](../../models/components/chatcompletionchoice.md)[] | :heavy_check_mark:                                                                   | A list of chat completion choices.                                                   |
| `created`                                                                            | *number*                                                                             | :heavy_check_mark:                                                                   | The Unix timestamp (in seconds) of when the chat completion was created.             |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | A unique identifier for the chat completion.                                         |
| `model`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | The model used for the chat completion.                                              |
| `systemFingerprint`                                                                  | *string*                                                                             | :heavy_minus_sign:                                                                   | The system fingerprint for the completion, if applicable.                            |
| `usage`                                                                              | [components.CompletionUsage](../../models/components/completionusage.md)             | :heavy_minus_sign:                                                                   | N/A                                                                                  |