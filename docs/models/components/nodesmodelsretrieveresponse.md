# NodesModelsRetrieveResponse

The response body for selecting a node's public key for encryption
from a client. The client will use the provided public key to encrypt
the request and send it back to the proxy. The proxy will then route this
request to the selected node.

## Example Usage

```typescript
import { NodesModelsRetrieveResponse } from "atoma-sdk/models/components";

let value: NodesModelsRetrieveResponse = {
  nodeSmallId: 210382,
  publicKey: [
    128926,
  ],
  stackSmallId: 315428,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `nodeSmallId`                                                                            | *number*                                                                                 | :heavy_check_mark:                                                                       | The node small id for the selected node                                                  |
| `publicKey`                                                                              | *number*[]                                                                               | :heavy_check_mark:                                                                       | The public key for the selected node, base64 encoded                                     |
| `stackEntryDigest`                                                                       | *string*                                                                                 | :heavy_minus_sign:                                                                       | Transaction digest for the transaction that acquires the stack entry, if any             |
| `stackSmallId`                                                                           | *number*                                                                                 | :heavy_check_mark:                                                                       | The stack small id to which an available stack entry was acquired, for the selected node |