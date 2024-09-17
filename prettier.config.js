import javascript_overrides from "./tools/prettier/javascript.js";
import json_overrides from "./tools/prettier/json.js";
import typescript_overrides from "./tools/prettier/typescript.js";

/** @type {import("prettier").Config} */
export default {
  overrides: [javascript_overrides, json_overrides, typescript_overrides],
};
