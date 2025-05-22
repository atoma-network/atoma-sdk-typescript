# CompletionsResponse

## Example Usage

```typescript
import { CompletionsResponse } from "atoma-sdk/models/components";

let value: CompletionsResponse = {
  choices: [
    {
      finishReason: "stop",
      index: 0,
      logprobs: null,
      text: "This is a test",
    },
  ],
  created: 2021-01-01T00:00:00Z,
  id: "cmpl-1234567890",
  model: "meta-llama/Llama-3.3-70B-Instruct",
  object: "text_completion",
  systemFingerprint: "system-fingerprint",
  usage: {
    completionTokens: 10,
    completionTokensDetails: {
      acceptedPredictionTokens: 10,
      audioTokens: 0,
      reasoningTokens: 10,
      rejectedPredictionTokens: 0,
    },
    promptTokens: 10,
    promptTokensDetails: {
      audioTokens: 0,
      cachedTokens: 10,
    },
    totalTokens: 20,
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `choices`                                                                               | [components.CompletionChoice](../../models/components/completionchoice.md)[]            | :heavy_check_mark:                                                                      | Array of completion choices response                                                    | [<br/>{<br/>"text": "This is a test",<br/>"index": 0,<br/>"logprobs": null,<br/>"finish_reason": "stop"<br/>}<br/>] |
| `created`                                                                               | *number*                                                                                | :heavy_check_mark:                                                                      | The creation time of the request                                                        | 2021-01-01 00:00:00 +0000 UTC                                                           |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | The ID of the request                                                                   | cmpl-1234567890                                                                         |
| `model`                                                                                 | *string*                                                                                | :heavy_check_mark:                                                                      | The model used for the request                                                          | meta-llama/Llama-3.3-70B-Instruct                                                       |
| `object`                                                                                | *string*                                                                                | :heavy_check_mark:                                                                      | The object type                                                                         | text_completion                                                                         |
| `systemFingerprint`                                                                     | *string*                                                                                | :heavy_check_mark:                                                                      | The system fingerprint                                                                  | system-fingerprint                                                                      |
| `usage`                                                                                 | [components.Usage](../../models/components/usage.md)                                    | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |