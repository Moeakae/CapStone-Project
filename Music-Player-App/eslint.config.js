module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  

  },
  plugins: ["react", "jsx-a11y"],
  rules: {
    "react/prop-types": 0, // Disable prop-types rule (optional for TypeScript)
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "jsx-a11y/no-autofocus": 0, // Disable autofocus warning
    

  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
