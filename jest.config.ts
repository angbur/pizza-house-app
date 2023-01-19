module.exports = {
    setupFilesAfterEnv: ['src/jest.setup.ts'],
    coverageThreshold: {
        global: {
          branches: 80,
          functions: 70,
          lines: 80,
          statements: -10,
        },
    },
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    automock: true,
};