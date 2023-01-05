import Button from 'components/Atoms/Button/Button';
import PriceTag from 'components/Atoms/PriceTag/PriceTag';
import Typography from 'components/Atoms/Typography/Typography';
import OrderListItem from 'components/Organisms/OrderListItem/OrderListItem';
import { useAppDispatch, useAppSelector } from 'hooks';
import styled from 'styled-components';
import { OrderItem } from 'types/Order';
import { removeAllOrder, selectListOfOrderItems, selectSumOfOrder } from '../../orderSlice';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 3rem;
  margin: 2rem;
`;

const OrderList = () => {
  const dispatch = useAppDispatch();
  const orderList = useAppSelector(selectListOfOrderItems);
  const sumOfOrder = useAppSelector(selectSumOfOrder);

  const handleRemoveAll = () => {
    dispatch(removeAllOrder());
  };

  return orderList.length === 0 ? (
    <Typography variant='paragraph' color='light'>
      You have not ordered anything yet.
    </Typography>
  ) : (
    <>
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
      <StyledDiv>
        <Button variant='button-text-light' onClick={handleRemoveAll}>
          Remove all
        </Button>
        <Button variant='primary-light'>Order</Button>
      </StyledDiv>
    </>
  );
};

export default OrderList;
