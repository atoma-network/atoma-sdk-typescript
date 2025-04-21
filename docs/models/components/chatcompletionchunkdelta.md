# ChatCompletionChunkDelta

Represents the chat completion chunk delta.

This is used to represent the chat completion chunk delta in the chat completion request.
It can be either a chat completion chunk delta message or a chat completion chunk delta choice.

## Example Usage

```typescript
import { ChatCompletionChunkDelta } from "atoma-sdk/models/components";

let value: ChatCompletionChunkDelta = {
  content: "Hello",
  role: "assistant",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `content`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The content of the message, if present in this chunk.                                                        | Hello                                                                                                        |
| `reasoningContent`                                                                                           | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The reasoning content, if present in this chunk.                                                             |                                                                                                              |
| `role`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The role of the message author, if present in this chunk.                                                    | assistant                                                                                                    |
| `toolCalls`                                                                                                  | [components.ChatCompletionChunkDeltaToolCall](../../models/components/chatcompletionchunkdeltatoolcall.md)[] | :heavy_minus_sign:                                                                                           | The tool calls information, if present in this chunk.                                                        |                                                                                                              |