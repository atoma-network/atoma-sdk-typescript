# PromptTokensDetails

Represents the prompt tokens details.

This is used to represent the prompt tokens details in the chat completion request.
It can be either a prompt tokens details or a prompt tokens details choice.

## Example Usage

```typescript
import { PromptTokensDetails } from "atoma-sdk/models/components";

let value: PromptTokensDetails = {
  cachedTokens: 1,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `cachedTokens`                                   | *number*                                         | :heavy_check_mark:                               | Number of tokens in the prompt that were cached. | 1                                                |