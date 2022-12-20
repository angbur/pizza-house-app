import clsx from 'clsx';
import { CSSProperties, MouseEventHandler, PropsWithChildren, ReactNode } from 'react';
import { Theme } from '../../Theme/theme.types';
import Typography from '../Typography/Typography';
import {
  IconButton,
  PrimaryDarkButton,
  PrimaryLightButton,
  SecondaryDarkButton,
  SecondaryLightButton,
  TextDarkButton,
  TextLightButton,
} from './Button.styles';
import setButtonSize from './setButtonSize';

export const buttonVariants = [
  'primary-light',
  'primary-dark',
  'secondary-light',
  'secondary-dark',
  'button-text-light',
  'button-text-dark',
  'icon-button',
] as const;

type ButtonVariant = typeof buttonVariants[number];
export const buttonSizes = ['sm', 'md', 'lg'] as const;
type ButtonSize = typeof buttonSizes[number];

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  theme?: Theme;
  style?: CSSProperties;
  children?: typeof Typography | ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  variant = 'primary-light',
  size = 'lg',
  className,
  style,
  theme,
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  const props = {
    className: clsx(variant, `btn-${size}`, className, 'button'),
    onClick: onClick,
    style: setButtonSize({ size, style }),
    theme: theme,
  };

  return (
    <>
      {variant === 'primary-light' ? (
        <PrimaryLightButton {...props}>{children}</PrimaryLightButton>
      ) : variant === 'primary-dark' ? (
        <PrimaryDarkButton {...props}>{children}</PrimaryDarkButton>
      ) : variant === 'secondary-light' ? (
        <SecondaryLightButton {...props}>{children}</SecondaryLightButton>
      ) : variant === 'secondary-dark' ? (
        <SecondaryDarkButton {...props}>{children}</SecondaryDarkButton>
      ) : variant === 'button-text-light' ? (
        <TextLightButton {...props}>{children}</TextLightButton>
      ) : variant === 'button-text-dark' ? (
        <TextDarkButton {...props}>{children}</TextDarkButton>
      ) : variant === 'icon-button' ? (
        <IconButton {...props}>{children}</IconButton>
      ) : (
        <PrimaryLightButton {...props}>{children}</PrimaryLightButton>
      )}
    </>
  );
};

export default Button;
