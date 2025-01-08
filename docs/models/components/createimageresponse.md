# CreateImageResponse

Response format for image generation

## Example Usage

```typescript
import { CreateImageResponse } from "atoma-sdk/models/components";

let value: CreateImageResponse = {
  created: 456150,
  data: [
    {
      url: "https://agitated-ocelot.name",
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `created`                                                      | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `data`                                                         | [components.ImageData](../../models/components/imagedata.md)[] | :heavy_check_mark:                                             | N/A                                                            |