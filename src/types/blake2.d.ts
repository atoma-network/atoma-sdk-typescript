declare module 'blake2' {
    interface HashOptions {
        digestLength?: number;
    }

    interface Hash {
        update(data: Buffer | Uint8Array): void;
        digest(): Buffer;
    }

    export function createHash(algorithm: string, options?: HashOptions): Hash;
} 