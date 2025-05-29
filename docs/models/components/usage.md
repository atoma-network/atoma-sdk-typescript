# Usage

## Example Usage

```typescript
import { Usage } from "atoma-sdk/models/components";

let value: Usage = {
  completionTokens: 10,
  completionTokensDetails: {
    acceptedPredictionTokens: 10,
    audioTokens: 0,
    reasoningTokens: 10,
    rejectedPredictionTokens: 0,
  },
  promptTokens: 10,
  promptTokensDetails: {
    audioTokens: 0,
    cachedTokens: 10,
  },
  totalTokens: 20,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `completionTokens`                                                                       | *number*                                                                                 | :heavy_check_mark:                                                                       | The number of completion tokens used                                                     | 10                                                                                       |
| `completionTokensDetails`                                                                | [components.CompletionTokensDetails](../../models/components/completiontokensdetails.md) | :heavy_check_mark:                                                                       | The details of the completion tokens                                                     |                                                                                          |
| `promptTokens`                                                                           | *number*                                                                                 | :heavy_check_mark:                                                                       | The number of prompt tokens used                                                         | 10                                                                                       |
| `promptTokensDetails`                                                                    | [components.PromptTokensDetails](../../models/components/prompttokensdetails.md)         | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `totalTokens`                                                                            | *number*                                                                                 | :heavy_check_mark:                                                                       | The total number of tokens used                                                          | 20                                                                                       |