// This is a workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-config/patch/modern-module-resolution");

module.exports = {
  extends: [
    // "@rushstack/eslint-config/mixins/friendly-locals",
    "./node_modules/@recreando/eslint-settings/react"
  ],
  parserOptions: { tsconfigRootDir: __dirname },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'class-methods-use-this': 'off',
    'sort-keys': 'off',
    'sort-imports':'off'
  },
};
