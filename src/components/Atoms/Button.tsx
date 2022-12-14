import clsx from 'clsx';
import { CSSProperties, MouseEventHandler, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Theme } from '../Theme/theme.types';

type ButtonVariant = 'primary' | 'secondary' | 'button-text';
type ButtonSize = 'sm' | 'md' | 'lg';

const BaseButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  border: 1px solid ${props=>props.theme.palette.primary.main};
  background: ${props=>props.theme.palette.primary.main};
  color: ${props=>props.theme.palette.primary.contrastColor};
`;

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  style?: CSSProperties;
  theme?: Theme;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  variant = 'primary',
  size = 'lg',
  className,
  style,
  children,
  theme,
  onClick,
}: PropsWithChildren<ButtonProps>) => {

  return (
    <BaseButton className={clsx(variant, size, className)} onClick={onClick} style={style} theme={theme} >
      {children}
    </BaseButton>
  );
};

export default Button;
