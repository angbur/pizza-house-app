import Button from 'components/Atoms/Button/Button';
import Icon from 'components/Atoms/Icon/Icon';
import PriceTag from 'components/Atoms/PriceTag/PriceTag';
import QuantityChangeButton from 'components/Atoms/QuantityChangeButton/QuantityChangeButton';
import Typography from 'components/Atoms/Typography/Typography';
import { removeFromOrder, updateOrderItem } from 'components/Pages/Order/orderSlice';
import { ThemeContext } from 'components/Theme/ThemeContext';
import { useAppDispatch } from 'hooks';
import { useContext } from 'react';
import styled from 'styled-components';
import { OrderItem } from 'types/Order';

const StyledListItem = styled.li`
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.palette.light};
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1rem 2rem;
  max-width: 800px;
  & > .quantity-container {
    position: relative;
    top: 4px;
  }
  & > img {
    margin-left: 2rem;
  }
`;

const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.325rem;
  padding: 0 1rem;
  flex: 50%;
  text-align: left;
`;

const QuantityDiv = styled.div`
  flex: 20%;
`;

const PriceDiv = styled.div`
  flex: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > .price-tag {
    position: relative;
    top: 4px;
  }
`;

export type OrderListItemProps = {
  item: OrderItem;
};

const OrderListItem = ({ item }: OrderListItemProps) => {
  const theme = useContext(ThemeContext);
  const dispatch = useAppDispatch();

  const handleOnIncrement = () => {
    const newItem = { ...item };
    newItem.quantity += 1;
    dispatch(updateOrderItem(newItem));
  };
  const handleOnDecrement = () => {
    const newItem = { ...item };
    if (item.quantity != 1) {
      newItem.quantity = +1;
      dispatch(updateOrderItem(newItem));
    }
    if (item.quantity === 1) {
      dispatch(removeFromOrder(item._id));
    }
  };

  const handleRemove = () => dispatch(removeFromOrder(item._id));

  return (
    <StyledListItem theme={theme}>
      <QuantityDiv className={'quantity-container'}>
        <Typography variant='price-tag' color='light'>
          {item.quantity} X
        </Typography>
      </QuantityDiv>
      <QuantityChangeButton onIncrement={handleOnIncrement} onDecrement={handleOnDecrement} />
      <img
        src={require(`assets/image/pizza-${item.item._id}.svg`)}
        height={'75px'}
        alt={`Picture of ${item.item.name} pizza`}
      />
      <DescriptionDiv>
        <Typography variant='card-title' style={{ ...{ textTransform: 'uppercase' } }}>
          {item.item.name}
        </Typography>
        <Typography variant='card-subtitle'>
          {item.item.ingredients.map((i, id) =>
            id != item.item.ingredients.length - 1 ? (
              <span key={`ingredients-${i}`}> {i}, </span>
            ) : (
              <span key={`ingredients-${i}`}> {i}</span>
            ),
          )}
        </Typography>
      </DescriptionDiv>
      <PriceDiv>
        <PriceTag price={item.item.price * item.quantity} size='md' />
      </PriceDiv>
      <Button variant={'icon-button'} onClick={handleRemove}>
        {Icon({ name: 'trash', size: 14, isActive: false })}
      </Button>
    </StyledListItem>
  );
};

export default OrderListItem;
