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
import ButtonWithInputMobile from '../ButtonWithInputMobile/ButtonWithInputMobile';

const StyledListItem = styled.li`
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.palette.light};
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1rem 2rem;
  width: 800px;
  & > .quantity-container {
    position: relative;
    top: 4px;
  }
  & .quantity-button-mobile {
    display: none;
  }
  & > img {
    margin-left: 2rem;
  }
  @media (max-width: 950px) {
    width: auto;
    margin: 0 2rem;
  }
  @media (max-width: 440px) {
    margin: 0;
  }
  @media (max-width: 640px) {
    & img.pizza-img {
      display: none;
    }
  }
  @media (max-width: 545px) {
    & img.pizza-img,
    .quantity-container,
    .quantity-button,
    .icon-button {
      display: none;
    }
    padding: 1rem;
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
    & .quantity-button-mobile {
      display: block;
    }
    & .quantity-button {
      display: none;
    }
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
  @media (max-width: 545px) {
    flex: 100%;
    padding: 0;
    margin-bottom: 1rem;
  }
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
    @media (max-width: 545px) {
      & > p {
        margin-right: 1rem;
      }
      width: 100%;
      justify-content: flex-end;
    }
  }
`;

export type OrderListItemProps = {
  item: OrderItem;
  className?: string;
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
      newItem.quantity -= 1;
      dispatch(updateOrderItem(newItem));
    }
    if (item.quantity === 1) {
      dispatch(removeFromOrder(item._id));
    }
  };

  const handleRemove = () => dispatch(removeFromOrder(item._id));

  return (
    <StyledListItem theme={theme}>
      <ButtonWithInputMobile
        value={item.quantity}
        onClick={handleRemove}
        onIncrement={handleOnIncrement}
        onDecrement={handleOnDecrement}
        withRemove={true}
      />
      <QuantityDiv className={'quantity-container'}>
        <Typography variant='price-tag' color='light'>
          {item.quantity} X
        </Typography>
      </QuantityDiv>
      <QuantityChangeButton onIncrement={handleOnIncrement} onDecrement={handleOnDecrement} />
      <img
        src={require(`assets/image/pizza-${item.item._id}.svg`)}
        height={'75px'}
        className={'pizza-img'}
        alt={`Picture of ${item.item.name} pizza`}
      />
      <DescriptionDiv className={'description'}>
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
