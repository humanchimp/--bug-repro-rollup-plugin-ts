import ts from "@wessberg/rollup-plugin-ts";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "src/repro.ts",
  output: {
    format: "cjs",
    file: "repro.js",
    sourcemap: true,
  },
  plugins: [ts(), resolve()],
};
