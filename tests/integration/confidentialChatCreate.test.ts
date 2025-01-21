import { config } from 'dotenv';
import { AtomaSDK } from '../../src';
import { expect, describe } from "@jest/globals";

config();

const requireEnvVar = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Environment variable ${name} is required`);
  }
  return value;
};

describe('Confidential Chat Integration Tests', () => {
  const sdk = new AtomaSDK({
    bearerAuth: requireEnvVar('ATOMASDK_BEARER_AUTH'),
    serverURL: requireEnvVar('CHAT_COMPLETIONS_URL'),
  });

  it('should successfully encrypt, send, and decrypt a chat request', async () => {
    const request = {
      messages: [
        {
          role: 'user',
          content: 'Tell me exactly 1 word.',
        },
      ],
      model: requireEnvVar('CHAT_COMPLETIONS_MODEL'),
      temperature: 0.7,
      maxTokens: 100,
    };

    const result = await sdk.confidentialChat.create(request);
    expect(result.choices).toBeDefined();
    expect(result.choices.length).toBeGreaterThan(0);
    expect(result.choices[0]?.message).toBeDefined();
    expect(result.choices[0]?.message?.content).toBeDefined();
    expect(result.choices[0]?.message?.role).toBe('assistant');
  });

  it('should handle invalid requests appropriately', async () => {
    await expect(
      sdk.confidentialChat.create({
        messages: [
          {
            role: 'user',
            content: 'Hello',
          },
        ],
        model: 'invalid-model',
        temperature: 0.7,
        maxTokens: 100,
      })
    ).rejects.toThrow();
  });
}); 