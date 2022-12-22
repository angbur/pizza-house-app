import { CSSProperties } from 'react';
import { ButtonProps } from './Button';

const setButtonSize = ({ size, style }: ButtonProps): CSSProperties => {
  let scale = 1;

  if (size === 'md') scale = 0.9;
  if (size === 'sm') scale = 0.8;

  const padding: CSSProperties = {
    padding: `${scale * 0.625}rem ${scale * 1.25}rem`,
    fontSize: `${(scale + 0.05) * 1}rem`,
  };

  return {
    ...padding,
    ...style,
  };
};

export default setButtonSize;