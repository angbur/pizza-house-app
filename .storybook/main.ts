import type { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
  stories: [ '../src/components/**/*.stories.@(mdx|ts|tsx)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    }
  },
  core: {
    builder: "@storybook/builder-webpack5"
  },
  features: {
    postcss: false,
  }
};
module.exports = config;