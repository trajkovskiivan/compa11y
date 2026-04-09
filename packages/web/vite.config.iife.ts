import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'compa11y',
      formats: ['iife'],
      fileName: () => 'compa11y.iife.js',
    },
    rollupOptions: {
      external: ['@compa11y/core'],
      output: {
        globals: {
          '@compa11y/core': 'compa11yCore',
        },
      },
    },
    outDir: 'dist',
    emptyOutDir: false,
    sourcemap: false,
    minify: 'esbuild',
  },
});
