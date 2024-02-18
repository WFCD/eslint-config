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
        '@babel/plugin-transform-class-properties',
        '@babel/plugin-transform-private-methods',
        '@babel/plugin-syntax-import-assertions',
      ],
    },
  },
};
