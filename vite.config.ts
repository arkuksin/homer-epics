import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub-Pages-Unterpfad: https://arkuksin.github.io/homer-epics/
export default defineConfig({
  base: '/homer-epics/',
  plugins: [react()],
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
