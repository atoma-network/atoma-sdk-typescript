# CompletionUsage

## Example Usage

```typescript
import { CompletionUsage } from "atoma-sdk/models/components";

let value: CompletionUsage = {
  completionTokens: 645894,
  promptTokens: 437587,
  totalTokens: 891773,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `completionTokens`                                 | *number*                                           | :heavy_check_mark:                                 | Number of tokens in the completion.                |
| `promptTokens`                                     | *number*                                           | :heavy_check_mark:                                 | Number of tokens in the prompt.                    |
| `totalTokens`                                      | *number*                                           | :heavy_check_mark:                                 | Total number of tokens used (prompt + completion). |