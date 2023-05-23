module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    coverageDirectory: '<rootDir>/coverage',
    collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/**/*.test.{js,jsx}'],
    coveragePathIgnorePatterns: ['<rootDir>/src/index.js'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};