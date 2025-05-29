<!-- Start SDK Example Usage [usage] -->
```typescript
import { AtomaSDK } from "atoma-sdk";

const atomaSDK = new AtomaSDK({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await atomaSDK.completions.create({
    frequencyPenalty: 0,
    logitBias: {
      "1234567890": 0.5,
      "1234567891": -0.5,
    },
    logprobs: 1,
    model: "meta-llama/Llama-3.3-70B-Instruct",
    n: 1,
    presencePenalty: 0,
    prompt: [
      "Hello!",
    ],
    seed: 123,
    stop: [
      "json([\"stop\", \"halt\"])",
    ],
    stream: false,
    suffix: "json(\"\n\")",
    temperature: 0.7,
    topP: 1,
    user: "user-1234",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->