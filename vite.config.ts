/// <reference types="vitest" />

import { defineConfig, loadEnv } from "vite";
import ViteReact from "@vitejs/plugin-react-refresh";
import ViteReactJSX from "vite-react-jsx";
import AutoImport from "unplugin-auto-import/vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

import { resolve } from "path";

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, resolve(__dirname)) };

  // https://vitejs.dev/config/
  return defineConfig({
    plugins: [
      ViteReact(),
      ViteReactJSX(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        ],
        dts: "types/generated/auto-imports.d.ts",
        imports: ["react", "vitest"],
      }),
      createSvgIconsPlugin({
        iconDirs: [resolve(__dirname, "src/assets/svg")],
        symbolId: "icon-[dir]-[name]",
      }),
    ],
    server: {
      port: parseInt(process.env.VITE_PORT) || 3000,
      cors: true,
      strictPort: false,
      hmr: true,
      fs: {
        strict: false,
      },
      proxy: {
        "/api": {
          target: process.env.VITE_API_URL,
          changeOrigin: true,
          autoRewrite: true,
          rewrite: (path: string) => path.replace("/api", ""),
        },
      },
      watch: {
        usePolling: true,
        useFsEvents: true,
      },
    },
    resolve: {
      alias: {
        "#": resolve(__dirname, "public"),
        "@": resolve(__dirname, "src"),
        "%": resolve(__dirname, "tests"),
        "@types": resolve(__dirname, "types"),
      },
    },
    test: {
      environment: "happy-dom",
      globals: true,
      setupFiles: ["tests/vitest.setup.ts"],
    },
    define: { "process.env": process.env },
  });
};
