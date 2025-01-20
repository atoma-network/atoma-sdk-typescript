# ConfidentialComputeStreamResponse

Represents a response from a confidential compute request

## Example Usage

```typescript
import { ConfidentialComputeStreamResponse } from "atoma-sdk/models/components";

let value: ConfidentialComputeStreamResponse = {
  data: {
    ciphertext: "<value>",
    nonce: "<value>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `data`                                                                                           | [components.ConfidentialComputeResponse](../../models/components/confidentialcomputeresponse.md) | :heavy_check_mark:                                                                               | Represents a response from a confidential compute request                                        |