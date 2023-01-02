import clsx from 'clsx';
import { CSSProperties, PropsWithChildren, useContext } from 'react';
import { ColorVariants, TypographyVariant } from 'components/Theme/theme.types';
import { ThemeContext } from 'components/Theme/ThemeContext';

const variantToElement = {
  'main-title': 'h1',
  'section-title': 'h2',
  'card-title': 'h3',
  'item-title': 'h5',
  paragraph: 'p',
  caption: 'p',
} as const;

export type TypographyProps = {
  variant?: TypographyVariant;
  color?: ColorVariants;
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
  const Element = variantToElement[variant ?? 'paragraph'];

  const colorStyles: CSSProperties = {
    color: color ? theme.palette[color] : 'none',
  };

  return (
    <Element
      className={clsx(variant, className)}
      style={{ ...theme.typography[variant ?? 'paragraph'], ...colorStyles, ...style }}
    >
      {children}
    </Element>
  );
};

export default Typography;
