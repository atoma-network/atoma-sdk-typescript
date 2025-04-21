# System

The role of the messages author, in this case system.

## Example Usage

```typescript
import { System } from "atoma-sdk/models/components";

let value: System = {
  name: "AI expert",
  role: "system",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `content`                                                                                                                    | *components.MessageContent*                                                                                                  | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An optional name for the participant. Provides the model information to differentiate between participants of the same role. | AI expert                                                                                                                    |
| `role`                                                                                                                       | [components.RoleSystem](../../models/components/rolesystem.md)                                                               | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |