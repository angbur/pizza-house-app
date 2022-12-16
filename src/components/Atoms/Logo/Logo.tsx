import clsx from 'clsx';
import { CSSProperties } from 'styled-components';
import LogoSVG from '../../../assets/image/logo.svg';
import { Theme } from '../../Theme/theme.types';
import { LogoBox } from './Logo.styles';

const logo = ['full', 'signet'] as const;
type LogoVariant = typeof logo[number];

export type LogoProps = {
  variant?: LogoVariant;
  className?: string;
  style?: CSSProperties;
  theme: Theme;
};

const Logo = ({ variant = 'full', className, style, theme }: LogoProps) => {
  return (
    <LogoBox className={clsx(variant, className, 'logo')} style={style} theme={theme}>
      <img src={LogoSVG} />
    </LogoBox>
  );
};

export default Logo;
