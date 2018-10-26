module.exports = {
    root: true,
    plugins: ["prettier"],
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:vue/recommended"
    ],
    rules: {
        "prettier/prettier": ["error"]
    }
};
