import clsx from 'clsx';
import { useContext } from 'react';
import styled, { CSSProperties } from 'styled-components';
import LogoSVG from '../../../assets/image/logo.svg';
import { ColorVariants } from '../../Theme/theme.types';
import { ThemeContext } from '../../Theme/ThemeContext';

const logo = ['full', 'signet'] as const;
type LogoVariant = typeof logo[number];

export type LogoProps = {
  variant?: LogoVariant;
  background: ColorVariants;
  className?: string;
  style?: CSSProperties;
};

const LogoBox = styled.div`
  height: 138px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 114px;
  cursor: pointer;
`;

const Logo = ({ variant = 'full', className, background, style }: LogoProps) => {
  const theme = useContext(ThemeContext);

  const backgroundStyles: CSSProperties = {
    background: theme.palette[background],
  };

  return (
    <LogoBox className={clsx(variant, className, 'logo')} style={{...backgroundStyles, ...style}}>
      <img src={LogoSVG} />
    </LogoBox>
  );
};

export default Logo;
