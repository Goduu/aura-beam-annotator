import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/index.ts", // Your main file
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      // Make sure .ts and .tsx files are treated as modules
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    commonjs(),
    typescript({
      // Ensure TypeScript compiles .tsx files
      tsconfig: "./tsconfig.json", // Pointing to your tsconfig file
    }),
    postcss({
      plugins: [require("tailwindcss"), require("autoprefixer")],
      inject: false, // Inject styles directly into the head
      extract: true, // Extract styles to a file
    }),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    terser(), // Minify the bundle
  ],
};
