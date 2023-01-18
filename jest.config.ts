module.exports = {
    setupFilesAfterEnv: ['src/jest.setup.ts'],
    collectCoverageFrom: [
        '**/__tests__/*.{ts,jsx}',
        '!**/node_modules/**',
    ],
    coverageThreshold: {
        global: {
          branches: 80,
          functions: 70,
          lines: 80,
          statements: -10,
        },
    },
};