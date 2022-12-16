import { Fragment, useContext } from 'react';
import Header from './components/Organisms/Header/Header';
import { ThemeContext } from './components/Theme/ThemeContext';
import GlobalStyle from './global';

const App = () => {
  const theme = useContext(ThemeContext);
  return (
    <Fragment>
      <Header theme={theme} />
      <GlobalStyle theme={theme} />
    </Fragment>
  );
};

export default App;
