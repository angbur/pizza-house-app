import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Main from 'components/Pages/Main/Main';
import Header from 'components/Organisms/Header/Header';
import Footer from 'components/Organisms/Footer/Footer';
import GlobalStyle from '../global.styles';
import Sidebar from 'components/Organisms/Sidebar/Sidebar';
import styled from 'styled-components';
import MakePizzaPage from 'components/Pages/MakePizza/MakePizzaPage';
import OrderPage from 'components/Pages/Order/OrderPage';
import HistoryPage from 'components/Pages/History/HistoryPage';
import ContactPage from 'components/Pages/Contact/ContactPage';
import OrderForm from 'components/Organisms/OrderForm/OrderForm';
import Dialog from 'components/Organisms/Dialog/Dialog';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfilePage from 'components/Pages/Profile/ProfilePage';
import ScrollToTop from './ScrollToTop';
import { useAppSelector } from 'hooks';
import { selectIsLoggedIn } from 'store/user/userSlice';
import { useUserData } from 'components/Organisms/OrderForm/useUserData';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const App = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const user = useUserData();

  return (
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
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/make-pizza' element={<MakePizzaPage />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='/order/form' element={isLoggedIn && <OrderForm user={user} />} />
          <Route path='/history' element={<HistoryPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='*' element={<Main />} />
        </Routes>
      </Container>
      <Footer />
    </Fragment>
  );
};
export default App;
