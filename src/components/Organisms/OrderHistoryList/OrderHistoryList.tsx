import OrderHistoryListItem from 'components/Molecules/OrderHistoryListItem/OrderHistoryListItem';
import { useAppSelector } from 'hooks';
import { useGetOrdersByUserIdQuery } from 'services/order/order';
import { selectUserId } from 'store/user/userSlice';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;
`;

const OrderHistoryList = () => {
  const userId: string | undefined = useAppSelector(selectUserId);
  const { data } = useGetOrdersByUserIdQuery(userId as string);

  return (
    <List>
      {data &&
        data.map((order) => (
          <OrderHistoryListItem key={`order-history-${order._id}`} element={order} />
        ))}
    </List>
  );
};

export default OrderHistoryList;
