<!-- Start SDK Example Usage [usage] -->
```typescript
import { AtomaSDK } from "atoma-sdk";

const atomaSDK = new AtomaSDK({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await atomaSDK.health.health();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->