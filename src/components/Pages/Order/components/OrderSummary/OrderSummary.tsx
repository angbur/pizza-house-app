import Typography from 'components/Atoms/Typography/Typography';
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

const OrderSummary = () => {
  return (
    <Container>
      <Typography variant='section-title' color='light'>
        Summary
      </Typography>
    </Container>
  );
};

export default OrderSummary;
