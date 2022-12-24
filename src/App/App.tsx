import { Routes, Route, Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import Main from '../components/Pages/Main/Main';
import Header from '../components/Organisms/Header/Header';
import GlobalStyle from '../global.styles';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <Outlet />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='*' element={<Main />} />
    </Routes>
  </Fragment>
);
export default App;
