import Button from 'components/Atoms/Button/Button';
import Logo from 'components/Atoms/Logo/Logo';
import {
  DropdownContainer,
  DropdownContainerMobile,
  DropdownContent,
  HeaderActions,
  Navbar,
} from './Header.styles';
import Title from 'assets/image/quote.svg';
import { ThemeContext } from 'components/Theme/ThemeContext';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { FormType, openDialog } from '../Dialog/dialogSlice';
import { logout, selectIsLoggedIn, selectLogin } from 'store/userSlice';
import Typography from 'components/Atoms/Typography/Typography';
import Icon from 'components/Atoms/Icon/Icon';

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const login = useAppSelector(selectLogin);
  const [isOpen, setDropDown] = useState<boolean>(false);

  const handleSignIn = () => {
    dispatch(openDialog(FormType.login));
  };

  const handleSignUp = () => {
    dispatch(openDialog(FormType.register));
  };

  const handleClickDropdown = () => {
    setDropDown((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleNavigate = () => {
    navigate('/profile');
    setDropDown(false);
  };

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
          {isLoggedIn ? (
            <DropdownContainer>
              <Button variant='button-text-without-hover' onClick={handleClickDropdown}>
                <Typography variant='item-title' color='secondary'>
                  {login}
                </Typography>
              </Button>
              <DropdownContent style={{ display: isOpen ? 'block' : 'none' }}>
                <li>
                  <Button variant='button-text-without-hover' onClick={handleNavigate}>
                    {Icon({ name: 'user', size: 14, isActive: false })} Profile
                  </Button>
                </li>
                <li>
                  <Button variant='button-text-without-hover' onClick={handleLogout}>
                    {Icon({ name: 'logout', size: 14, isActive: false })} Log out
                  </Button>
                </li>
              </DropdownContent>
            </DropdownContainer>
          ) : (
            <>
              <Button
                variant={'primary-light'}
                className={'header_actions_button--desktop'}
                onClick={handleSignIn}
              >
                Sign in
              </Button>
              <Button
                variant={'button-text-dark'}
                className={'header_actions_button--desktop'}
                onClick={handleSignUp}
              >
                Sign up
              </Button>

              <DropdownContainerMobile>
                <Button variant='button-text-without-hover' onClick={handleClickDropdown}>
                  {Icon({ name: 'menu-burger', size: 20, isActive: false })}
                </Button>
                <DropdownContent style={{ display: isOpen ? 'block' : 'none' }}>
                  <li>
                    <Button variant='button-text-without-hover' onClick={handleSignIn}>
                      Sign in
                    </Button>
                  </li>
                  <li>
                    <Button variant='button-text-without-hover' onClick={handleSignUp}>
                      Sign up
                    </Button>
                  </li>
                </DropdownContent>
              </DropdownContainerMobile>
            </>
          )}
        </HeaderActions>
      </Navbar>
    </header>
  );
};

export default Header;
