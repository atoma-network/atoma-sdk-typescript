# ChatCompletionChunkDeltaToolCall

Represents the chat completion chunk delta tool call.

This is used to represent the chat completion chunk delta tool call in the chat completion request.
It can be either a chat completion chunk delta tool call or a chat completion chunk delta tool call function.

## Example Usage

```typescript
import { ChatCompletionChunkDeltaToolCall } from "atoma-sdk/models/components";

let value: ChatCompletionChunkDeltaToolCall = {
  id: "<id>",
  index: 725603,
  type: "<value>",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `function`                                                                                                                 | [components.ChatCompletionChunkDeltaToolCallFunction](../../models/components/chatcompletionchunkdeltatoolcallfunction.md) | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID of the tool call.                                                                                                   |
| `index`                                                                                                                    | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | The index of the tool call.                                                                                                |
| `type`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The type of the tool call.                                                                                                 |