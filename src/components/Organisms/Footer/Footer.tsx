import { FooterContainer } from './Footer.styles';
import { ThemeContext } from 'components/Theme/ThemeContext';
import { useContext } from 'react';

const Footer = () => {
  const theme = useContext(ThemeContext);

  return (
    <footer>
      <FooterContainer className='footer' theme={theme}></FooterContainer>
    </footer>
  );
};

export default Footer;
