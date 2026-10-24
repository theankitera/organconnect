import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname), "");
  const apiURL = env.VITE_API_URL || env.REACT_APP_API_URL || "";

  return {
    plugins: [react()],
    envPrefix: ["VITE_", "REACT_APP_"],
    esbuild: {
      loader: "jsx",
      include: /src\/.*\.jsx?$/,
      exclude: [],
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: { ".js": "jsx" },
      },
    },
    define: {
      "process.env.REACT_APP_API_URL": JSON.stringify(apiURL),
    },
    server: {
      port: 3000,
      proxy: apiURL
        ? {
            "/api": { target: apiURL, changeOrigin: true },
            "/uploads": { target: apiURL, changeOrigin: true },
          }
        : undefined,
    },
    build: {
      outDir: "dist",
      chunkSizeWarningLimit: 1600,
    },
  };
});
