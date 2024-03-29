module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
    'plugin:@next/next/recommended',
    'prettier',
    // '@next/eslint-plugin-next"',
    // "plugin:@next/next/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'cypress/no-unnecessary-waiting': 0,
    'no-console': 'error',
    'no-alert': 'error',
    '@typescript-eslint/no-explicit-any': 0,
    'react/display-name': 0,
    'react-hooks/exhaustive-deps': 0,
    'sort-imports': 'off',
    'prettier/prettier': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'react/jsx-no-target-blank': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-useless-return': 'error',
    'no-return-await': 'error',
    'no-else-return': 'error',
    '@typescript-eslint/no-var-requires': 0,
    'no-async-promise-executor': 0,
    'import/no-named-as-default': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/react-in-jsx-scope': 0,
    // 'next/google-font-preconnect': 2,
    // 'next/google-font-display': 2,
    // "next/no-typos": 2
  },
};
