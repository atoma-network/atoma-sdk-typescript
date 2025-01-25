# CreateEmbeddingRequest

Request object for creating embeddings

## Example Usage

```typescript
import { CreateEmbeddingRequest } from "atoma-sdk/models/components";

let value: CreateEmbeddingRequest = {
  encodingFormat: "float",
  input: [
    "[\"The quick brown fox\", \"jumped over the lazy dog\"]",
  ],
  model: "intfloat/multilingual-e5-large-instruct",
  user: "user-1234",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `dimensions`                                                                                       | *number*                                                                                           | :heavy_minus_sign:                                                                                 | The number of dimensions the resulting output embeddings should have.                              |                                                                                                    |
| `encodingFormat`                                                                                   | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The format to return the embeddings in. Can be "float" or "base64".<br/>Defaults to "float"        | float                                                                                              |
| `input`                                                                                            | *components.EmbeddingInput*                                                                        | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `model`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | ID of the model to use.                                                                            | intfloat/multilingual-e5-large-instruct                                                            |
| `user`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. | user-1234                                                                                          |