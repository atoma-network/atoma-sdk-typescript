# CompletionTokensDetails

The details of the completion tokens

## Example Usage

```typescript
import { CompletionTokensDetails } from "atoma-sdk/models/components";

let value: CompletionTokensDetails = {
  acceptedPredictionTokens: 10,
  audioTokens: 0,
  reasoningTokens: 10,
  rejectedPredictionTokens: 0,
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `acceptedPredictionTokens`               | *number*                                 | :heavy_check_mark:                       | The number of tokens in the completion   | 10                                       |
| `audioTokens`                            | *number*                                 | :heavy_check_mark:                       | The number of audio tokens               | 0                                        |
| `reasoningTokens`                        | *number*                                 | :heavy_check_mark:                       | The number of reasoning tokens           | 10                                       |
| `rejectedPredictionTokens`               | *number*                                 | :heavy_check_mark:                       | The number of rejected prediction tokens | 0                                        |