/*
 * @Author: zlc
 * @Date: 2024-11-22 19:05:24
 * @LastEditTime: 2024-12-20 15:24:51
 * @LastEditors: zlc
 * @Description:
 * @FilePath: \react-template-admin\vite.config.ts
 */
import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { createVitePlugins } from "./build/vite/plugin";
export default defineConfig({
  resolve: {
    alias: {
      "@pages": resolve(__dirname, "src", "pages"),
      "@components": resolve(__dirname, "src", "components"),
      "@stores": resolve(__dirname, "src", "stores"),
      "@services": resolve(__dirname, "src", "services"),
      "@utils": resolve(__dirname, "src", "utils"),
      "@assets": resolve(__dirname, "src", "assets"),
    },
  },
  //plugins: [react()],
  plugins: createVitePlugins(),
});
