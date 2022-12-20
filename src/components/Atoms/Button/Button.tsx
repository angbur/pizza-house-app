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
  'primaryLight',
  'primaryDark',
  'secondaryLight',
  'secondaryDark',
  'buttonTextLight',
  'buttonTextDark',
  'iconButton',
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
  variant = 'primaryLight',
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
      {variant === 'primaryLight' ? (
        <PrimaryLightButton {...props}>{children}</PrimaryLightButton>
      ) : variant === 'primaryDark' ? (
        <PrimaryDarkButton {...props}>{children}</PrimaryDarkButton>
      ) : variant === 'secondaryLight' ? (
        <SecondaryLightButton {...props}>{children}</SecondaryLightButton>
      ) : variant === 'secondaryDark' ? (
        <SecondaryDarkButton {...props}>{children}</SecondaryDarkButton>
      ) : variant === 'buttonTextLight' ? (
        <TextLightButton {...props}>{children}</TextLightButton>
      ) : variant === 'buttonTextDark' ? (
        <TextDarkButton {...props}>{children}</TextDarkButton>
      ) : variant === 'iconButton' ? (
        <IconButton {...props}>{children}</IconButton>
      ) : (
        <PrimaryLightButton {...props}>{children}</PrimaryLightButton>
      )}
    </>
  );
};

export default Button;
