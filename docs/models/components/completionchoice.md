# CompletionChoice

A completion choice response

## Example Usage

```typescript
import { CompletionChoice } from "atoma-sdk/models/components";

let value: CompletionChoice = {
  finishReason: "stop",
  index: 0,
  logprobs: {
    textOffset: [
      0,
      10,
    ],
    tokenLogprobs: [
      0.5,
      -0.5,
    ],
    tokens: [
      "Hello ",
      "world",
    ],
    topLogprobs: [
      {
        "Hello ": -0.2,
        "world": -0.8,
      },
    ],
  },
  text: "This is a test",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `finishReason`                                             | *string*                                                   | :heavy_check_mark:                                         | The reason the model stopped generating tokens             | stop                                                       |
| `index`                                                    | *number*                                                   | :heavy_check_mark:                                         | The index of the choice in the list of choices             | 0                                                          |
| `logprobs`                                                 | [components.LogProbs](../../models/components/logprobs.md) | :heavy_minus_sign:                                         | N/A                                                        |                                                            |
| `text`                                                     | *string*                                                   | :heavy_check_mark:                                         | The generated text                                         | This is a test                                             |