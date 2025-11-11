const { defineConfig } = require('eslint-define-config')
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin')
const typescriptParser = require('@typescript-eslint/parser')

module.exports = defineConfig([
  {
    // 将每个配置都放入对象中，替代 `extends`
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
    },
    rules: {
      'no-console': 'warn',
      'react/prop-types': 'off',
    },
  },
  {
    // 可以在这里直接包含继承的规则，而不是通过 `extends`
    // 例如 eslint:recommended
    files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
    extends: ['eslint:recommended', 'plugin:react/recommended'],
  },
])
