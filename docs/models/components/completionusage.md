# CompletionUsage

Represents the completion usage.

This is used to represent the completion usage in the chat completion request.
It can be either a completion usage or a completion chunk usage.

## Example Usage

```typescript
import { CompletionUsage } from "atoma-sdk/models/components";

let value: CompletionUsage = {
  completionTokens: 12,
  promptTokens: 9,
  promptTokensDetails: {
    audioTokens: 0,
    cachedTokens: 10,
  },
  totalTokens: 21,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `completionTokens`                                                               | *number*                                                                         | :heavy_check_mark:                                                               | Number of tokens in the completion.                                              | 12                                                                               |
| `promptTokens`                                                                   | *number*                                                                         | :heavy_check_mark:                                                               | Number of tokens in the prompt.                                                  | 9                                                                                |
| `promptTokensDetails`                                                            | [components.PromptTokensDetails](../../models/components/prompttokensdetails.md) | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |
| `totalTokens`                                                                    | *number*                                                                         | :heavy_check_mark:                                                               | Total number of tokens used (prompt + completion).                               | 21                                                                               |