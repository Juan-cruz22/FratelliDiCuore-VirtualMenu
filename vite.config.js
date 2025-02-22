import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/FratelliDiCuore-VirtualMenu/',  // Esta línea está configurada correctamente
});