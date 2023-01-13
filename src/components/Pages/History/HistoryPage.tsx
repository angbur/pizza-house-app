import Typography from 'components/Atoms/Typography/Typography';
import OrderHistoryListItem from 'components/Molecules/OrderHistoryListItem/OrderHistoryListItem';
import { useAppSelector } from 'hooks';
import { OrderDetail, useGetOrdersByUserIdQuery } from 'services/order';
import { selectUserId } from 'store/userSlice';
import styled from 'styled-components';

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

const OrderHistoryList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;
`;

const HistoryPage = () => {
  const userId = useAppSelector(selectUserId);
  const { data } = useGetOrdersByUserIdQuery(userId);

  return (
    <Container>
      <Typography variant='section-title' color='light'>
        My Orders
      </Typography>
      <OrderHistoryList>
        {data &&
          data.map((order) => (
            <OrderHistoryListItem key={`order-history-${order._id}`} element={order} />
          ))}
      </OrderHistoryList>
    </Container>
  );
};

export default HistoryPage;
