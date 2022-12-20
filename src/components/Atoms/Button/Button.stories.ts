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
    variant: 'primary-light',
  },
};

export const PrimaryDark: Story = {
  args: {
    variant: 'primary-dark',
  },
};

export const SecondaryLight: Story = {
  args: {
    variant: 'secondary-light',
  },
};

export const ButtonTextLight: Story = {
  args: {
    variant: 'button-text-light',
  },
};

export const ButtonTextDark: Story = {
  args: {
    variant: 'button-text-dark',
  },
};
