# JsonSchemaResponseFormat

The format to return the response in.

This is used to represent the format to return the response in in the chat completion request.
It can be either text, json_object, or json_schema.

## Example Usage

```typescript
import { JsonSchemaResponseFormat } from "atoma-sdk/models/components";

let value: JsonSchemaResponseFormat = {
  name: "<value>",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `description`                                 | *string*                                      | :heavy_minus_sign:                            | The description of the response format.       |
| `name`                                        | *string*                                      | :heavy_check_mark:                            | The name of the response format.              |
| `schema`                                      | *any*                                         | :heavy_minus_sign:                            | The JSON schema of the response format.       |
| `strict`                                      | *boolean*                                     | :heavy_minus_sign:                            | Whether to strictly validate the JSON schema. |