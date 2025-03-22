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

async function testChatCompletion() {
	try {
		console.log("\nTesting chat completion...");
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

		console.log("Chat completion response:", chatCompletions);

	} catch (error) {
		console.error("Error during chat completion:", error);
	}
}

// Run both tests
async function runTests() {
	await testHealthCheck();
	await testChatCompletion();
}

runTests();
