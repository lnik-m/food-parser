module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@next/next/recommended',
    'next/core-web-vitals',
    'prettier'
  ],
  rules: {
    'prefer-const': 2
  },
  env: {
    es6: true
  }
}
