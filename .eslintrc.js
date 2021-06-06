module.exports = {
  env: {
    browser: true,
    es6: true,
    jquery: true,
    jest: true,
  },
  extends: ["airbnb", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true,
    Headers: true,
    Request: true,
    fetch: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "jsx-a11y", "import"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "react/prop-types": 0,
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-unescaped-entities": "off",
    "react/prefer-stateless-function": "off",
    "react/react-in-jsx-scope": "off",
    "no-underscore-dangle": 0,
    "import/prefer-default-export": "off",
    "import/newline-after-import": "error",
    semi: "error",
    "no-use-before-define": "off",
    "no-var": 0,
    "import/no-unresolved": 0,
    "import/no-webpack-loader-syntax": 0,
    "consistent-return": 0,
    "no-param-reassign": 0,
    "sort-imports": "warn",
    "no-bitwise": "off",
    "no-return-assign": 0,
    "no-restricted-syntax": "off",
    "no-multi-assign": 0,
    "array-callback-return": "off",
    "prefer-rest-params": "off",
    "no-shadow": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "no-plusplus": 0,
  },
};