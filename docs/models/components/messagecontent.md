# MessageContent

Represents the content of a message.

This is used to represent the content of a message in the chat completion request.
It can be either a text or an array of content parts.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `components.MessageContentPartUnion[]`

```typescript
const value: components.MessageContentPartUnion[] = [
  {
    imageUrl: {
      url: "https://alarmed-quart.name/",
    },
    type: "<value>",
  },
];
```

