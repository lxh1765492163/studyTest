module.exports = {
  env: {
    es6: true,
    amd: true,
    browser: true,
    node: true
  },
  parserOptions: {
    sourceType: "module"
},
  parser: "babel-eslint" ,
  extends: [
    "prettier",
    "eslint:recommended",
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-console':'off'
  },
  plugins: ['prettier'],
};
