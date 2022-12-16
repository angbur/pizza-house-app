import Button from '../../Atoms/Button/Button';
import Logo from '../../Atoms/Logo/Logo';
import { Theme } from '../../Theme/theme.types';
import { HeaderActions, Navbar } from './Header.styles';
import Title from '../../../assets/image/quote.svg';
import LoginIcon from '../../../assets/icon/user.svg';

export type HeaderProps = {
  theme: Theme;
};

const Header = ({ theme }: HeaderProps) => {
  return (
    <header>
      <Navbar className='header'>
        <div className='header_logo'>
          <Logo theme={theme} />
        </div>
        <div className='header_title'>
          <img src={Title} />
        </div>
        <HeaderActions className='header_actions'>
          <Button
            variant={'primary-light'}
            className={'header_actions_button--desktop'}
            theme={theme}
          >
            Sign in
          </Button>
          <Button
            variant={'button-text-dark'}
            className={'header_actions_button--desktop'}
            theme={theme}
          >
            Sign up
          </Button>
          <Button variant={'icon-button'} className={'header_actions_button--mobile'} theme={theme}>
            <img src={LoginIcon} />
          </Button>
        </HeaderActions>
      </Navbar>
    </header>
  );
};

export default Header;
