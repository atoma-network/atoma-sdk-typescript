# ChatCompletionMessage

## Example Usage

```typescript
import { ChatCompletionMessage } from "atoma-sdk/models/components";

let value: ChatCompletionMessage = {
  content: "<value>",
  role: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `content`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | The contents of the message                                                                  |
| `name`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | The name of the author of this message                                                       |
| `role`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | The role of the message author. One of: "system", "user", "assistant", "tool", or "function" |