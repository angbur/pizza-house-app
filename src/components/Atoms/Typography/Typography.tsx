import clsx from 'clsx';
import { PropsWithChildren, useContext } from 'react';
import { CSSProperties } from 'styled-components';
import { ColorVariants, TypographyVariant } from '../../Theme/theme.types';
import { ThemeContext } from '../../Theme/ThemeContext';

const variantToElement = {
  'main-title': 'h1',
  'section-title': 'h2',
  'card-title': 'h3',
  'item-title': 'h5',
  'paragraph': 'p',
  'caption': 'p',
} as const;

export type TypographyProps = {
  variant?: TypographyVariant;
  color: ColorVariants;
  className?: string;
  style?: CSSProperties;
};

const Typography = ({
  variant,
  className,
  style,
  color,
  children,
}: PropsWithChildren<TypographyProps>) => {
  const theme = useContext(ThemeContext);
  const Element = variantToElement[variant ? variant : 'paragraph'];

  const colorStyles: CSSProperties = {
    color: theme.palette[color],
  };

  return (
    <Element
      className={clsx(variant, className)}
      style={{ ...theme.typography[variant ? variant : 'paragraph'], ...colorStyles, ...style }}
    >
      {children}
    </Element>
  );
};

export default Typography;