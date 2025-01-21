import { box, randomBytes } from 'tweetnacl';
import { createHash, createHmac, createCipheriv, createDecipheriv } from 'crypto';
// import { encodeBase64, decodeBase64 } from 'tweetnacl-util';
// import { BLAKE2b } from '@stablelib/blake2b';

// Constants matching Python implementation
export const SALT_SIZE = 16;
export const NONCE_SIZE = 12;  // AESGCM uses 12 bytes for nonce
export const KEY_SIZE = 32;

export interface ConfidentialComputeRequest {
    ciphertext: string;
    client_dh_public_key: string;
    model_name: string;
    node_dh_public_key: string;
    nonce: string;
    plaintext_body_hash: string;
    salt: string;
    stack_small_id: string;
    num_compute_uniths?: number;
    stream?: boolean;
}

export interface ConfidentialComputeResponse {
    ciphertext: string;
    nonce: string;
    response_hash?: string;
}

/**
 * Derives an encryption key using HMAC-based key derivation
 * @param sharedSecret The shared secret from which to derive the key
 * @param salt Random salt value used in the key derivation
 * @returns A 32-byte derived encryption key
 */
export function deriveKey(sharedSecret: Uint8Array, salt: Uint8Array): Uint8Array {
    if (!sharedSecret.length || !salt.length) {
        throw new Error('sharedSecret and salt must be non-empty');
    }

    // Simple key derivation using HMAC-SHA256
    const hmac = createHmac('sha256', salt);
    hmac.update(sharedSecret);
    return new Uint8Array(hmac.digest());
}

/**
 * Calculate a cryptographic hash of the input data using BLAKE2b
 * @param data The input data to be hashed
 * @returns A 32-byte hash
 */
export function calculateHash(data: Uint8Array): Uint8Array {
    const hash = createHash('blake2b512');
    hash.update(data);
    return new Uint8Array(hash.digest().slice(0, 32));  // Take first 32 bytes
}

/**
 * Encrypts a message using X25519 key exchange and AES-GCM encryption
 * @param message The message to encrypt
 * @param clientPrivateKey Client's X25519 private key
 * @param nodePublicKey Node's X25519 public key
 * @param salt Random salt for key derivation
 * @param nonce Random nonce for encryption
 * @returns The encrypted message
 */
export function encryptMessage(
    message: Uint8Array,
    clientPrivateKey: Uint8Array,
    nodePublicKey: Uint8Array,
    salt: Uint8Array,
    nonce: Uint8Array
): Uint8Array {
    // Generate shared secret
    const sharedSecret = box.before(nodePublicKey, clientPrivateKey);
    
    // Derive encryption key
    const encryptionKey = deriveKey(sharedSecret, salt);
    
    // Create cipher
    const cipher = createCipheriv('aes-256-gcm', encryptionKey, nonce);
    
    // Encrypt
    const encrypted = Buffer.concat([
        cipher.update(message),
        cipher.final(),
        cipher.getAuthTag()
    ]);
    
    return new Uint8Array(encrypted);
}

/**
 * Decrypts a message using X25519 key exchange and AES-GCM decryption
 * @param ciphertext The encrypted message
 * @param clientPrivateKey Client's X25519 private key
 * @param nodePublicKey Node's X25519 public key
 * @param salt Salt used in key derivation
 * @param nonce Nonce used in encryption
 * @returns The decrypted message
 */
export function decryptMessage(
    ciphertext: Uint8Array,
    clientPrivateKey: Uint8Array,
    nodePublicKey: Uint8Array,
    salt: Uint8Array,
    nonce: Uint8Array
): Uint8Array | null {
    try {
        // Generate shared secret
        const sharedSecret = box.before(nodePublicKey, clientPrivateKey);
        
        // Derive encryption key
        const encryptionKey = deriveKey(sharedSecret, salt);
        
        // Extract auth tag (last 16 bytes)
        const authTag = ciphertext.slice(-16);
        const encryptedData = ciphertext.slice(0, -16);
        
        // Create decipher
        const decipher = createDecipheriv('aes-256-gcm', encryptionKey, nonce);
        decipher.setAuthTag(authTag);
        
        // Decrypt
        const decrypted = Buffer.concat([
            decipher.update(encryptedData),
            decipher.final()
        ]);
        
        return new Uint8Array(decrypted);
    } catch (error) {
        return null;
    }
}

/**
 * Helper function to generate a random keypair
 * @returns An object containing the keypair
 */
export function generateKeyPair() {
    const keypair = box.keyPair();
    return {
        publicKey: keypair.publicKey,
        privateKey: keypair.secretKey
    };
}

/**
 * Helper function to generate random bytes
 * @param length Number of bytes to generate
 * @returns Random bytes
 */
export function generateRandomBytes(length: number): Uint8Array {
    return randomBytes(length);
} 