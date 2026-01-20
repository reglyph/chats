import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  docs: {
    defaultName: 'Docs',
  },
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  typescript: {
    check: false, // `false` is default value, but `checked` field is required in types.
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
