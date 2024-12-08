import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import cspellPlugin from '@cspell/eslint-plugin';

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            eslintPluginPrettierRecommended,
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            '@cspell': cspellPlugin
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            '@cspell/spellchecker': 'error',
            'prettier/prettier': 'error',
            'no-param-reassign': 'error',
            'max-statements-per-line': ['error', { max: 1 }],
            'no-multiple-empty-lines': ['error', { max: 2 }],
            'max-lines-per-function': ['error', { max: 32 }],
            'max-depth': ['error', 4],
            'max-params': ['error', 3],
            'max-lines': ['error', 90],
        },
    }
);
