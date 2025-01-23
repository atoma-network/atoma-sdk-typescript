import { config } from 'dotenv';
import { AtomaSDK } from '../../src/sdk/sdk';

config();

const requireEnvVar = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Environment variable ${name} is required`);
  }
  return value;
};

describe('Chat Completions Stream Integration Tests', () => {
  const sdk = new AtomaSDK({
    bearerAuth: requireEnvVar('ATOMASDK_BEARER_AUTH'),
    serverURL: requireEnvVar('CHAT_COMPLETIONS_URL'),
  });

  it('should successfully stream chat completion chunks', async () => {
    const stream = await sdk.chat.createStream({
      model: requireEnvVar('CHAT_COMPLETIONS_MODEL'),
      messages: [
        {
          role: 'user',
          content: 'Count from 1 to 3 very slowly.',
        },
      ],
      maxTokens: 100,
      temperature: 0.7,
    });

    const chunks: string[] = [];
    let contentReceived = false;

    for await (const chunk of stream) {
      if (chunk.data.choices?.[0]?.delta?.content) {
        chunks.push(chunk.data.choices[0].delta.content);
        contentReceived = true;
      }
    }

    expect(contentReceived).toBe(true);
    expect(chunks.length).toBeGreaterThan(0);
    
    // Join chunks to verify the complete response
    const fullResponse = chunks.join('');
    expect(fullResponse).toContain('1');
    expect(fullResponse.length).toBeGreaterThan(0);
  }, 30000);

  it('should handle streaming errors appropriately', async () => {
    await expect(async () => {
      const stream = await sdk.chat.createStream({
        model: 'invalid-model',
        messages: [
          {
            role: 'user',
            content: 'This should fail',
          },
        ],
      });

      // Try to consume the stream
      for await (const chunk of stream) {
        // This should throw before we get here
        console.log(chunk);
      }
    }).rejects.toThrow();
  });
}); 