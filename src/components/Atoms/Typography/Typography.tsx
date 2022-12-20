import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { CSSProperties } from 'styled-components';
import { ColorVariants } from '../../Theme/theme.types';

const variants = ['mainTitle', 'sectionTitle','cardTitle', 'itemTitle', 'paragraph', 'caption'] as const;
type TypographyVariant = typeof variants[number];

const variantToElement = {
  'mainTitle': 'h1',
  'sectionTitle': 'h2',
  'cardTitle': 'h3',
  'itemTitle': 'h5',
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
    children
}: PropsWithChildren<TypographyProps>) => {
  const Element = variantToElement[variant ? variant : 'paragraph'];

  return <Element className={clsx(variant, className)} style={theme.typography[variant]}>{children}</Element>
};

export default Typography;
