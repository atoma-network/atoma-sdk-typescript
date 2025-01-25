# CompletionUsage

## Example Usage

```typescript
import { CompletionUsage } from "atoma-sdk/models/components";

let value: CompletionUsage = {
  completionTokens: 12,
  promptTokens: 9,
  totalTokens: 21,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `completionTokens`                                 | *number*                                           | :heavy_check_mark:                                 | Number of tokens in the completion.                | 12                                                 |
| `promptTokens`                                     | *number*                                           | :heavy_check_mark:                                 | Number of tokens in the prompt.                    | 9                                                  |
| `totalTokens`                                      | *number*                                           | :heavy_check_mark:                                 | Total number of tokens used (prompt + completion). | 21                                                 |