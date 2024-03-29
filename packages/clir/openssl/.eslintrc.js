// This is a workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-config/patch/modern-module-resolution");

module.exports = {
  extends: [
    "./node_modules/@recreando/eslint-settings/react",
  ],
  parserOptions: { tsconfigRootDir: __dirname, },
  rules: {
    "@typescript-eslint/explicit-module-boundary-types":"off"
  },
};
