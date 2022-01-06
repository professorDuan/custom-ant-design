module.exports = {
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  extends: "byted/strict",
  settings: {
      react: {
          version: "detect"
      }
  },
  rules: {
    indent: "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    camelcase: "off",
    "no-param-reassign": "off",
    "no-console":["error", {"allow":["error","info"]}],
    "func-names": ["error"],
    "consistent-return": "off",
    "import/named": "off",
    "no-loop-func": "off",
    "react/no-array-index-key": "off",
    "guard-for-in":"off",
    "@typescript-eslint/explicit-module-boundary-types":"off",
    "prettier/prettier": "off",
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }]
  }
};
