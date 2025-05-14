# ChatCompletionToolFunctionParam

A function that can be used in a chat completion.

## Example Usage

```typescript
import { ChatCompletionToolFunctionParam } from "atoma-sdk/models/components";

let value: ChatCompletionToolFunctionParam = {
  name: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `description`                                                | *string*                                                     | :heavy_minus_sign:                                           | The description of the function.                             |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | The name of the function.                                    |
| `parameters`                                                 | Record<string, *any*>                                        | :heavy_minus_sign:                                           | The parameters of the function.                              |
| `strict`                                                     | *boolean*                                                    | :heavy_minus_sign:                                           | Whether to strictly validate the parameters of the function. |