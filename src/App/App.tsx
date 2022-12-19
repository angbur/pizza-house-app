import { Fragment, useContext } from 'react';
import Footer from '../components/Organisms/Footer/Footer';
import Header from '../components/Organisms/Header/Header';
import Sidebar from '../components/Organisms/Sidebar/Sidebar';
import Main from '../components/Pages/Main/Main';
import { ThemeContext } from '../components/Theme/ThemeContext';
import GlobalStyle from '../global.styles';
import { Container } from './App.styles';

const App = () => {
  const theme = useContext(ThemeContext);
  return (
    <Fragment>
      <GlobalStyle theme={theme} />
      <Header theme={theme} />
      <Container className='container'>
        <Sidebar />
        <Main />
      </Container>
      <Footer />
    </Fragment>
  );
};

export default App;
