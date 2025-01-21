import { box } from 'tweetnacl';
import { AtomaSDKCore } from '../../src/core';
import { encryptMessage } from '../../src/lib/crypto_utils';

// Fixed test values
const TEST_PRIVATE_KEY = new Uint8Array([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32
]);
const TEST_SALT = new Uint8Array([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
]);
const TEST_NONCE = new Uint8Array([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
]);

// Mock the random generators
jest.mock('tweetnacl', () => {
    const actual = jest.requireActual('tweetnacl');
    return {
        ...actual,
        randomBytes: (length: number) => {
            if (length === 16) return TEST_SALT;
            if (length === 12) return TEST_NONCE;
            return new Uint8Array(length);
        }
    };
});

describe('Crypto Compare Tests', () => {
    const MODEL = "unsloth/Llama-3.2-1B-Instruct";  // Using the model from .env
    
    it('should generate compatible encryption', async () => {
        // Initialize SDK with the bearer token from .env
        const sdk = new AtomaSDKCore({
            bearerAuth: 'smYwSscQDwVdWdByQhmK9LJweuLm61',
            serverURL: 'http://localhost:8080'
        });

        // Create a keypair with our fixed private key
        const clientKeyPair = {
            secretKey: TEST_PRIVATE_KEY,
            publicKey: box.keyPair().publicKey  // We'll let the encryptMessage function handle this
        };
        
        // Create a simple request body similar to what would be used in Python
        const requestBody = {
            messages: [{
                content: "Hello, World!",  // Match Python field order
                role: "user"
            }],
            model: MODEL,  // Include model field like Python
            stream: false
        };

        // Log the JSON that will be encrypted
        console.log('=== TypeScript Request JSON ===');
        console.log(JSON.stringify(requestBody, null, 2));

        // Encrypt message
        const [, , encryptedRequest] = await encryptMessage(
            sdk,
            clientKeyPair.secretKey,
            requestBody,
            MODEL
        );

        // Log values for comparison with Python output
        console.log('=== TypeScript Encryption Output ===');
        console.log('Client Public Key:', encryptedRequest.client_dh_public_key);
        console.log('Node Public Key:', encryptedRequest.node_dh_public_key);
        console.log('Salt:', encryptedRequest.salt);
        console.log('Nonce:', encryptedRequest.nonce);
        console.log('Ciphertext:', encryptedRequest.ciphertext);
        console.log('Plaintext Body Hash:', encryptedRequest.plaintext_body_hash);
        
        // Basic validation
        expect(encryptedRequest.model_name).toBe(MODEL);
        expect(encryptedRequest.stream).toBe(false);
        expect(encryptedRequest.client_dh_public_key).toBeTruthy();
        expect(encryptedRequest.node_dh_public_key).toBeTruthy();
        expect(encryptedRequest.salt).toBeTruthy();
        expect(encryptedRequest.nonce).toBeTruthy();
        expect(encryptedRequest.ciphertext).toBeTruthy();
        expect(encryptedRequest.plaintext_body_hash).toBeTruthy();
    });
}); 