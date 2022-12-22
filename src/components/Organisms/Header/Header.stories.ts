import { getInitialTheme } from './../../Theme/initialTheme';
import { Meta } from '@storybook/react';
import Header from './Header';

const meta = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['docsPage'],
  argTypes: {
    theme: {
      defaultValue: getInitialTheme(),
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
