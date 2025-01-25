# NodePublicAddressAssignment

Represents the payload for the node public address registration request.

This struct represents the payload for the node public address registration request.

## Example Usage

```typescript
import { NodePublicAddressAssignment } from "atoma-sdk/models/components";

let value: NodePublicAddressAssignment = {
  country: "Vanuatu",
  nodeSmallId: 383441,
  publicAddress: "<value>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `country`                                    | *string*                                     | :heavy_check_mark:                           | The country of the node                      |
| `nodeSmallId`                                | *number*                                     | :heavy_check_mark:                           | Unique small integer identifier for the node |
| `publicAddress`                              | *string*                                     | :heavy_check_mark:                           | The public address of the node               |