import { CreateChatCompletionRequest } from "./src/models/components/createchatcompletionrequest.js";
import { AtomaSDK } from "./src/sdk/sdk.js";

// Initialize the SDK with bearer token from environment variable
const atomaSDK = new AtomaSDK({
	bearerAuth: process.env.ATOMA_API_KEY
});

async function testHealthCheck() {
	try {
		console.log("Testing health check endpoint...");
		const result = await atomaSDK.health.health();
		console.log("Health check response:", result);
	} catch (error) {
		console.error("Error during health check:", error);
	}
}

async function testConfidentialChat() {
	try {
		console.log("\nTesting confidential chat completion...");
		const chatCompletionsRequest: CreateChatCompletionRequest = {
			model: 'neuralmagic/Qwen2-72B-Instruct-FP8',
			messages: [
				{
					role: 'user',
					content: 'Tell me a funny joke',
				},
			],
			stream: false,
			maxTokens: 256,
		};

		const chatCompletions = await atomaSDK.confidentialChat.create(chatCompletionsRequest)
		console.log("Chat completion response:", chatCompletions.choices[0].message.content);
	} catch (error) {
		console.error("Error during confidential chat completion:", error);
	}
}

async function testConfidentialChatStream() {
	try {
		console.log("\nTesting confidential chat stream completion...");
		const chatCompletionsRequest: CreateChatCompletionRequest = {
			model: 'neuralmagic/Qwen2-72B-Instruct-FP8',
			messages: [
				{
					role: 'user',
					content: 'Tell me a funny joke',
				},
			],
			stream: false,
			maxTokens: 256,
		};

		const chatCompletions = await atomaSDK.confidentialChat.createStream(chatCompletionsRequest)
		const chunks: string[] = [];
		for await (const chunk of chatCompletions) {
			const content = chunk.data.choices?.[0]?.delta?.content;
			if (content) {
				chunks.push(content);
				console.log('Received chunk:', content);
			}
		}

		const fullResponse = chunks.join('');
		console.log('Full response:', fullResponse);

	} catch (error) {
		console.error("Error during chat completion:", error);
	}
}

// Run both tests
async function runTests() {
	await testHealthCheck();
	await testConfidentialChat();
	await testConfidentialChatStream();
}

runTests();
