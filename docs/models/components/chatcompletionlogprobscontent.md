# ChatCompletionLogProbsContent

Represents the chat completion log probs content.

This is used to represent the chat completion log probs content in the chat completion request.
It can be either a chat completion log probs content or a chat completion log probs content choice.

## Example Usage

```typescript
import { ChatCompletionLogProbsContent } from "atoma-sdk/models/components";

let value: ChatCompletionLogProbsContent = {
  topLogprobs: [
    {
      logprob: 1921.86,
      token: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `topLogprobs`                                                                          | [components.ChatCompletionLogProb](../../models/components/chatcompletionlogprob.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |