import { ColorVariants } from 'components/Theme/theme.types';
import { ThemeContext } from 'components/Theme/ThemeContext';
import { CSSProperties, useContext } from 'react';

const icons = [
  'user',
  'menu',
  'order',
  'email',
  'basket',
  'facebook',
  'instagram',
  'arrow-down',
  'arrow-up',
  'vege',
  'meat',
  'seafood',
  'spicy',
  'pizza-slice',
  'pizza-circle',
  'cancel-cross',
  'trash',
  'circle',
  'list-icon',
  'info',
  'login',
  'menu-burger',
  'filter',
  'people',
  'plus',
  'minus',
];
export type IconName = typeof icons[number];

type IconProps = {
  name: IconName;
  size: number;
  color?: ColorVariants;
};
const Icon2 = ({ name, size, color = 'light' }: IconProps) => {
  const theme = useContext(ThemeContext);

  const colorStyles: CSSProperties = {
    color: theme.palette[color],
  };

  return <img src={require(`assets/icon/${name}.svg`)} height={size} style={colorStyles} />;
};

export default Icon2;
