import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';

const config: Pick<Config, 'content' | 'presets'> = {
  // presets: [sharedConfig],
  ...sharedConfig,
  content: [
    './app/**/*.tsx',
    '../../packages/ui/src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
};

export default config;
