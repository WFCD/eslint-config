'use strict';

module.exports = {
  rules: {
    'import/extensions': ['error', 'ignorePackages'],
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
      plugins: [
        '@babel/plugin-transform-class-properties',
        '@babel/plugin-transform-private-methods',
        '@babel/plugin-syntax-import-assertions',
      ],
    },
  },
};
