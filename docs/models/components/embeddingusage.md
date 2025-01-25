# EmbeddingUsage

Usage information for the embeddings request

## Example Usage

```typescript
import { EmbeddingUsage } from "atoma-sdk/models/components";

let value: EmbeddingUsage = {
  promptTokens: 8,
  totalTokens: 8,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `promptTokens`                   | *number*                         | :heavy_check_mark:               | Number of tokens in the prompt   | 8                                |
| `totalTokens`                    | *number*                         | :heavy_check_mark:               | Total tokens used in the request | 8                                |