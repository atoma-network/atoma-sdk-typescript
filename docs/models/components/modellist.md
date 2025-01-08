# ModelList

Response object for the models listing endpoint

## Example Usage

```typescript
import { ModelList } from "atoma-sdk/models/components";

let value: ModelList = {
  data: [
    {
      created: 548814,
      id: "<id>",
      object: "<value>",
      ownedBy: "<value>",
    },
  ],
  object: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `data`                                                 | [components.Model](../../models/components/model.md)[] | :heavy_check_mark:                                     | List of model objects                                  |
| `object`                                               | *string*                                               | :heavy_check_mark:                                     | The object type, which is always "list"                |