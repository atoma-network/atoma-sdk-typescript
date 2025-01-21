const {
    generateKeyPair,
    generateRandomBytes,
    deriveKey,
    calculateHash,
    encryptMessage,
    decryptMessage,
    SALT_SIZE,
    NONCE_SIZE
} = require('../../src/lib/crypto_utils');

describe('Crypto Utils', () => {
    describe('Key Generation', () => {
        it('should generate valid keypairs', () => {
            const keypair = generateKeyPair();
            expect(keypair.publicKey).toBeInstanceOf(Uint8Array);
            expect(keypair.privateKey).toBeInstanceOf(Uint8Array);
            expect(keypair.publicKey.length).toBe(32);
            expect(keypair.privateKey.length).toBe(32);
        });

        it('should generate random bytes of specified length', () => {
            const bytes = generateRandomBytes(SALT_SIZE);
            expect(bytes).toBeInstanceOf(Uint8Array);
            expect(bytes.length).toBe(SALT_SIZE);
        });
    });

    describe('Key Derivation', () => {
        it('should derive consistent keys from same inputs', () => {
            const secret = generateRandomBytes(32);
            const salt = generateRandomBytes(SALT_SIZE);
            
            const key1 = deriveKey(secret, salt);
            const key2 = deriveKey(secret, salt);
            
            expect(key1).toEqual(key2);
            expect(key1.length).toBe(32);
        });

        it('should derive different keys from different salts', () => {
            const secret = generateRandomBytes(32);
            const salt1 = generateRandomBytes(SALT_SIZE);
            const salt2 = generateRandomBytes(SALT_SIZE);
            
            const key1 = deriveKey(secret, salt1);
            const key2 = deriveKey(secret, salt2);
            
            expect(key1).not.toEqual(key2);
        });
    });

    describe('Hashing', () => {
        it('should generate consistent hashes for same input', () => {
            const data = new TextEncoder().encode('test message');
            const hash1 = calculateHash(data);
            const hash2 = calculateHash(data);
            
            expect(hash1).toEqual(hash2);
            expect(hash1.length).toBe(32);
        });

        it('should generate different hashes for different inputs', () => {
            const data1 = new TextEncoder().encode('message1');
            const data2 = new TextEncoder().encode('message2');
            
            const hash1 = calculateHash(data1);
            const hash2 = calculateHash(data2);
            
            expect(hash1).not.toEqual(hash2);
        });
    });

    describe('Encryption and Decryption', () => {
        it('should successfully encrypt and decrypt a message', () => {
            // Generate keys
            const clientKeypair = generateKeyPair();
            const nodeKeypair = generateKeyPair();
            
            // Generate salt and nonce
            const salt = generateRandomBytes(SALT_SIZE);
            const nonce = generateRandomBytes(NONCE_SIZE);
            
            // Original message
            const originalMessage = new TextEncoder().encode('Hello, World!');
            
            // Encrypt
            const encrypted = encryptMessage(
                originalMessage,
                clientKeypair.privateKey,
                nodeKeypair.publicKey,
                salt,
                nonce
            );
            
            // Decrypt
            const decrypted = decryptMessage(
                encrypted,
                nodeKeypair.privateKey,
                clientKeypair.publicKey,
                salt,
                nonce
            );
            
            expect(decrypted).not.toBeNull();
            if (decrypted) {
                expect(new TextDecoder().decode(decrypted)).toBe('Hello, World!');
            }
        });

        it('should fail to decrypt with wrong keys', () => {
            const clientKeypair = generateKeyPair();
            const nodeKeypair = generateKeyPair();
            const wrongKeypair = generateKeyPair();
            
            const salt = generateRandomBytes(SALT_SIZE);
            const nonce = generateRandomBytes(NONCE_SIZE);
            
            const message = new TextEncoder().encode('secret message');
            
            const encrypted = encryptMessage(
                message,
                clientKeypair.privateKey,
                nodeKeypair.publicKey,
                salt,
                nonce
            );
            
            const decrypted = decryptMessage(
                encrypted,
                wrongKeypair.privateKey, // Wrong key
                clientKeypair.publicKey,
                salt,
                nonce
            );
            
            expect(decrypted).toBeNull();
        });
    });
}); 