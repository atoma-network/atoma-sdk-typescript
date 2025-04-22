# ToolChoice

A tool choice that can be used in a chat completion.

This is used to represent the tool choice in the chat completion request.
It can be either a literal tool choice or a named tool choice.


## Supported Types

### `components.ToolChoiceLiteral`

```typescript
const value: components.ToolChoiceLiteral = "auto";
```

### `components.ChatCompletionNamedToolChoiceParam`

```typescript
const value: components.ChatCompletionNamedToolChoiceParam = {
  function: {
    name: "<value>",
  },
  type: "<value>",
};
```

