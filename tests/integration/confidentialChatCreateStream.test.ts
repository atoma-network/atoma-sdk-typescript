import { config } from 'dotenv';
import { AtomaSDK } from '../../src/sdk';
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

describe('Confidential Chat Streaming Integration Tests', () => {
    const sdk = new AtomaSDK({
        bearerAuth: requireEnvVar('ATOMASDK_BEARER_AUTH'),
        serverURL: requireEnvVar('CHAT_COMPLETIONS_URL')
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
                console.log('Received chunk:', content);
            }
        }

        const fullResponse = chunks.join('');
        console.log('Full response:', fullResponse);
        
        // Verify streaming functionality works
        expect(chunks.length).toBeGreaterThan(0);
        expect(fullResponse.length).toBeGreaterThan(0);
    }, 30000); // 30 second timeout
}); 