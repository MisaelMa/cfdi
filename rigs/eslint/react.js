module.exports = {
  root: true,
  overrides: [
    {
      plugins: [
        '@typescript-eslint',
        'prettier',
        'sort-destructure-keys',
        'better-styled-components',
        'react',
        'react-hooks',
        'import',
        'jsdoc',
      ],

      extends: [
        'airbnb-base',
        'airbnb-typescript',
        'airbnb',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsdoc/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:import/typescript',
        'prettier',
      ],
      // Declare an override that applies to TypeScript files only
      files: ['*.ts', '*.tsx'],

      parser: '@typescript-eslint/parser',
      parserOptions: {
        // The "project" path is resolved relative to parserOptions.tsconfigRootDir.
        // Your local .eslintrc.js must specify that parserOptions.tsconfigRootDir=__dirname.
        project: ['./tsconfig.json'],

        // Allow parsing of newer ECMAScript constructs used in TypeScript source code.  Although tsconfig.json
        // may allow only a small subset of ES2018 features, this liberal setting ensures that ESLint will correctly
        // parse whatever is encountered.
        ecmaVersion: 'latest',

        sourceType: 'module',
      },

      settings: {
        'import/internal-regex': '^@recreando/',
        'import/resolver': {
          node: {},
          typescript: {},
        },
      },

      rules: {
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-use-before-define': 0,
        'arrow-body-style': 0,
        'better-styled-components/sort-declarations-alphabetically': 2,
        'class-methods-use-this': 'warn',
        'consistent-return': 0,
        'import/extensions': 0,
        'import/prefer-default-export': 0,
        'no-console': 'error',
        'no-param-reassign': [
          'error',
          {
            ignorePropertyModificationsFor: ['acc', 'req', 'draft'],
            props: true,
          },
        ],
        'no-shadow': 0,
        'no-underscore-dangle': 0,
        'no-use-before-define': 0,
        'prettier/prettier': 'error',
        'sort-destructure-keys/sort-destructure-keys': 2,
        // TypeScript already checks this, and does it better: https://github.com/typescript-eslint/typescript-eslint/issues/1624
        'import/no-unresolved': 'off',
        'sort-imports': [
          'error',
          {
            allowSeparatedGroups: true,
            ignoreCase: true,
            ignoreDeclarationSort: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          },
        ],
        'no-restricted-imports': [
          'error',
          {
            patterns: ['**/src/*', '**/index'],
          },
        ],
        'sort-keys': [
          'error',
          'asc',
          { caseSensitive: true, minKeys: 2, natural: false },
        ],
        'sort-vars': ['error', { ignoreCase: true }],
        'import/no-cycle': 'error',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              '**/*.stories.*',
              '**/*.spec.*',
              '**/__tests__/*',
            ],
            optionalDependencies: false,
          },
        ],
        'import/newline-after-import': 'error',
        'jsdoc/require-description': 'error',
        'jsdoc/require-param': 'error',
        'jsdoc/check-param-names': 'error',
        'jsdoc/require-jsdoc': [
          'error',
          {
            contexts: [
              'ArrowFunctionExpression',
              'ClassDeclaration',
              'ClassExpression',
              'FunctionDeclaration',
              'FunctionExpression',
              'MethodDefinition',
            ],
          },
        ],
        'jsdoc/require-param-description': 'error',
        'jsdoc/newline-after-description': 'error',
        'jsdoc/require-returns': 'off',
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-returns-type': 'off',
        'import/order': [
          'error',
          {
            'newlines-between': 'always',
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
            ],
          },
        ],
        'react-hooks/exhaustive-deps': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react/forbid-prop-types': 0,
        'react/jsx-closing-tag-location': 0,
        'react/jsx-curly-newline': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-wrap-multilines': 0,
        'react/no-array-index-key': 1,
        'react/prop-types': 0,
        'react/require-default-props': 0,
        'react/state-in-constructor': 0,
        'react/static-property-placement': 0,
        'class-methods-use-this': ['error', { exceptMethods: ['render'] }],
        'react-hooks/rules-of-hooks': 'error',
        'react/button-has-type': 'error',
        'react/no-multi-comp': 'error',
        'react/no-unused-state': 'error',
        'react/no-unused-prop-types': 'error',
        'react/jsx-fragments': 'error',
        'react/boolean-prop-naming': [
          'error',
          {
            validateNested: true,
          },
        ],
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],
        'max-len': [
          'error',
          {
            code: 140,
            ignoreUrls: true,
            ignoreStrings: true,
          },
        ],
      },
    },
    {
      'extends': [
        'plugin:jest/style',
      ],
      plugins: [
        'jest',
      ],
      files: [
        '*.spec.ts',
        '*spec.tsx',
        '*.page.spec.tsx',
        '*.stories.tsx',
        '*.test.ts',
        '*.test.tsx',
        '**/__mocks__/**',
        '**/__tests__/**',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'jsdoc/require-jsdoc': 'off',
        'react/no-multi-comp': 'off',
        'react/function-component-definition': 'off',
        'react/require-default-props': 'off',
        '@next/next/no-head-element': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/unbound-method': 'off',
        'jest/no-disabled-tests': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/valid-expect': 'error',
        'jest/no-alias-methods': 'error',
        'jest/prefer-lowercase-title': [
          'error',
          {
            'ignore': ['describe'],
          },
        ],
      },
    },
  ],
};
