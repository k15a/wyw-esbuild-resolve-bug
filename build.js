import { build } from "esbuild";
import wywPlugin from "@wyw-in-js/esbuild";

build({
  entryPoints: ["./source/main.js"],
  outdir: "./build",
  bundle: true,
  loader: {
    ".png": "file",
  },
  plugins: [
    wywPlugin({
      preprocessor: "stylis",
    }),
  ],
});
