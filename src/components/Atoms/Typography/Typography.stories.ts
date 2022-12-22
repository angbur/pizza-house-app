import { Meta, StoryObj } from '@storybook/react';
import { themeProperties } from 'components/Theme/theme.types';
import Typography from './Typography';

const meta = {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['docsPage'],
  argTypes: {
    variant: themeProperties.typographyNames,
    color: themeProperties.colorNames,
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MainTitle: Story = {
  args: {
    variant: 'main-title',
    color: 'primary',
    children: 'Hello in my world',
  },
};
