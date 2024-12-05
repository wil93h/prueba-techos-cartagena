import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettier from "eslint-plugin-prettier";  

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettier.configs.recommended,
  {
    root: true,
    env: {
      browser: true,
      es2020: true,
    },
    settings: {
      react: {
        version: "18.3.1",
      },
    },
    plugins: [
      "react-refresh",
      "tailwindcss", 
      "prettier"
    ],
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "max-len": ["error", 140],
      "quotes": [2, "double", { "avoidEscape": true }],
      "prettier/prettier": [
        "error",
        {
          "endOfLine": "auto",
        },
      ],
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "warn", 
    },
  },
];