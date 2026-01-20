## Playwright Workflow

### Writing tests:

1. Inside the component folder, create a `__tests__` folder and add a file named `[Component].visual.test.tsx`.
2. Write your test inside the file. Example:

   ```jsx
   import { expect, test } from '@playwright/experimental-ct-react';
   import { Component } from '../Component';

   test.describe('Component', () => {
     test('description', async ({ mount }) => {
       const component = await mount(<Component {...props} />);

       await expect(component).toHaveScreenshot();
     });

     // ...more tests
   });
   ```

3. After that you need to generate snapshots for tests.

   Run tests inside Docker to generate snapshots from an isolated, neutral environment.

   ```shell
   npm run playwright:docker:update
   ```

   You can also run tests and update snapshots locally, but before commiting **you must run tests inside Docker**.

   ```shell
   npm run playwright:update
   ```

   **Run it only when adding new tests or updating expected screenshots.**

4. Run tests

   Run tests in Docker

   ```shell
   npm run playwright:docker
   ```

   Or in your local environment (after installing browsers)

   ```shell
   npm run playwright:install
   npm run playwright
   ```

   After the tests finish, you can find HTML report at `/playwright/report` or `/playwright/report-docker`. Use the report to investigate problems.

5. After updating, snapshots will be located in each component folder -> `__snapshots__`

## Important

### Do not submit snapshots created outside the Docker environment.

## NPM Scripts

- `npm run playwright:install` - install Playwright browsers
- `npm run playwright` - run tests locally
- `npm run playwright:update` - run tests locally and update snapshots
- `npm run playwright:docker` - run tests in the Docker environment
- `npm run playwright:docker:update` - run tests in the Docker environment and update snapshots
