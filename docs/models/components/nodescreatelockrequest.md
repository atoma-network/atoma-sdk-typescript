# NodesCreateLockRequest

Request body for creating a node lock

## Example Usage

```typescript
import { NodesCreateLockRequest } from "atoma-sdk/models/components";

let value: NodesCreateLockRequest = {
  model: "Grand Cherokee",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `model`                      | *string*                     | :heavy_check_mark:           | The model to lock a node for |