module.exports = {
  root: false,
  env: {
    node: false
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': ['error', 'always'],
    // 去掉括号前空格
    'space-before-function-paren': 0,
    'indent': 0,
    "no-tabs": "off",
    quotes: [0, 'single'],
    'quote-props': [0, 'always'],
    'prefer-const': 0
  }
}