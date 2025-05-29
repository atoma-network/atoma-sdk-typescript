# Tool

The role of the messages author, in this case tool.

## Example Usage

```typescript
import { Tool } from "atoma-sdk/models/components";

let value: Tool = {
  role: "tool",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `content`                                                  | *components.MessageContent*                                | :heavy_minus_sign:                                         | N/A                                                        |
| `role`                                                     | [components.RoleTool](../../models/components/roletool.md) | :heavy_check_mark:                                         | N/A                                                        |
| `toolCallId`                                               | *string*                                                   | :heavy_minus_sign:                                         | Tool call that this message is responding to.              |