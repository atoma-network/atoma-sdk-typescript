# CreateEmbeddingResponse

Response object from creating embeddings

## Example Usage

```typescript
import { CreateEmbeddingResponse } from "atoma-sdk/models/components";

let value: CreateEmbeddingResponse = {
  data: [
    {
      embedding: [
        8700.12,
      ],
      index: 978619,
      object: "<value>",
    },
  ],
  model: "PT Cruiser",
  object: "<value>",
  usage: {
    promptTokens: 461479,
    totalTokens: 780529,
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