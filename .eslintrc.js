module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: [
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off", // Desabilita a regra que obriga implementar o this em todos metodos da nossa api.
    "no-param-reassign": "off", // Permite que receba um parametro e efetue mudanças nesse parametro - utilizado no sequelize utiliza para manipular alguns caso.
    "camelcase": "off", // formato = testoTeste
    "no-unused-vars": ["error", { "arsIgnorePattern": "next"}], // só vai dar erro se for o argumento next - variavel do middleware.

  },
};
