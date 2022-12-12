import clsx from 'clsx';
import { CSSProperties, MouseEventHandler, PropsWithChildren } from 'react';
import styled from 'styled-components';

export const ButtonStyled = styled.div`
    background: #EB853E;
    padding: 1.25rem 0.625rem;
`

export type ButtonProps = {
  variant?: string;
  size?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  variant,
  size,
  className,
  style,
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={clsx(variant, size, className)} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
