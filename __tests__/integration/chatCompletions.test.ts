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

describe('Chat Completions Integration Tests', () => {
  const sdk = new AtomaSDK({
    bearerAuth: requireEnvVar('ATOMASDK_BEARER_AUTH'),
    serverURL: requireEnvVar('CHAT_COMPLETIONS_URL'),
  });

  it('should successfully generate a chat completion', async () => {
    const response = await sdk.chat.create({
      model: requireEnvVar('CHAT_COMPLETIONS_MODEL'),
      messages: [
        {
          role: 'user',
          content: 'What is 2+2?',
        },
      ],
    });

    expect(response).toBeDefined();
    expect(response.choices).toBeDefined();
    expect(response.choices.length).toBeGreaterThan(0);
    expect(response.choices[0]?.message).toBeDefined();
    expect(response.choices[0]?.message?.content).toBeDefined();
  });

  it('should handle invalid requests appropriately', async () => {
    await expect(
      sdk.chat.create({
        model: 'invalid-model',
        messages: [
          {
            role: 'user',
            content: 'Test message',
          },
        ],
      })
    ).rejects.toThrow();
  });
}); 