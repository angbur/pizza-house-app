import Button from 'components/Atoms/Button/Button';
import Typography from 'components/Atoms/Typography/Typography';
import { openDialog, FormType } from 'components/Organisms/Dialog/dialogSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'store/userSlice';
import styled from 'styled-components';
import OrderList from './components/OrderList/OrderList';
import { removeAllOrder, selectListOfOrderItems } from './orderSlice';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 100%;
  & > h2 {
    margin: 2rem 0;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 3rem;
  margin: 2rem;
`;

const OrderPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const orderList = useAppSelector(selectListOfOrderItems);

  const handleRemoveAll = () => {
    dispatch(removeAllOrder());
  };

  const handleNavigate = () => {
    if (!isLoggedIn) dispatch(openDialog(FormType.login));
    navigate('/order/form');
  };
  return (
    <Container>
      <Typography variant='section-title' color='light'>
        My Order
      </Typography>
      <OrderList />
      {orderList.length !== 0 ? (
        <StyledDiv>
          <Button variant='button-text-light' onClick={handleRemoveAll}>
            Remove all
          </Button>
          <Button variant='primary-light' onClick={handleNavigate}>
            Go to order form
          </Button>
        </StyledDiv>
      ) : null}
    </Container>
  );
};

export default OrderPage;
