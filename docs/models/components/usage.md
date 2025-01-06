# Usage

Represents usage statistics for a confidential compute request

## Example Usage

```typescript
import { Usage } from "atoma-sdk/models/components";

let value: Usage = {
  promptTokens: 20218,
  totalTokens: 832620,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `completionTokens`                                                              | *number*                                                                        | :heavy_minus_sign:                                                              | Number of compute units used<br/>NOTE: This is not used for the embeddings endpoint |
| `completionTokensDetails`                                                       | *any*                                                                           | :heavy_minus_sign:                                                              | Details about the completion tokens                                             |
| `promptTokens`                                                                  | *number*                                                                        | :heavy_check_mark:                                                              | Number of compute units used                                                    |
| `totalTokens`                                                                   | *number*                                                                        | :heavy_check_mark:                                                              | Number of compute units used                                                    |