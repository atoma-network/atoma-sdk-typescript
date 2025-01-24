<!-- Start SDK Example Usage [usage] -->
```typescript
import { AtomaSDK } from "atoma-sdk";

const atomaSDK = new AtomaSDK({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await atomaSDK.chat.create({
    messages: [
      {
        content: "Hello! How can you help me today?",
        role: "user",
      },
    ],
    model: "meta-llama/Llama-3.3-70B-Instruct",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->