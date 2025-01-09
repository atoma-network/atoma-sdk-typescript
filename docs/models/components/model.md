# Model

Individual model object in the response

## Example Usage

```typescript
import { Model } from "atoma-sdk/models/components";

let value: Model = {
  created: 437032,
  id: "<id>",
  object: "<value>",
  ownedBy: "<value>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `created`                                               | *number*                                                | :heavy_check_mark:                                      | Unix timestamp (in seconds) when this model was created |
| `id`                                                    | *string*                                                | :heavy_check_mark:                                      | The model identifier                                    |
| `object`                                                | *string*                                                | :heavy_check_mark:                                      | The object type, which is always "model"                |
| `ownedBy`                                               | *string*                                                | :heavy_check_mark:                                      | Organization that owns the model                        |