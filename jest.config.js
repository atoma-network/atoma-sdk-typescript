/** @type {import('jest').Config} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': ['babel-jest', {
      presets: [
        '@babel/preset-env',
        '@babel/preset-typescript'
      ],
    }],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(tweetnacl|@stablelib)/)',
  ],
  setupFiles: ['<rootDir>/tests/setup.js'],
  testTimeout: 10000,
}; 