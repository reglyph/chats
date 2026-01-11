import {
  defineConfig,
  devices,
  PlaywrightTestConfig,
} from '@playwright/experimental-ct-react';
import { resolve } from 'node:path';

const reporter: PlaywrightTestConfig['reporter'] = [];

reporter.push(
  ['list'],
  [
    'html',
    {
      open: process.env.CI ? 'never' : 'on-failure',
      outputFolder: resolve(
        '.',
        process.env.IS_DOCKER ? 'report-docker' : 'report',
      ),
    },
  ],
);

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  outputDir: resolve('.', 'test-results'),
  testDir: resolve('.', 'src'),
  testMatch: '**/__tests__/*.visual.test.tsx',

  updateSnapshots: process.env.UPDATE_REQUEST ? 'all' : 'missing',
  snapshotPathTemplate:
    '{testDir}/{testFileDir}/../__snapshots__/{arg}{-projectName}{-platform}{ext}',
  timeout: 10 * 1000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    testIdAttribute: 'data-qa',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    headless: true,
    ctCacheDir: process.env.IS_DOCKER ? '.cache-docker' : '.cache',
    screenshot: 'only-on-failure',
    timezoneId: 'UTC',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:6006',
  //   reuseExistingServer: !process.env.CI,
  // },
});
