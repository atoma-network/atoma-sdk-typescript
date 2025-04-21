# User

The role of the messages author, in this case user.

## Example Usage

```typescript
import { User } from "atoma-sdk/models/components";

let value: User = {
  name: "John Doe",
  role: "user",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `content`                                                                                                                    | *components.MessageContent*                                                                                                  | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An optional name for the participant. Provides the model information to differentiate between participants of the same role. | John Doe                                                                                                                     |
| `role`                                                                                                                       | [components.RoleUser](../../models/components/roleuser.md)                                                                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |