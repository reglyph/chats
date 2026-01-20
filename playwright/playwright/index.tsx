import { beforeMount } from '@playwright/experimental-ct-react/hooks';

import './index.scss';

beforeMount(async ({ App }) => {
  return <App />;
});
