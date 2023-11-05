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
  parserOptions: {
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },
  extends: ['airbnb', 'airbnb/hooks', 'eslint:recommended', 'plugin:import/recommended', 'plugin:prettier/recommended'],
  plugins: ['import', 'prettier'],
  settings: {
    'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] } },
  },
  overrides: [
    {
      files: ['**/*.[jt]sx'],
      settings: {
        react: { version: 'detect' },
      },
      extends: ['plugin:jsx-a11y/recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
      plugins: ['jsx-a11y', 'react', 'react-hooks'],
      rules: {
        'jsx-a11y/alt-text': 'warn',
        'jsx-a11y/anchor-has-content': 'warn',
        'jsx-a11y/anchor-is-valid': 'warn',
        'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
        'jsx-a11y/aria-props': 'warn',
        'jsx-a11y/aria-proptypes': 'warn',
        'jsx-a11y/aria-role': 'warn',
        'jsx-a11y/aria-unsupported-elements': 'warn',
        'jsx-a11y/click-events-have-key-events': 'warn',
        'jsx-a11y/heading-has-content': 'warn',
        'jsx-a11y/iframe-has-title': 'warn',
        'jsx-a11y/img-redundant-alt': 'warn',
        'jsx-a11y/interactive-supports-focus': 'warn',
        'jsx-a11y/media-has-caption': 'warn',
        'jsx-a11y/mouse-events-have-key-events': 'warn',
        'jsx-a11y/no-access-key': 'warn',
        'jsx-a11y/no-distracting-elements': 'warn',
        'jsx-a11y/no-interactive-element-to-noninteractive-role': 'warn',
        'jsx-a11y/no-noninteractive-element-interactions': 'warn',
        'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
        'jsx-a11y/no-noninteractive-tabindex': 'off',
        'jsx-a11y/no-onchange': 'warn',
        'jsx-a11y/no-redundant-roles': 'warn',
        'jsx-a11y/no-static-element-interactions': 'warn',
        'jsx-a11y/role-has-required-aria-props': 'warn',
        'jsx-a11y/role-supports-aria-props': 'warn',
        'jsx-a11y/scope': 'warn',
        'react/display-name': 'off',
        'react/forbid-prop-types': 'off',
        'react/function-component-definition': [
          'error',
          { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
        ],
        'react/jsx-no-bind': ['error', { ignoreRefs: true, allowArrowFunctions: true, ignoreDOMComponents: true }],
        'react/jsx-props-no-spreading': 'off',
        'react/no-array-index-key': 'off',
        'react/no-multi-comp': 'off',
        'react/no-undef': 'off',
        'react/no-unused-prop-types': 'error',
        'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
        'react-hooks/exhaustive-deps': 'warn',
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      settings: {
        jest: { version: 'detect' },
      },
      extends: ['plugin:jest/recommended', 'plugin:jest-dom/recommended', 'plugin:testing-library/react'],
      plugins: ['jest', 'jest-dom', 'testing-library'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'] },
        ],
        'testing-library/no-render-in-lifecycle': ['error', { allowTestingFrameworkSetupHook: 'beforeEach' }],
      },
    },
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/ban-types': ['warn', { extendDefaults: true, types: { '{}': false } }],
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-use-before-define': ['warn', { functions: false, classes: false, variables: false }],
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
      },
    },
  ],
  rules: {
    'import/extensions': 'off',
    'import/order': [
      'error',
      { groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'] },
    ],
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error', 'unix'],
    'max-len': [
      'error',
      { code: 120, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true },
    ],
    'no-await-in-loop': 'warn',
    'no-console': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-param-reassign': ['warn', { props: false }],
    'no-underscore-dangle': 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-use-before-define': 'off',
    'padding-line-between-statements': ['warn', { blankLine: 'always', prev: '*', next: 'return' }],
    'prettier/prettier': ['error', { printWidth: 120, singleQuote: true, trailingComma: 'all' }],
    quotes: ['error', 'single', { avoidEscape: true }],
    radix: 'off',
  },
};
