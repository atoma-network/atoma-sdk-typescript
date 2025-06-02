export default {
  build: {
    outDir: "dist",
    format: ["esm", "commonjs"],
    sourcemap: true,
    declaration: true,
  },
  sourceDialects: ["atoma-sdk/source"],
  exports: {
    ".": "./src/index.ts",
    "./package.json": "./package.json",
    "./types": "./src/types/index.ts",
    "./models/errors": "./src/models/errors/index.ts",
    "./models/components": "./src/models/components/index.ts",
    "./models/operations": "./src/models/operations/index.ts",
    "./*.js": "./src/*.ts",
    "./*": "./src/*.ts"
  }
}