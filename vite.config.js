import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,     // Expose the server to the local network
    port: 5173,     // Ensure the port is the same you're using for development
    open: true      // Optional: Automatically open the app in your default browser
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
    globals: true,
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000,
  },
});
