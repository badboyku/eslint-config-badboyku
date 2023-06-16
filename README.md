# eslint-config-badboyku
Shared eslint+prettier configuration with react/jest/typescript support.

---

### Setup
1. Install the package: `npm install --save-dev eslint-config-badboyku` or `yarn add --dev eslint-config-badboyku`

2. Create a file named `.eslintrc.js` at the root and add the following:
    ```js
    module.exports = {
      extends: ['badboyku'],
      rules: {},
    };
   ```

3. Add the following to your package.json scripts:
    ```text
    "scripts": {
      "lint": "eslint \"./src/**/*.{js,jsx,ts,tsx}\"",
      "lint:fix": "eslint \"./src/**/*.{js,jsx,ts,tsx}\" --fix",
      "prettier": "prettier --check \"./src/**/*.{css,scss,json}\"",
      "prettier:fix": "prettier --write \"./src/**/*.{css,scss,json}\""
    },
    ```

---

### Configure Rules (optional)

If you would like to configure a rule, then you can add to the `rules` object inside the `.eslintrc.js` file (from setup step 2).

Example:
```text
rules: {
  'no-console': 'error',
},
```

See https://eslint.org/docs/user-guide/configuring/rules
