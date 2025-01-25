# ChatCompletionMessage

## Example Usage

```typescript
import { ChatCompletionMessage } from "atoma-sdk/models/components";

let value: ChatCompletionMessage = {
  content: "Hello! How can you help me today?",
  name: "john_doe",
  role: "user",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `content`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | The contents of the message                                                                  | Hello! How can you help me today?                                                            |
| `name`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | The name of the author of this message                                                       | john_doe                                                                                     |
| `role`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | The role of the message author. One of: "system", "user", "assistant", "tool", or "function" | user                                                                                         |