# ChatCompletionChunkDelta

## Example Usage

```typescript
import { ChatCompletionChunkDelta } from "atoma-sdk/models/components";

let value: ChatCompletionChunkDelta = {
  content: "Hello",
  role: "assistant",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `content`                                                 | *string*                                                  | :heavy_minus_sign:                                        | The content of the message, if present in this chunk.     | Hello                                                     |
| `functionCall`                                            | *any*                                                     | :heavy_minus_sign:                                        | The function call information, if present in this chunk.  |                                                           |
| `role`                                                    | *string*                                                  | :heavy_minus_sign:                                        | The role of the message author, if present in this chunk. | assistant                                                 |
| `toolCalls`                                               | *any*[]                                                   | :heavy_minus_sign:                                        | The tool calls information, if present in this chunk.     |                                                           |