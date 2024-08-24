import("prettier-plugin-tailwindcss").then((prettierPluginTailwindcss) => {
  module.exports = {
    printWidth: 80,
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    trailingComma: "all",
    arrowParens: "always",
    plugins: [prettierPluginTailwindcss],
  };
});
