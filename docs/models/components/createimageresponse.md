# CreateImageResponse

Response format for image generation

## Example Usage

```typescript
import { CreateImageResponse } from "atoma-sdk/models/components";

let value: CreateImageResponse = {
  created: 264555,
  data: [
    {
      url: "https://lasting-metabolite.com",
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `created`                                                      | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `data`                                                         | [components.ImageData](../../models/components/imagedata.md)[] | :heavy_check_mark:                                             | N/A                                                            |