import typescript from "@rollup/plugin-typescript";
import react from "react";
import reactDom from "react-dom";
import commonjs from "rollup-plugin-commonjs";
import css from "rollup-plugin-import-css";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import pkg from "./package.json" assert { type: "json" };
import alias from "@rollup/plugin-alias";
import path from "path";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    resolve(),
    postcss(),
    css(),
    typescript(),
    commonjs({
      include: ["node_modules/**"],
      namedExports: {
        "node_modules/react/react.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement",
        ],
        "node_modules/react-dom/index.js": ["render"],
        react: Object.keys(react),
        "react-dom": Object.keys(reactDom),
      },
    }),
    alias({
      resolve: [".css", ".scss"],
      entries: [
        { find: /^@\/(.*)$/, replacement: `${path.resolve("src")}/$1` },
      ],
    }),
  ],
  external: ["react", "react-dom"],
};
