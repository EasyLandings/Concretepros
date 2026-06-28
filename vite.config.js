import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// All component files in this project use the .js extension (not .jsx) and
// contain JSX. Vite's default esbuild config only treats .jsx/.tsx files as
// JSX-capable, so the two blocks below tell esbuild to treat every .js file
// under src/ as JSX too - both for dev-server transforms and for the
// dependency pre-bundling step.
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
