import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    proxy: {
      "api": {
        target: "http://localhost:3000",
      },
    },
  },
});
