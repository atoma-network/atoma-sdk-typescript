# ChatCompletionLogProbs

Represents the chat completion log probs.

This is used to represent the chat completion log probs in the chat completion request.
It can be either a chat completion log probs or a chat completion log probs choice.

## Example Usage

```typescript
import { ChatCompletionLogProbs } from "atoma-sdk/models/components";

let value: ChatCompletionLogProbs = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `content`                                                                                              | [components.ChatCompletionLogProbsContent](../../models/components/chatcompletionlogprobscontent.md)[] | :heavy_minus_sign:                                                                                     | The log probs of the chat completion.                                                                  |