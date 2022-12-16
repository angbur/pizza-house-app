import { Meta, Story } from '@storybook/react';
import { getInitialTheme } from '../../Theme/initialTheme';
import Button, { ButtonProps, buttonSizes, buttonVariants } from './Button';

export default {
  component: Button,
  title: 'Atoms/Button',
  argTypes: {
    variant: buttonVariants,
    size: {
      options: buttonSizes,
      control: { type: 'radio' },
    },
    children: {
      defaultValue: 'Press me',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => Button({ theme: getInitialTheme(), ...args });

export const Base = Template.bind({});
Base.args = {
  variant: 'primary-light',
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  variant: 'primary-light',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  variant: 'primary-dark',
};

export const SecondaryLight = Template.bind({});
SecondaryLight.args = {
  variant: 'secondary-light',
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  variant: 'secondary-dark',
};

export const ButtonTextLight = Template.bind({});
ButtonTextLight.args = {
  variant: 'button-text-light',
};

export const ButtonTextDark = Template.bind({});
ButtonTextDark.args = {
  variant: 'button-text-dark',
};
