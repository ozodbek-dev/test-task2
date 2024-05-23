import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./src/assets"),
      components: path.resolve(__dirname, "./src/components"),
      pages: path.resolve(__dirname, "./src/pages"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      services: path.resolve(__dirname, "./src/services"),
      config: path.resolve(__dirname, "./src/config.tsx"),
      routes: path.resolve(__dirname, "./src/routes"),
      consts: path.resolve(__dirname, "./src/consts"),
      store: path.resolve(__dirname, "./src/store"),
      container: path.resolve(__dirname, "./src/container"),
      modules: path.resolve(__dirname, "./src/modules"),
      lib: path.resolve(__dirname, "./src/lib"),
      // modules: ${path.resolve(__dirname, './src/modules')},
      // pages: ${path.resolve(__dirname, './src/pages')},
      // routes: ${path.resolve(__dirname, './src/routes')},
      // context: ${path.resolve(__dirname, './src/context')},
      // utils: ${path.resolve(__dirname, './src/utils')},
    },
  },
});
