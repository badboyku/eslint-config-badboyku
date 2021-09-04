module.exports = {
  globals: {
    __DEV__: true,
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/react',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'import',
    'jest',
    'jest-dom',
    'jsx-a11y',
    'react',
    'react-hooks',
    'testing-library',
    '@typescript-eslint',
    'prettier',
  ],
  settings: {
    react: { version: 'detect' },
    jest: { version: 'detect' },
    'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] } },
  },
  rules: {
    'import/extensions': [1, 'ignorePackages', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],
    'no-unused-vars': [1, { argsIgnorePattern: '^_' }],
    'linebreak-style': [2, 'unix'],
    quotes: [2, 'single'],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    '@typescript-eslint/ban-types': [1, { extendDefaults: true, types: { '{}': false } }],
    '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_' }],
    'prettier/prettier': [2, { printWidth: 120, semi: true, singleQuote: true }],
  },
};
