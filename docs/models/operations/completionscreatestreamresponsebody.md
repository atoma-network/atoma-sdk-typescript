# CompletionsCreateStreamResponseBody

Completions

## Example Usage

```typescript
import { CompletionsCreateStreamResponseBody } from "atoma-sdk/models/operations";

let value: CompletionsCreateStreamResponseBody = {
  data: {
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
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [components.CompletionsStreamResponse](../../models/components/completionsstreamresponse.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |