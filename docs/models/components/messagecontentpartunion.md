# MessageContentPartUnion

Represents a part of a message content.

This is used to represent the content of a message in the chat completion request.
It can be either a text or an image.


## Supported Types

### `components.MessageContentPart1`

```typescript
const value: components.MessageContentPart1 = {
  text: "<value>",
  type: "<value>",
};
```

### `components.MessageContentPart2`

```typescript
const value: components.MessageContentPart2 = {
  imageUrl: {
    url: "https://quixotic-baseboard.name/",
  },
  type: "<value>",
};
```

