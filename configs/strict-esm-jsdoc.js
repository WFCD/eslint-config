'use strict';

module.exports = {
  rules: {
    'valid-jsdoc': ['off'],
  },
  extends: ['@wfcd/eslint-config/esm', 'plugin:jsdoc/recommended-typescript-flavor-error'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      modules: true,
    },
    babelOptions: {
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-private-methods',
        '@babel/plugin-syntax-import-assertions',
      ],
    },
  },
};
