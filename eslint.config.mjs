import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";

import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";

import importPlugin from "eslint-plugin-import";
import jestPlugin from "eslint-plugin-jest";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

import globals from "globals";
import url from "node:url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

import tseslint from "typescript-eslint";

export default tseslint.config(
  // register all of the plugins up-front
  {
    plugins: {
      ["import"]: importPlugin,
      ["react"]: reactPlugin,
      ["react-hooks"]: fixupPluginRules(reactHooksPlugin),
      // @ts-expect-error -- https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/pull/1038
      ["jsx-a11y"]: jsxA11yPlugin.flatConfigs.recommended.plugins["jsx-a11y"],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    // config with just ignores is the replacement for `.eslintignore`
    ignores: [
      ".next/",
      "tailwind.config.js",
      "postcss.config.js",
      "eslint.config.mjs",
      "next.config.js",
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      ".vscode",
    ],
  },
  // extends...
  prettierConfig,
  eslint.configs.recommended,
  tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  fixupConfigRules(compat.config(reactHooksPlugin.configs.recommended)),
  jsxA11yPlugin.flatConfigs.recommended,
  // base config
  {
    languageOptions: {
      globals: {
        ...globals.es2020,
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    linterOptions: { reportUnusedDisableDirectives: "error" },
    rules: {
      // react
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      // ["error", { "ignore": ["args"] }
      "react/no-unknown-property": "off",
      //
      // eslint-plugin-import
      //
      // enforces consistent type specifier style for named imports
      "import/consistent-type-specifier-style": "error",
      // disallow non-import statements appearing before import statements
      "import/first": "error",
      // Require a newline after the last import/require in a group
      "import/newline-after-import": "error",
      // Forbid import of modules using absolute paths
      "import/no-absolute-path": "error",
      // disallow AMD require/define
      "import/no-amd": "error",
      // forbid default exports - we want to standardize on named exports so that imported names are consistent
      "import/no-default-export": "error",
      // disallow imports from duplicate paths
      "import/no-duplicates": "error",
      // disallow unused exports
      // "import/no-unused-modules": ["error", { unusedExports: true }],
      // Forbid the use of extraneous packages
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: true,
          optionalDependencies: false,
          peerDependencies: true,
        },
      ],
      // Forbid mutable exports
      "import/no-mutable-exports": "error",
      // Prevent importing the default as if it were named
      "import/no-named-default": "error",
      // Prohibit named exports
      "import/no-named-export": "off", // we want everything to be a named export
      // Forbid a module from importing itself
      "import/no-self-import": "error",
      // Require modules with a single export to use a default export
      "import/prefer-default-export": "off", // we want everything to be named
    },
  },
  {
    files: [
      "eslint.config.{js,cjs,mjs}",
      "**/page.tsx",
      "**/layout.tsx",
      "**/*.{js,cjs,mjs,config.ts}",
    ],
    rules: {
      // requirement
      "import/no-default-export": "off",
    },
  },
  {
    // disable type-aware linting on JS files
    files: ["**/*.js"],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    // enable jest rules on test files
    files: ["test/**"],
    extends: [jestPlugin.configs["flat/recommended"]],
  },
);
