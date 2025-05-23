# ResponseFormat

The format to return the response in.

This is used to represent the format to return the response in in the chat completion request.
It can be either text, json_object, or json_schema.

## Example Usage

```typescript
import { ResponseFormat } from "atoma-sdk/models/components";

let value: ResponseFormat = {
  type: "json_schema",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `jsonSchema`                                                                               | [components.JsonSchemaResponseFormat](../../models/components/jsonschemaresponseformat.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [components.ResponseFormatType](../../models/components/responseformattype.md)             | :heavy_check_mark:                                                                         | The format to return the response in.                                                      |