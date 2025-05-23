# NodesCreateLockRequest

Request body for creating a node lock

## Example Usage

```typescript
import { NodesCreateLockRequest } from "atoma-sdk/models/components";

let value: NodesCreateLockRequest = {
  model: "Civic",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `maxNumTokens`                                                                                    | *number*                                                                                          | :heavy_minus_sign:                                                                                | The number of tokens to be processed for confidential compute<br/>(including input and output tokens) |
| `model`                                                                                           | *string*                                                                                          | :heavy_check_mark:                                                                                | The model to lock a node for                                                                      |
| `timeout`                                                                                         | *number*                                                                                          | :heavy_minus_sign:                                                                                | An optional timeout period for the locked compute units, in seconds                               |