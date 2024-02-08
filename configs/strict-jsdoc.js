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
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-private-methods',
        '@babel/plugin-syntax-import-assertions',
      ],
    },
  },
};
