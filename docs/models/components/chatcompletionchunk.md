# ChatCompletionChunk

## Example Usage

```typescript
import { ChatCompletionChunk } from "atoma-sdk/models/components";

let value: ChatCompletionChunk = {
  choices: [
    {
      delta: {},
      index: 925597,
    },
  ],
  created: 71036,
  id: "<id>",
  model: "ATS",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `choices`                                                                                      | [components.ChatCompletionChunkChoice](../../models/components/chatcompletionchunkchoice.md)[] | :heavy_check_mark:                                                                             | A list of chat completion chunk choices.                                                       |
| `created`                                                                                      | *number*                                                                                       | :heavy_check_mark:                                                                             | The Unix timestamp (in seconds) of when the chunk was created.                                 |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | A unique identifier for the chat completion chunk.                                             |
| `model`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | The model used for the chat completion.                                                        |