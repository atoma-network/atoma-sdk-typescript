# CreateEmbeddingRequest

Request object for creating embeddings

## Example Usage

```typescript
import { CreateEmbeddingRequest } from "atoma-sdk/models/components";

let value: CreateEmbeddingRequest = {
  input: [
    "<value>",
  ],
  model: "Element",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `dimensions`                                                                                                     | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | The number of dimensions the resulting output embeddings should have.<br/>Only supported in text-embedding-3 models. |
| `encodingFormat`                                                                                                 | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The format to return the embeddings in. Can be "float" or "base64".<br/>Defaults to "float"                      |
| `input`                                                                                                          | *components.EmbeddingInput*                                                                                      | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `model`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | ID of the model to use.                                                                                          |
| `user`                                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse.               |