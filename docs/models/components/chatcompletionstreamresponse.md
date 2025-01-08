# ChatCompletionStreamResponse

## Example Usage

```typescript
import { ChatCompletionStreamResponse } from "atoma-sdk/models/components";

let value: ChatCompletionStreamResponse = {
  data: {
    choices: [
      {
        delta: {},
        index: 791725,
      },
    ],
    created: 528895,
    id: "<id>",
    model: "Grand Cherokee",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [components.ChatCompletionChunk](../../models/components/chatcompletionchunk.md) | :heavy_check_mark:                                                               | N/A                                                                              |