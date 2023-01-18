import PriceTag from 'components/Atoms/PriceTag/PriceTag';
import Typography from 'components/Atoms/Typography/Typography';
import OrderListItem from 'components/Molecules/OrderListItem/OrderListItem';
import { useAppSelector } from 'hooks';
import styled from 'styled-components';
import { OrderItem } from 'types/Order';
import { selectListOfOrderItems, selectSumOfOrder } from '../../Pages/Order/orderSlice';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 3rem;
  margin: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OrderList = () => {
  const orderList = useAppSelector(selectListOfOrderItems);
  const sumOfOrder = useAppSelector(selectSumOfOrder);

  return orderList.length === 0 ? (
    <Typography variant='paragraph' color='light'>
      You have not ordered anything yet.
    </Typography>
  ) : (
    <Container>
      <StyledList>
        {orderList.map((el: OrderItem) => (
          <OrderListItem key={`listItem-${el._id}`} item={el} />
        ))}
      </StyledList>
      <StyledDiv>
        <Typography variant='caption' color='light'>
          SUM
        </Typography>
        <PriceTag price={sumOfOrder} size='lg' />
      </StyledDiv>
    </Container>
  );
};

export default OrderList;
