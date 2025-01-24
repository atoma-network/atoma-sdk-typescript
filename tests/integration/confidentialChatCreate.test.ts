import { config } from 'dotenv';
import { AtomaSDK } from '../../src';
import { CreateChatCompletionRequest } from '../../src/models/components';
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

  it('should successfully stream encrypted chat responses', async () => {
    const request: CreateChatCompletionRequest = {
      messages: [{
        role: 'user',
        content: 'Count from 1 to 3 very slowly.'
      }],
      model: requireEnvVar('CHAT_COMPLETIONS_MODEL'),
      maxTokens: 100,
      temperature: 0.7,
    };

    const stream = await sdk.confidentialChat.createStream(request);
    const chunks: string[] = [];

    for await (const chunk of stream) {
      const content = chunk.data.choices?.[0]?.delta?.content;
      if (content) {
        chunks.push(content);
      }
    }

    const fullResponse = chunks.join('');
    
    // Verify streaming functionality works
    expect(chunks.length).toBeGreaterThan(0);
    expect(fullResponse.length).toBeGreaterThan(0);
  }, 30000);

//   it('should handle invalid requests appropriately', async () => {
//     await expect(
//       sdk.confidentialChat.create({
//         messages: [
//           {
//             role: 'user',
//             content: 'Hello',
//           },
//         ],
//         model: 'invalid-model',
//         temperature: 0.7,
//         maxTokens: 100,
//       })
//     ).rejects.toThrow();
//   });
}); 