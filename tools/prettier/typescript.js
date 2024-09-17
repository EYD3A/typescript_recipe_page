/**
 * @typedef {Object} Override_Config
 * @property {string | string[]} files
 * @property {string | string[]} [excludeFiles]
 * @property {import("prettier").Options} options
 */

/** @type Override_Config */
export default {
  files: "*.ts",
  options: {
    arrowParens: "always",
    bracketSameLine: true,
    bracketSpacing: true,
    endOfLine: "lf",
    experimentalTernaries: false,
    htmlWhitespaceSensitivity: "css",
    insertPragma: false,
    jsxSingleQuote: false,
    parser: "typescript",
    plugins: ["prettier-plugin-organize-imports"],
    printWidth: 80,
    proseWrap: "preserve",
    quoteProps: "consistent",
    semi: true,
    singleAttributePerLine: false,
    singleQuote: false,
    tabWidth: 2,
    trailingComma: "all",
    useTabs: false,
    vueIndentScriptAndStyle: false,
  },
};
