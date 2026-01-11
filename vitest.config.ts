import { playwright } from '@vitest/browser-playwright';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    browser: {
      provider: playwright(),
      instances: [
        { browser: 'chromium' },
        { browser: 'firefox' },
        { browser: 'webkit' },
      ],
    },
    include: ['**/__tests__/*.test.tsx'],
    exclude: ['**/__tests__/*.visual.test.tsx'],
    setupFiles: './vitest.setup.ts',
    environment: 'jsdom',
  },
});
