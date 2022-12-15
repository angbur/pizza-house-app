import { PropsWithChildren } from 'react';
import Button from '../Atoms/Button/Button';
import { Theme } from '../Theme/theme.types';

type HeaderProps = {
  theme: Theme;
};

const Header = ({ theme }: PropsWithChildren<HeaderProps>) => {
  return (
    <Button variant={'button-text-light'} theme={theme}>
      Press me
    </Button>
  );
};

export default Header;
