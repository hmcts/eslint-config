# ESLint Config

Custom rules for eslint.

## Usage

Add to your `package.json`:

    > yarn add eslint @hmcts/eslint-config

Create a `.eslintrc.json` which extends this config:

    {
      "extends": "@hmcts"
      "env": {
        "es6": true,
        "node": true
      },
      "parserOptions": {
        "sourceType": "module"
      }
    }

Create a `.eslintignore` so your node_modules don't get linted:

    node_modules

Run eslint:

    > ./node_modules/.bin/eslint .

To see example code that conforms to this style check [hmcts/look-and-feel].

[hmcts/look-and-feel]:https://github.com/hmcts/look-and-feel
