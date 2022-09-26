'use strict';

module.exports = {
  extends: [
    '@wfcd/eslint-config/esm',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    'impot/no-unresolved': 'off',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      modules: true,
    },
    babelOptions: {
      plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-private-methods'],
    },
  },
};
