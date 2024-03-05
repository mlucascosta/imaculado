module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'jest'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      'plugin:jest/style',
    ],
    rules: {
      // Aqui você pode adicionar ou modificar regras do ESLint conforme necessário
    },
  };
  