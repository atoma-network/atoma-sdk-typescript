# EmbeddingObject

Individual embedding object in the response

## Example Usage

```typescript
import { EmbeddingObject } from "atoma-sdk/models/components";

let value: EmbeddingObject = {
  embedding: [
    [0.0023064255, -0.009327292],
  ],
  index: 0,
  object: "embedding",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `embedding`                                      | *number*[]                                       | :heavy_check_mark:                               | The embedding vector                             | [0.0023064255, -0.009327292]                     |
| `index`                                          | *number*                                         | :heavy_check_mark:                               | Index of the embedding in the list of embeddings | 0                                                |
| `object`                                         | *string*                                         | :heavy_check_mark:                               | The object type, which is always "embedding"     | embedding                                        |