import Button from 'components/Atoms/Button/Button';
import Typography from 'components/Atoms/Typography/Typography';
import { MouseEventHandler } from 'react';
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
  @media (max-width: 766px) {
    justify-content: center;
  }
`;

type OrderSummaryProps = {
  data: OrderForm;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const OrderSummary = ({ data, onClick }: OrderSummaryProps) => {
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
        <Button variant={'secondary-light'} onClick={onClick}>
          Edit
        </Button>
      </Container>
    </>
  );
};

export default OrderSummary;
