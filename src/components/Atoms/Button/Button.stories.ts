import { getInitialTheme } from './../../Theme/initialTheme';
import { Meta, StoryObj } from '@storybook/react';
import Button, { buttonSizes, buttonVariants } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['docsPage'],
  argTypes: {
    variant: buttonVariants,
    size: {
      options: buttonSizes,
      control: { type: 'radio' },
    },
    children: {
      defaultValue: 'Press me',
    },
    theme: {
      defaultValue: getInitialTheme()
    }
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
  args: {
    variant: 'primaryLight',
  },
};

export const PrimaryDark: Story = {
  args: {
    variant: 'primaryDark',
  },
};

export const SecondaryLight: Story = {
  args: {
    variant: 'secondaryLight',
  },
};

export const ButtonTextLight: Story = {
  args: {
    variant: 'buttonTextLight',
  },
};

export const ButtonTextDark: Story = {
  args: {
    variant: 'buttonTextDark',
  },
};
