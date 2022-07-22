const babelJest = require('babel-jest').default;

/**
 * Custom babel transform just to those files using 'import-meta'
 * like the workers because ts-jest doesn't have full support.
 */
module.exports = babelJest.createTransformer({
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current'}
    }],
    '@babel/preset-typescript',
  ],
  plugins: ['babel-plugin-transform-import-meta'],
});
