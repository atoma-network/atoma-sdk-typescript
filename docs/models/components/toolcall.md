# ToolCall

Represents the tool call that the model made.

This is used to represent the tool call that the model made in the chat completion request.
It can be either a function or a tool.

## Example Usage

```typescript
import { ToolCall } from "atoma-sdk/models/components";

let value: ToolCall = {
  function: {
    arguments: "<value>",
    name: "<value>",
  },
  id: "<id>",
  type: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `function`                                                                                                                                                                               | [components.ToolCallFunction](../../models/components/toolcallfunction.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                                       | Represents the function that the model called.<br/><br/>This is used to represent the function that the model called in the chat completion request.<br/>It can be either a function or a tool call. |
| `id`                                                                                                                                                                                     | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The ID of the tool call.                                                                                                                                                                 |
| `type`                                                                                                                                                                                   | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The type of the tool. Currently, only function is supported.                                                                                                                             |