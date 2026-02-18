import { createRequire } from 'node:module';
import { mergeConfig } from 'vitest/config';
import baseConfig from '@repo/testing-config';

const require = createRequire(import.meta.url);

export default mergeConfig(baseConfig, {
  test: {
    setupFiles: [require.resolve('@repo/testing-config/vitest.setup')],
  },
});
