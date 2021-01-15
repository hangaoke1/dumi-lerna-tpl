module.exports = {
  extends: [
    require.resolve('@umijs/fabric/dist/eslint'),
    'plugin:prettier/recommended',
  ],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
  },
};
