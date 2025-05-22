# ConfidentialComputeStreamResponse

Represents a response from a confidential compute request

## Example Usage

```typescript
import { ConfidentialComputeStreamResponse } from "atoma-sdk/models/components";

let value: ConfidentialComputeStreamResponse = {
  data: {
    ciphertext: "<value>",
    nonce: "<value>",
    usage: {
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
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `data`                                                                                           | [components.ConfidentialComputeResponse](../../models/components/confidentialcomputeresponse.md) | :heavy_check_mark:                                                                               | Represents a response from a confidential compute request                                        |