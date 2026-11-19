import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Root path locally; repository path only for the production GitHub Pages build.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/ysse-main-portal/' : '/',
}));
