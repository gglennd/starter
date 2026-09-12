import antfu from "@antfu/eslint-config";
import js from "@eslint/js";
import pluginRouter from "@tanstack/eslint-plugin-router";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

import tseslint from "typescript-eslint";

export default antfu({
  type: "app",
  formatters: true,
  typescript: true,
  react: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
  extends: [
    js.configs.recommended,
    tseslint.configs.recommended,
    reactHooks.configs.flat.recommended,
    reactRefresh.configs.vite,
    pluginRouter.configs.recommended,
  ],
  ignores: [
    "**/*.gen.ts",
  ],
}, {
  files: ["**/*.{ts,tsx}"],
  languageOptions: {
    globals: globals.browser,
  },
  rules: {
    "perfectionist/sort-imports": ["error", {
      tsconfig: {
        rootDir: ".",
      },
    }],
    "unicorn/filename-case": ["error", {
      case: "kebabCase",
      ignore: ["README.md"],
    }],
    "unicorn/prefer-type-error": ["off"],
    "ts/consistent-type-definitions": ["off"],
    "react-refresh/only-export-components": ["off"],
    "react/no-context-provider": ["off"],
    "react/no-use-context": ["off"],
  },
});
