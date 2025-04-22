# ChatCompletionNamedFunction

A named function that can be used in a chat completion.

This is used to represent the named function in the chat completion request.

## Example Usage

```typescript
import { ChatCompletionNamedFunction } from "atoma-sdk/models/components";

let value: ChatCompletionNamedFunction = {
  name: "<value>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `name`                    | *string*                  | :heavy_check_mark:        | The name of the function. |