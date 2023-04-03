module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    quotes: ["error", "double"],
    "react/react-in-jsx-scope": "off",
  },
};
