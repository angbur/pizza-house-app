import { Routes, Route, Outlet } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import Header from './components/Organisms/Header/Header';
import { ThemeContext } from './components/Theme/ThemeContext';
import GlobalStyle from './global';
import Main from './components/Page/Main/Main';

const App = () => {
  const theme = useContext(ThemeContext);
  return (
    <Fragment>
      <GlobalStyle theme={theme} />
      <Header theme={theme} />
      <Outlet/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path="*" element={<Main />} />
      </Routes>
    </Fragment>
  );
};

export default App;
