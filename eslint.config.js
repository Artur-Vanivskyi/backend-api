// eslint.config.js
// @ts-check
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-config-prettier';

export default [
  // Ignore build artifacts & deps
  { ignores: ['dist', 'node_modules'] },

  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript rules for .ts/.tsx
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: { '@typescript-eslint': tsPlugin },
    rules: {
      // Use the plugin's recommended rule set
      ...tsPlugin.configs.recommended.rules,
    },
  },

  // Let Prettier handle formatting (turns off conflicting rules)
  prettier,
];
