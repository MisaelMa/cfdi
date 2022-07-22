module.exports = {
  verbose: true,
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  globals: {
    'ts-jest': {
      tsconfig: '../../rigs/jest/tsconfig.test.json',
    },
  },
  transform: {
    '\\.(gql|graphql)$': 'jest-transform-graphql',
    '\\.*Worker.ts$':
      './node_modules/@recreando/jest/jestBabelTransform',
    // Enables rush compile for unit tests but without type check
    // we're now fixing that by type checking with the lint script
    '^.+\\.(ts|tsx)$': [
      '@swc/jest',
      {
        sourceMaps: true,
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            decorators: false,
            dynamicImport: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  setupFilesAfterEnv: ['./node_modules/@recreando/jest/setupTests.ts'],
  setupFiles: ['./node_modules/@recreando/jest/jest.env.js'],
  modulePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/dist/'],
  coveragePathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/dist/',
    'node_modules',
    '<rootDir>/node_modules',
    '__tests__',
    '__mocks__',
    '__generated__',
    'constants.ts',
    'constants',
    'types.ts',
    'buildWatch.ts',
    'generated/graphqlTypes.ts',
    'graphql/src/index.ts',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.stories.tsx',
    '!src/**/*.stories.styles.ts*',
    '!src/**/graphql/schema/*.ts',
    '!src/**/graphql/*Query.ts',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  moduleNameMapper: {
    '\\.(ico|eot|otf|webp|svg|ttf|woff|woff2|mp4)$':
      '<rootDir>/__mocks__/fileMock.ts',
    '\\.(jpg|jpeg|png|gif|css|less|scss)$': 'identity-obj-proxy',
    '^@recreando/([^/]+)/(.*)$':
      '<rootDir>/node_modules/@recreando/$1/src/$2',
      '^@cfdi/([^/]+)/(.*)$':
      '<rootDir>/node_modules/@cfdi/$1/src/$2',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(@react-native|react-native)).*/',
  ],
};
