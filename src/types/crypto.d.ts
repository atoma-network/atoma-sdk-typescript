declare module 'tweetnacl' {
    export interface KeyPair {
        publicKey: Uint8Array;
        secretKey: Uint8Array;
    }

    export const box: {
        keyPair(): KeyPair;
        before(publicKey: Uint8Array, secretKey: Uint8Array): Uint8Array;
        after(message: Uint8Array, nonce: Uint8Array, key: Uint8Array): Uint8Array;
        open_after(box: Uint8Array, nonce: Uint8Array, key: Uint8Array): Uint8Array | null;
    };

    export function randomBytes(n: number): Uint8Array;
}

declare module 'tweetnacl-util' {
    export function encodeBase64(input: Uint8Array): string;
    export function decodeBase64(input: string): Uint8Array;
}

declare module '@stablelib/hkdf' {
    export class HKDF {
        constructor(hash: string, salt: Uint8Array);
        expand(key: Uint8Array, info: Uint8Array | undefined, length: number): Uint8Array;
    }
}

declare module '@stablelib/blake2b' {
    export class BLAKE2b {
        constructor(digestLength: number);
        update(data: Uint8Array): this;
        digest(): Uint8Array;
    }
} 