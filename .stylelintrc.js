/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    'stylelint-config-standard', // 新版标准规则
    'stylelint-config-prettier', // 关闭与 Prettier 冲突规则
  ],
  rules: {
    // ✅ 仅使用 v16 支持的现代规则
    'color-function-notation': 'modern',
    'alpha-value-notation': 'number',
    'hue-degree-notation': 'number',
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],
    'no-empty-source': null,
  },
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
}
