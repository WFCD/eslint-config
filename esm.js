'use strict';

module.exports = {
  globals: {},
  rules: {
    'valid-jsdoc': [
      'error',
      {
        requireReturn: false,
        requireReturnDescription: false,
        preferType: {
          String: 'string',
          Number: 'number',
          Boolean: 'boolean',
          Function: 'function',
          object: 'Object',
          date: 'Date',
          error: 'Error',
        },
        prefer: {
          return: 'returns',
        },
      },
    ],
    strict: ['error', 'safe'],
    'linebreak-style': ['error', 'unix'],
    'no-await-in-loop': 'off',
    'func-names': 0,
    'global-require': 0,
    'no-param-reassign': 'off',
    'no-continue': 'off',
    'lines-between-class-members': 'off',
    'no-fallthrough': 'off',
    'no-case-declarations': 'off',
    'default-case': 'off',
    'max-classes-per-file': 'off',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        comments: 120,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'import/no-unresolved': 0,
    'no-null/no-null': 2,
    'import/extensions': 0,
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['no-null'],
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
