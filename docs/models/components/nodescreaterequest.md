# NodesCreateRequest

Represents the payload for the node public address registration request.

## Example Usage

```typescript
import { NodesCreateRequest } from "atoma-sdk/models/components";

let value: NodesCreateRequest = {
  data: {
    country: "Paraguay",
    nodeSmallId: 60225,
    publicAddress: "<value>",
  },
  signature: "<value>",
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                         | [components.NodePublicAddressAssignment](../../models/components/nodepublicaddressassignment.md)                                                               | :heavy_check_mark:                                                                                                                                             | Represents the payload for the node public address registration request.<br/><br/>This struct represents the payload for the node public address registration request. |
| `signature`                                                                                                                                                    | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | The signature of the data base 64 encoded                                                                                                                      |