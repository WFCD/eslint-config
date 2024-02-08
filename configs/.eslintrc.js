'use strict';

module.exports = {
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
    'func-names': 0,
    'arrow-parens': ['error', 'always'],
    'global-require': 0,
    'no-await-in-loop': 'off',
    'no-param-reassign': 'off',
    'no-continue': 'off',
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__basedir', '__dirname'],
      },
    ],
    'no-fallthrough': 'off',
    'no-case-declarations': 'off',
    'lines-between-class-members': 'off',
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
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.{js,cjs,mjs}', '**/*.spec.{js,cjs,mjs}', 'build/**/*.{js,cjs,mjs}'] },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'no-null/no-null': 2,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
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
    sourceType: 'script',
    ecmaVersion: 6,
    babelOptions: {
      plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-private-methods'],
    },
  },
};
