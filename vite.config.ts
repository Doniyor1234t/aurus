import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: "/aurus/",
  plugins: [react()],
  resolve: {
    alias: {
      // '@': '/src',
      components: '/src/components',
      pages: '/src/pages',
      layouts: '/src/layouts',
      router: '/src/router',
      theme: '/src/theme',
      utils: '/src/utils',
      hooks: '/src/hooks',
      assets: path.resolve(__dirname, 'src/assets') ,
      styles: '/src/styles',
    },
  },
});