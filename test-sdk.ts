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
		const result = await atomaSDK.chat.create({
			messages: [
				{
					role: "system",
					content: "You are a helpful AI assistant"
				},
				{
					role: "user",
					content: "What is the capital of France?"
				}
			],
			model: "meta-llama/Llama-3.1-8B-Instruct",
			temperature: 0.7,
		});
		console.log("Chat completion response:", result);
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
