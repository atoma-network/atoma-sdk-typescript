import { box, randomBytes } from 'tweetnacl';
import { createHmac, createCipheriv, createDecipheriv } from 'crypto';
import { createHash as createBlake2Hash } from 'blake2';
// import { encodeBase64, decodeBase64 } from 'tweetnacl-util';
// import { BLAKE2b } from '@stablelib/blake2b';
import { AtomaSDKCore } from '../core.js';
import { nodesNodesCreateLock } from '../funcs/nodesNodesCreateLock.js';
import * as components from '../models/components/index.js';

export const SALT_SIZE = 16;
export const NONCE_SIZE = 12;  // AESGCM uses 12 bytes for nonce
export const KEY_SIZE = 32;

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
    const hash = createBlake2Hash('blake2b', { digestLength: 32 });  // Use BLAKE2b with 32-byte digest
    hash.update(data);
    return new Uint8Array(hash.digest());
}

/**
 * Encrypts a request message using X25519 key exchange and AES-GCM encryption.
 * @param sdk The SDK instance containing configuration for API calls
 * @param clientDhPrivateKey The client's X25519 private key for key exchange
 * @param requestBody A request object containing the data to encrypt
 * @param model The model identifier to use for the request
 * @returns A tuple containing [nodePublicKey, salt, encryptedRequest]
 */
export async function encryptMessage(
  sdk: AtomaSDKCore,
  clientDhPrivateKey: Uint8Array,
  requestBody: any,
  model: string
): Promise<[Uint8Array, Uint8Array, components.ConfidentialComputeRequest$Outbound]> {
  // Generate our public key from private key
  const keyPair = box.keyPair();
  keyPair.secretKey.set(clientDhPrivateKey);
  const clientDhPublicKey = keyPair.publicKey;

  // Get node's public key
  const nodeRes = await nodesNodesCreateLock(sdk, { model }, undefined);
  if (!nodeRes.ok) {
    throw new Error('Failed to get node public key: ' + nodeRes.error);
  }

  const nodeDhPublicKeyBytes = Buffer.from(nodeRes.value.publicKey, 'base64');
  const stackSmallId = nodeRes.value.stackSmallId;

  // Generate random salt and create shared secret
  const salt = generateRandomBytes(SALT_SIZE);
  const sharedSecret = box.before(nodeDhPublicKeyBytes, clientDhPrivateKey);
  const encryptionKey = deriveKey(sharedSecret, salt);
  const nonce = generateRandomBytes(NONCE_SIZE);

  // Encrypt the message
  const message = Buffer.from(JSON.stringify(requestBody));
  console.log('=== TypeScript Message to Hash ===');
  console.log(message.toString('utf8'));
  const plaintextBodyHash = calculateHash(message);

  // Create cipher
  const cipher = createCipheriv('aes-256-gcm', encryptionKey, nonce);
  const encrypted = Buffer.concat([
    cipher.update(message),
    cipher.final(),
    cipher.getAuthTag()
  ]);

  // Return the encrypted request with snake_case fields
  return [
    nodeDhPublicKeyBytes,
    salt,
    {
      ciphertext: encrypted.toString('base64'),
      client_dh_public_key: Buffer.from(clientDhPublicKey).toString('base64'),
      model_name: model,
      node_dh_public_key: nodeRes.value.publicKey,
      nonce: Buffer.from(nonce).toString('base64'),
      plaintext_body_hash: Buffer.from(plaintextBodyHash).toString('base64'),
      salt: Buffer.from(salt).toString('base64'),
      stack_small_id: stackSmallId,
      stream: requestBody.stream || false
    }
  ];
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