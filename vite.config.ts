import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import circleDependency from 'vite-plugin-circular-dependency';
import unusedCode from 'vite-plugin-unused-code';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@entities': path.resolve(__dirname, './src/entities'),
    },
  },
  plugins: [
    react(),
    circleDependency(),
    unusedCode({
      patterns: ['src/**/*.*'],
      exclude: ['src/**/*.d.ts'],
      failOnHint: true,
    }),
  ],
});
