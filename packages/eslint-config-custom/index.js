// prettier: prettier
// eslint-config-prettier: Prettier와 충돌할 수 있는 모든 규칙을 비활성화
// eslint-plugin-prettier: 코드 포매팅 시 Prettier를 사용하게 만드는 규칙을 추가
module.exports = {
  extends: ['next', 'turbo', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'prettier/prettier': 'off',
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
};
