import Button from 'components/Atoms/Button/Button';
import Logo from 'components/Atoms/Logo/Logo';
import { HeaderActions, Navbar } from './Header.styles';
import Title from 'assets/image/quote.svg';
import LoginIcon from 'assets/icon/user.svg';
import { ThemeContext } from 'components/Theme/ThemeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const theme = useContext(ThemeContext);

  return (
    <header>
      <Navbar className='header' theme={theme}>
        <Link to={'/'} className='header_logo'>
          <Logo background='secondary' />
        </Link>
        <div className='header_title'>
          <img src={Title} />
        </div>
        <HeaderActions className='header_actions'>
          <Button variant={'primary-light'} className={'header_actions_button--desktop'}>
            Sign in
          </Button>
          <Button variant={'button-text-dark'} className={'header_actions_button--desktop'}>
            Sign up
          </Button>
          <Button variant={'icon-button'} className={'header_actions_button--mobile'}>
            <img src={LoginIcon} />
          </Button>
        </HeaderActions>
      </Navbar>
    </header>
  );
};

export default Header;
