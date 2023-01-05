import Typography from 'components/Atoms/Typography/Typography';
import styled from 'styled-components';
import OrderList from './components/OrderList/OrderList';

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

const OrderPage = () => {
  return (
    <Container>
      <Typography variant='section-title' color='light'>
        My Order
      </Typography>
      <OrderList />
    </Container>
  );
};

export default OrderPage;
