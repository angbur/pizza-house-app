import Icon from 'components/Atoms/Icon/Icon';
import Logo from 'components/Atoms/Logo/Logo';
import Typography from 'components/Atoms/Typography/Typography';
import ListIconItem from 'components/Molecules/ListIconItem/ListIconItem';
import { ThemeContext } from 'components/Theme/ThemeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem 4rem;
  background: ${(props) => props.theme.palette.primary};
  display: flex;
  justify-content: flex-start;
  align-items: start;
  width: 100vw;
  gap: 4rem;
  @media (max-width: 994px) {
    gap: 1rem;
    padding: 0;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 2rem;
  @media (max-width: 994px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme?.palette.secondary};
`;

const MobileFooter = styled.div`
  @media (min-width: 995px) {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 100vw;
`;

const ListItem = styled.div`
  width: 108px;
  border-top: none;
  & .icon-item {
    border: none;
  }
  @media (max-width: 357px) {
    & > h5 {
      scale: 0.6;
    }
  }
`;

const Footer = () => {
  const theme = useContext(ThemeContext);

  return (
    <footer>
      <FooterContainer className='footer' theme={theme}>
        <Column>
          <Logo background='primary' />
        </Column>
        <Column>
          <Typography variant='item-title' style={{ ...{ textTransform: 'uppercase' } }}>
            Sitemap
          </Typography>
          <StyledLink to={'/make-pizza'} theme={theme}>
            Create own pizza
          </StyledLink>
          <StyledLink to={'/contact'} theme={theme}>
            Contact
          </StyledLink>
          <StyledLink to={'/profile'} theme={theme}>
            Profile
          </StyledLink>
          <StyledLink to={'/history'} theme={theme}>
            My orders
          </StyledLink>
          <StyledLink to={'/'} theme={theme}>
            Menu
          </StyledLink>
        </Column>
        <Column>
          <Typography variant='item-title' style={{ ...{ textTransform: 'uppercase' } }}>
            Tags
          </Typography>
          <StyledLink to={'/'} theme={theme}>
            Vegetarian
          </StyledLink>
          <StyledLink to={'/'} theme={theme}>
            Meaty
          </StyledLink>
          <StyledLink to={'/'} theme={theme}>
            Spicy
          </StyledLink>
          <StyledLink to={'/'} theme={theme}>
            Seafood
          </StyledLink>
          <StyledLink to={'/'} theme={theme}>
            Most popular
          </StyledLink>
        </Column>
        <Column>
          <Typography variant='item-title' style={{ ...{ textTransform: 'uppercase' } }}>
            Find us
          </Typography>
          <StyledLink to={'/'} theme={theme}>
            {Icon({ name: 'facebook', size: 14, isActive: false })} Facebook
          </StyledLink>
          <StyledLink to={'/'} theme={theme}>
            {Icon({ name: 'instagram', size: 14, isActive: false })} Instagram
          </StyledLink>
        </Column>
        <MobileFooter>
          <ListItem>
            <ListIconItem icon={{ name: 'menu', size: 32 }} label={'menu'} linkTo={'/'} />
          </ListItem>
          <ListItem>
            <ListIconItem icon={{ name: 'order', size: 32 }} label={'order'} linkTo={'order'} />
          </ListItem>
          <ListItem>
            <ListIconItem
              icon={{ name: 'pizza-circle', size: 32 }}
              label={'make'}
              linkTo={'make-pizza'}
            />
          </ListItem>
        </MobileFooter>
      </FooterContainer>
    </footer>
  );
};

export default Footer;
