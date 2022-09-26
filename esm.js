'use strict';

module.exports = {
  rules: {
    'import/extensions': 0,
  },
  extends: ['@wfcd'],
  parser: '@babel/eslint-parser',
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
