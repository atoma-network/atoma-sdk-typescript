# ChatCompletionStreamResponse

## Example Usage

```typescript
import { ChatCompletionStreamResponse } from "atoma-sdk/models/components";

let value: ChatCompletionStreamResponse = {
  data: {
    choices: [
      {
        delta: {},
        index: 963663,
      },
    ],
    created: 383441,
    id: "<id>",
    model: "PT Cruiser",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [components.ChatCompletionChunk](../../models/components/chatcompletionchunk.md) | :heavy_check_mark:                                                               | N/A                                                                              |