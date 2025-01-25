# CreateImageResponse

Response format for image generation

## Example Usage

```typescript
import { CreateImageResponse } from "atoma-sdk/models/components";

let value: CreateImageResponse = {
  created: 1677649420,
  data: [
    {
      revisedPrompt:
        "A stunning image of a baby sea otter floating on its back in crystal clear blue water, with gentle ripples surrounding it. The otter's fur appears soft and well-detailed, and its expression is peaceful and content.",
      url:
        "https://oaidalleapiprodscus.blob.core.windows.net/private/image.png",
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `created`                                                      | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            | 1677649420                                                     |
| `data`                                                         | [components.ImageData](../../models/components/imagedata.md)[] | :heavy_check_mark:                                             | N/A                                                            |                                                                |