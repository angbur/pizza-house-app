import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';
import { getInitialTheme } from '../../Theme/initialTheme';

export default {
  component: Button,
  title: 'Atoms/Button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'button-text'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    children: {
      defaultValue: 'Click me',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => Button({ theme: getInitialTheme(), ...args });

export const Base = Template.bind({});
Base.args = {
  variant: 'primary',
};
