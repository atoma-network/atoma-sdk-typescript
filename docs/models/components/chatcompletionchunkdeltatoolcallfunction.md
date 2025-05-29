# ChatCompletionChunkDeltaToolCallFunction

Represents the chat completion chunk delta tool call function.

This is used to represent the chat completion chunk delta tool call function in the chat completion request.
It can be either a chat completion chunk delta tool call function or a chat completion chunk delta tool call function arguments.

## Example Usage

```typescript
import { ChatCompletionChunkDeltaToolCallFunction } from "atoma-sdk/models/components";

let value: ChatCompletionChunkDeltaToolCallFunction = {};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `arguments`                              | *string*                                 | :heavy_minus_sign:                       | The arguments of the tool call function. |
| `name`                                   | *string*                                 | :heavy_minus_sign:                       | The name of the tool call function.      |