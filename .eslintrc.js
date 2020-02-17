module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  extends: ["eslint:recommended"]
};
