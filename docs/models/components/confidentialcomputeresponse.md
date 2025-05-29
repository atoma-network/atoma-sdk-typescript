# ConfidentialComputeResponse

Represents a response from a confidential compute request

## Example Usage

```typescript
import { ConfidentialComputeResponse } from "atoma-sdk/models/components";

let value: ConfidentialComputeResponse = {
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
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `ciphertext`                                         | *string*                                             | :heavy_check_mark:                                   | Encrypted response body (base64 encoded)             |
| `nonce`                                              | *string*                                             | :heavy_check_mark:                                   | Nonce used for encryption (base64 encoded)           |
| `responseHash`                                       | *string*                                             | :heavy_minus_sign:                                   | Hash of the response body (base64 encoded)           |
| `signature`                                          | *string*                                             | :heavy_minus_sign:                                   | Signature of the response body (base64 encoded)      |
| `usage`                                              | [components.Usage](../../models/components/usage.md) | :heavy_minus_sign:                                   | N/A                                                  |