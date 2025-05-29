# ToolChoiceLiteral

A literal tool choice that can be used in a chat completion.

This is used to represent the literal tool choice in the chat completion request.
It can be either none or auto.

## Example Usage

```typescript
import { ToolChoiceLiteral } from "atoma-sdk/models/components";

let value: ToolChoiceLiteral = "auto";
```

## Values

```typescript
"none" | "auto"
```