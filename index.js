module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
                avoidEscape: true
            }
        ],
        'react/prop-types': 'off',
        'semi': ['error', 'always']
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
