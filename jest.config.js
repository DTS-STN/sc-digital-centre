module.exports = {
  modulePathIgnorePatterns: ['./cypress'],
  collectCoverageFrom: [
    'lib/**/*.{js,jsx,tsx}',
    'components/**/*.{js,jsx}',
    'pages/**/*.{js,jsx,tsx}',
    '!**/node_modules/**',
    '!<rootDir>/__tests__/setup.js',
  ],
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
      https://jestjs.io/docs/webpack#mocking-css-modules */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    /* Handle image imports
      https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|svg|graphql)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  coverageReporters: [
    'clover',
    'json',
    'json-summary',
    'lcov',
    ['text', { skipFull: true }],
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: '<rootDir>/test/custom-test-env.js',
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
      https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  clearMocks: true,
  setupFiles: ['<rootDir>/jest.setup.js'],
}
