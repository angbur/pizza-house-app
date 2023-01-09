import clsx from 'clsx';
import {
  ComponentPropsWithoutRef,
  CSSProperties,
  MouseEventHandler,
  PropsWithChildren,
  useContext,
} from 'react';
import { ThemeContext } from 'components/Theme/ThemeContext';
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
export type ButtonSize = typeof buttonSizes[number];

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  style?: CSSProperties;
  children?: PropsWithChildren;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  variant = 'primary-light',
  size = 'lg',
  className,
  style,
  children,
  onClick,
}: PropsWithChildren<ButtonProps> & ComponentPropsWithoutRef<'button'>) => {
  const theme = useContext(ThemeContext);

  const props = {
    className: clsx(variant, `btn-${size}`, className, 'button'),
    onClick: onClick,
    style: { ...setButtonSize(size), ...style },
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
