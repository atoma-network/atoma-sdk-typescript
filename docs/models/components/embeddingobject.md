# EmbeddingObject

Individual embedding object in the response

## Example Usage

```typescript
import { EmbeddingObject } from "atoma-sdk/models/components";

let value: EmbeddingObject = {
  embedding: [
    1433.53,
  ],
  index: 944669,
  object: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `embedding`                                      | *number*[]                                       | :heavy_check_mark:                               | The embedding vector                             |
| `index`                                          | *number*                                         | :heavy_check_mark:                               | Index of the embedding in the list of embeddings |
| `object`                                         | *string*                                         | :heavy_check_mark:                               | The object type, which is always "embedding"     |