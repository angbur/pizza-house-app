import Typography from 'components/Atoms/Typography/Typography';
import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
`;

const OrderDetail = (): ReactNode => {
  return (
    <Container>
      <Typography variant='item-title' color='secondary'>
        In progress...{' '}
      </Typography>
    </Container>
  );
};

export default OrderDetail;
