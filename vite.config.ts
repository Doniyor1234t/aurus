import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://34.46.237.11:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      components: resolve(__dirname, 'src/components'),
      pages: resolve(__dirname, 'src/pages'),
      layouts: resolve(__dirname, 'src/layouts'),
      router: resolve(__dirname, 'src/router'),
      theme: resolve(__dirname, 'src/theme'),
      utils: resolve(__dirname, 'src/utils'),
      hooks: resolve(__dirname, 'src/hooks'),
      assets: resolve(__dirname, 'src/assets'),
      styles: resolve(__dirname, 'src/styles'),
    },
  },
});