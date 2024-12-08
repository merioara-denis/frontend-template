import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import circleDependency from 'vite-plugin-circular-dependency';
import unusedCode from 'vite-plugin-unused-code';

// https://vite.dev/config/
export default defineConfig({
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
