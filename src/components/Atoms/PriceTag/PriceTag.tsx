import { CSSProperties } from 'react';
import Typography from '../Typography/Typography';

type PriceTagSize = 'lg' | 'md' | 'sm';

type PriceTagProps = {
  price: number;
  size?: PriceTagSize;
};

const PriceTag = ({ price, size = 'lg' }: PriceTagProps) => {
  let scale = 1;

  if (size === 'md') scale = 0.8;
  if (size === 'sm') scale = 0.7;

  const priceTagStyle: CSSProperties = {
    fontSize: `${(scale + 0.05) * 3}rem`,
  };

  return (
    <Typography variant='price-tag' color='primary' style={priceTagStyle}>{`${price}$`}</Typography>
  );
};

export default PriceTag;
