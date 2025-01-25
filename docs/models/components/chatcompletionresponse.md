# ChatCompletionResponse

## Example Usage

```typescript
import { ChatCompletionResponse } from "atoma-sdk/models/components";

let value: ChatCompletionResponse = {
  choices: [
    {
      finishReason: "stop",
      index: 0,
      message: {
        content: "Hello! How can you help me today?",
        name: "john_doe",
        role: "user",
      },
    },
  ],
  created: 1677652288,
  id: "chatcmpl-123",
  model: "meta-llama/Llama-3.3-70B-Instruct",
  systemFingerprint: "fp_44709d6fcb",
  usage: {
    completionTokens: 12,
    promptTokens: 9,
    totalTokens: 21,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `choices`                                                                            | [components.ChatCompletionChoice](../../models/components/chatcompletionchoice.md)[] | :heavy_check_mark:                                                                   | A list of chat completion choices.                                                   |                                                                                      |
| `created`                                                                            | *number*                                                                             | :heavy_check_mark:                                                                   | The Unix timestamp (in seconds) of when the chat completion was created.             | 1677652288                                                                           |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | A unique identifier for the chat completion.                                         | chatcmpl-123                                                                         |
| `model`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | The model used for the chat completion.                                              | meta-llama/Llama-3.3-70B-Instruct                                                    |
| `systemFingerprint`                                                                  | *string*                                                                             | :heavy_minus_sign:                                                                   | The system fingerprint for the completion, if applicable.                            | fp_44709d6fcb                                                                        |
| `usage`                                                                              | [components.CompletionUsage](../../models/components/completionusage.md)             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |