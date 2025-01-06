# EmbeddingUsage

Usage information for the embeddings request

## Example Usage

```typescript
import { EmbeddingUsage } from "atoma-sdk/models/components";

let value: EmbeddingUsage = {
  promptTokens: 118274,
  totalTokens: 639921,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `promptTokens`                   | *number*                         | :heavy_check_mark:               | Number of tokens in the prompt   |
| `totalTokens`                    | *number*                         | :heavy_check_mark:               | Total tokens used in the request |