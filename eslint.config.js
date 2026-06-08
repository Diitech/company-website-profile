import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import path from 'path';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    parserOptions: {
      project: path.resolve(__dirname, './tsconfig.json'), // Explicit TSConfig
      tsconfigRootDir: __dirname, // Fixes multiple root issue
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
]);