import Button from 'components/Atoms/Button/Button';
import Typography from 'components/Atoms/Typography/Typography';
import styled from 'styled-components';
import OrderForm from '../OrderForm/OrderForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  text-align: center;
  & > button {
    margin: 2rem 0;
  }
  & .title {
    margin-bottom: 1rem;
  }
`;

type OrderSummaryProps = {
  data: OrderForm;
};

const OrderSummary = ({ data }: OrderSummaryProps) => {
  return (
    <>
      <Container>
        <Typography variant={'card-title'} className={'title'} color={'primary'}>
          Address:
        </Typography>
        <Typography variant={'paragraph'} color={'light'}>
          {data.firstName.concat(' ', data.lastName)}
        </Typography>
        <Typography variant={'paragraph'} color={'light'}>
          {data.email}
        </Typography>
        <Typography variant={'paragraph'} color={'light'}>
          {data.phone}
        </Typography>
        <Typography variant={'paragraph'} color={'light'}>
          {data.street.concat(' ', data.houseNumber)}
        </Typography>
        <Typography variant={'paragraph'} color={'light'}>
          {data.postalCode.concat(' ', data.city)}
        </Typography>
        <Button variant={'secondary-light'}>Edit</Button>
      </Container>
    </>
  );
};

export default OrderSummary;
