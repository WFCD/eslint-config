'use strict';

module.exports = {
  rules: {
    'valid-jsdoc': ['off'],
  },
  extends: ['@wfcd', 'plugin:jsdoc/recommended-typescript-flavor-error'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    babelOptions: {
      plugins: [
        '@babel/plugin-transform-class-properties',
        '@babel/plugin-transform-private-methods',
        '@babel/plugin-syntax-import-assertions',
      ],
    },
  },
};
