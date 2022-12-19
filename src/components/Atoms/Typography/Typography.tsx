import { PropsWithChildren } from 'react';
import { ColorVariants, TypographyVariant } from '../../Theme/theme.types';
import { PageTitle } from './Typography.styles';

export type TypographyProps = {
  variant?: TypographyVariant;
  color: ColorVariants;
};

const Typography = ({
    variant,
    color,
    children
}: PropsWithChildren<TypographyProps>) => {

  return (
    <>
      {variant === ('page-title' || 'h2') ? <PageTitle color={color}>{children}</PageTitle> : null}
    </>
  )
};

export default Typography;
