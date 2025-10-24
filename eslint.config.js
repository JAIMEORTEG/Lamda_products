// eslint.config.js
const js = require("@eslint/js");
const tseslint = require("typescript-eslint");
const simpleImportSort = require("eslint-plugin-simple-import-sort");
const unusedImports = require("eslint-plugin-unused-imports");
const prettierPlugin = require("eslint-plugin-prettier");

module.exports = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
      "prettier": prettierPlugin,
    },
    rules: {
      // Prettier rules - let Prettier handle formatting
      "prettier/prettier": "error",
      
      // Import sorting
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      
      // Unused imports
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": "error",
      "@typescript-eslint/no-unused-vars": "off", // Disable base rule as it can report incorrect errors
      
      // Disable conflicting rules that Prettier handles
      "indent": "off",
      "quotes": "off",
      "semi": "off",
      "no-trailing-spaces": "off",
      "eol-last": "off",
      "comma-dangle": "off",
      "object-curly-spacing": "off",
      "array-bracket-spacing": "off",
      "space-before-function-paren": "off",
      "keyword-spacing": "off",
      "space-infix-ops": "off",
      "no-multiple-empty-lines": "off",
      "max-len": "off",
    },
  },
  {
    ignores: ["dist/**/*.js", "build/**/*.js", "node_modules/**/*.js"],
  }
);
