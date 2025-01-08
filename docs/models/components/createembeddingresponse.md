# CreateEmbeddingResponse

Response object from creating embeddings

## Example Usage

```typescript
import { CreateEmbeddingResponse } from "atoma-sdk/models/components";

let value: CreateEmbeddingResponse = {
  data: [
    {
      embedding: [
        7991.59,
      ],
      index: 461479,
      object: "<value>",
    },
  ],
  model: "Mustang",
  object: "<value>",
  usage: {
    promptTokens: 118274,
    totalTokens: 639921,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [components.EmbeddingObject](../../models/components/embeddingobject.md)[] | :heavy_check_mark:                                                         | List of embedding objects                                                  |
| `model`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | The model used for generating embeddings                                   |
| `object`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | The object type, which is always "list"                                    |
| `usage`                                                                    | [components.EmbeddingUsage](../../models/components/embeddingusage.md)     | :heavy_check_mark:                                                         | Usage information for the embeddings request                               |