import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Main from '../components/Pages/Main/Main';
import Header from '../components/Organisms/Header/Header';
import GlobalStyle from '../global.styles';
import Sidebar from 'components/Organisms/Sidebar/Sidebar';
import styled from 'styled-components';
import MakePizzaPage from 'components/Pages/MakePizza/MakePizzaPage';
import OrderPage from 'components/Pages/Order/OrderPage';
import HistoryPage from 'components/Pages/History/HistoryPage';
import ContactPage from 'components/Pages/Contact/ContactPage';

const Container = styled.div`
  display: flex;
`;

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <Container>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/make-pizza' element={<MakePizzaPage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/history' element={<HistoryPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<Main />} />
      </Routes>
    </Container>
  </Fragment>
);
export default App;
