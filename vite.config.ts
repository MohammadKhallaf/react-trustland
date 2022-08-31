import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import macrosPlugin from "vite-plugin-babel-macros";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), macrosPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@img": path.resolve(__dirname, "src/assets/images"),
      "@icon": path.resolve(__dirname, "src/assets/images/icons"),
    },
  },
});
