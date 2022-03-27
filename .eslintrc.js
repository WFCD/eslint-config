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
    strict: [
      'error',
      'safe',
    ],
    'linebreak-style': ['error', 'unix'],
    'no-await-in-loop': 'off',
    'func-names': 0,
    'arrow-parens': [
      2,
      'as-needed',
      {
        requireForBlockBody: true,
      },
    ],
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
    'max-len': ['error', {
      code: 120,
      tabWidth: 2,
      comments: 120,
      ignoreTemplateLiterals: true,
      ignoreStrings: true,
    }],
    'import/no-unresolved': 0,
    'no-null/no-null': 2,
  },
  extends: [
    'prettier',
    'airbnb-base',
  ],
  plugins: ['no-null'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'script',
    ecmaVersion: 6,
    babelOptions: {
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-private-methods',
      ],
    },
  },
};
