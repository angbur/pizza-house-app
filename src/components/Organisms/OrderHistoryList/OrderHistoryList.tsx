import OrderHistoryListItem from 'components/Molecules/OrderHistoryListItem/OrderHistoryListItem';
import { useAppSelector } from 'hooks';
import { useGetOrdersByUserIdQuery } from 'services/order';
import { selectUserId } from 'store/userSlice';
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
  const userId = useAppSelector(selectUserId);
  const { data } = useGetOrdersByUserIdQuery(userId);

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
