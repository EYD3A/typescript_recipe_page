// @ts-nocheck
import javascript_config from "./utilities/eslint/javascript.js";
import typescript_config from "./utilities/eslint/typescript.js";
/** @type {import("eslint").Linter.Config[]} */
export default [
    {
        ignores: ["dist", "node_modules"],
    },
    javascript_config,
    typescript_config,
];
//# sourceMappingURL=eslint.config.js.map