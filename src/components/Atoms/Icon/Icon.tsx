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
  isActive?: boolean;
};
const Icon = ({ name, size, isActive = false }: IconProps) => {
  return isActive ? (
    <img src={require(`assets/icon/${name}-active.svg`)} height={size} />
  ) : (
    <img src={require(`assets/icon/${name}.svg`)} height={size} />
  );
};

export default Icon;
