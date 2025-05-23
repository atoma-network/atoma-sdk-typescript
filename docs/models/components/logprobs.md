# LogProbs

## Example Usage

```typescript
import { LogProbs } from "atoma-sdk/models/components";

let value: LogProbs = {
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
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `textOffset`                          | *number*[]                            | :heavy_check_mark:                    | The text offset of the tokens         | [<br/>0,<br/>10<br/>]                 |
| `tokenLogprobs`                       | *number*[]                            | :heavy_check_mark:                    | The log probabilities of the tokens   | [<br/>0.5,<br/>-0.5<br/>]             |
| `tokens`                              | *string*[]                            | :heavy_check_mark:                    | The tokens                            | [<br/>"Hello ",<br/>"world"<br/>]     |
| `topLogprobs`                         | Record<string, *number*>[]            | :heavy_check_mark:                    | The top log probabilities             | [<br/>{<br/>"Hello ": -0.2,<br/>"world": -0.8<br/>}<br/>] |