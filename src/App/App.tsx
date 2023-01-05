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
import OrderForm from 'components/Pages/Order/components/OrderForm/OrderForm';
import OrderSummary from 'components/Pages/Order/components/OrderSummary/OrderSummary';
import Dialog from 'components/Organisms/Dialog/Dialog';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  display: flex;
`;

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Dialog />
    <Header />
    <Container>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/make-pizza' element={<MakePizzaPage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/order/form' element={<OrderForm />} />
        <Route path='/order/summary' element={<OrderSummary />} />
        <Route path='/history' element={<HistoryPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<Main />} />
      </Routes>
    </Container>
  </Fragment>
);
export default App;
