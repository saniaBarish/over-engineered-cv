import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export const baseConfig = {
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
};

export default defineConfig(baseConfig);
