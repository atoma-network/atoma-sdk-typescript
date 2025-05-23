# MessageContentPart2

## Example Usage

```typescript
import { MessageContentPart2 } from "atoma-sdk/models/components";

let value: MessageContentPart2 = {
  imageUrl: {
    url: "https://pretty-bran.info/",
  },
  type: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                         | Type                                                                                                                                                                                                          | Required                                                                                                                                                                                                      | Description                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `imageUrl`                                                                                                                                                                                                    | [components.MessageContentPartImageUrl](../../models/components/messagecontentpartimageurl.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                                                            | Represents the image URL of a message content part.<br/><br/>This is used to represent the image URL of a message content part in the chat completion request.<br/>It can be either a URL or a base64 encoded image data. |
| `type`                                                                                                                                                                                                        | *string*                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                            | The type of the content part.                                                                                                                                                                                 |