# ChatCompletionToolsParam

A tool that can be used in a chat completion.

## Example Usage

```typescript
import { ChatCompletionToolsParam } from "atoma-sdk/models/components";

let value: ChatCompletionToolsParam = {
  function: {
    name: "<value>",
  },
  type: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `function`                                                                                               | [components.ChatCompletionToolFunctionParam](../../models/components/chatcompletiontoolfunctionparam.md) | :heavy_check_mark:                                                                                       | A function that can be used in a chat completion.                                                        |
| `type`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The type of the tool.                                                                                    |