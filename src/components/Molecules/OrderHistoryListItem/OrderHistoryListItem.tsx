import Button from 'components/Atoms/Button/Button';
import PriceTag from 'components/Atoms/PriceTag/PriceTag';
import Typography from 'components/Atoms/Typography/Typography';
import { FormType, openDialog } from 'components/Organisms/Dialog/dialogSlice';
import { ThemeContext } from 'components/Theme/ThemeContext';
import { useAppDispatch } from 'hooks';
import { useContext } from 'react';
import { OrderDetail } from 'services/order';
import styled from 'styled-components';
import { OrderItem } from 'types/Order';

const StyledListItem = styled.li`
  border: 2px solid ${(props) => props.theme?.palette.light};
  border-radius: 8px;
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  width: 90%;
  @media (max-width: 950px) {
    gap: 2rem;
    width: auto;
    & > p.paragraph {
      display: none;
    }
  }
  @media (max-width: 460px) {
    & > p {
      display: none;
    }
  }
  @media (max-width: 332px) {
    flex-direction: column;
  }
`;

type OrderHistoryListItemProps = {
  element: OrderDetail;
};

const OrderHistoryListItem = ({ element }: OrderHistoryListItemProps) => {
  const theme = useContext(ThemeContext);
  const dispatch = useAppDispatch();

  const getDescription = (arr: Omit<OrderItem, '_id'>[]) => {
    let result = '';

    arr.map(
      (pizza, index) =>
        (result =
          index != arr.length - 1
            ? result.concat(pizza.item.name, ', ')
            : result.concat(pizza.item.name)),
    );

    return result;
  };

  const handleClick = () => {
    dispatch(openDialog(FormType.orderDetail));
  };

  return (
    <StyledListItem theme={theme}>
      <Typography variant='item-title' color='light'>
        {new Intl.DateTimeFormat('us-US').format(new Date(element.date))}
      </Typography>
      <PriceTag price={element.total} />
      <Typography
        key={`pizza-${element._id}`}
        variant={'paragraph'}
        color='light'
        style={{ textAlign: 'left', width: '360px' }}
      >
        {getDescription(element.order)}
      </Typography>
      <Button variant='primary-light' onClick={handleClick}>
        Details
      </Button>
    </StyledListItem>
  );
};

export default OrderHistoryListItem;
