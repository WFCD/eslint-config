# @wfcd/eslint-config

Sharable eslint config for Warframe Community Dev projects...
and anyone who wants to follow the same style/configs.

## Setup

Extend the plugin in your local eslint config
```json
// eslintConfig:
{
  "extends": "@wfcd"
}
```

In order to use newer features, such as static class properties & private methods,
you must still include babel config in your eslint config
```json
// eslintConfig:
{
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "babelOptions": {
      "plugins": [
        "@babel/plugin-transform-class-properties",
        "@babel/plugin-transform-private-methods"
      ]
    }
  }
}
```

as well as the accompanying babel config
```json
// babel:
{
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": [
    "@babel/plugin-transform-class-properties",
    "@babel/plugin-transform-private-methods"
  ]
}
```

## Additional rules

Your configuration can still include additional rules configurations in the standard 
