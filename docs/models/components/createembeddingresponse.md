# CreateEmbeddingResponse

Response object from creating embeddings

## Example Usage

```typescript
import { CreateEmbeddingResponse } from "atoma-sdk/models/components";

let value: CreateEmbeddingResponse = {
  data: [
    {
      embedding: [
        [0.0023064255, -0.009327292],
      ],
      index: 0,
      object: "embedding",
    },
  ],
  model: "intfloat/multilingual-e5-large-instruct",
  object: "list",
  usage: {
    promptTokens: 8,
    totalTokens: 8,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [components.EmbeddingObject](../../models/components/embeddingobject.md)[] | :heavy_check_mark:                                                         | List of embedding objects                                                  |                                                                            |
| `model`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | The model used for generating embeddings                                   | intfloat/multilingual-e5-large-instruct                                    |
| `object`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | The object type, which is always "list"                                    | list                                                                       |
| `usage`                                                                    | [components.EmbeddingUsage](../../models/components/embeddingusage.md)     | :heavy_check_mark:                                                         | Usage information for the embeddings request                               |                                                                            |