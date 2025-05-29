# ChatCompletionMessage

A message that is part of a conversation which is based on the role
of the author of the message.

This is used to represent the message in the chat completion request.
It can be either a system message, a user message, an assistant message, or a tool message.


## Supported Types

### `components.System`

```typescript
const value: components.System = {
  name: "AI expert",
  role: "system",
};
```

### `components.User`

```typescript
const value: components.User = {
  name: "John Doe",
  role: "user",
};
```

### `components.Assistant`

```typescript
const value: components.Assistant = {
  name: "AI",
  role: "assistant",
};
```

### `components.Tool`

```typescript
const value: components.Tool = {
  role: "tool",
};
```

