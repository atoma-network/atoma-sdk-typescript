# ChatCompletionChunkChoice

## Example Usage

```typescript
import { ChatCompletionChunkChoice } from "atoma-sdk/models/components";

let value: ChatCompletionChunkChoice = {
  delta: {},
  index: 20218,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `delta`                                                                                    | [components.ChatCompletionChunkDelta](../../models/components/chatcompletionchunkdelta.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `finishReason`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | The reason the chat completion was finished, if applicable.                                |
| `index`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The index of this choice in the list of choices.                                           |