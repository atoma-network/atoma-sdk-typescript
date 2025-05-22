# ConfidentialCompletionsCreateStreamResponseBody

Chat completions

## Example Usage

```typescript
import { ConfidentialCompletionsCreateStreamResponseBody } from "atoma-sdk/models/operations";

let value: ConfidentialCompletionsCreateStreamResponseBody = {
  data: {
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
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                       | [components.ConfidentialComputeStreamResponse](../../models/components/confidentialcomputestreamresponse.md) | :heavy_check_mark:                                                                                           | Represents a response from a confidential compute request                                                    |