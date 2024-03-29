import PriceTag from 'components/Atoms/PriceTag/PriceTag';
import Typography from 'components/Atoms/Typography/Typography';
import ButtonWithInput from 'components/Molecules/ButtonWithInput/ButtonWithInput';
import ButtonWithInputMobile from 'components/Molecules/ButtonWithInputMobile/ButtonWithInputMobile';
import { addToOrder, removeFromOrder } from 'components/Pages/Order/orderSlice';
import { ThemeContext } from 'components/Theme/ThemeContext';
import { useAppDispatch } from 'hooks';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { Pizza } from 'types/Pizza';

type CardProps = {
  pizza: Pizza;
};

const PizzaCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  text-align: center;
  padding: 1rem 1.4rem;
  border-radius: 8px;
  height: 540px;
  width: 360px;
  gap: 0.8rem;
  border: 2px solid ${(props) => props.theme.palette.secondary};
  &:hover {
    border-color: ${(props) => props.theme.palette.light};
  }
  & > img.pizza-img {
    margin: 1rem;
  }
  @media (max-width: 390px) {
    width: auto;
    height: auto;
    & img.pizza-img {
      max-width: 200px;
      padding: 1rem;
    }
    & h4 {
      padding: 1rem;
    }
  }
`;

const CardContent = styled.div`
  height: 80px;
  padding: 0 0.6rem;
  & > h4 span {
    text-transform: capitalize;
  }
`;

const CardActions = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.3rem;
  justify-content: space-between;
  align-items: end;
`;

const Card = ({ pizza }: CardProps) => {
  const theme = useContext(ThemeContext);
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();

  const addQuantity = () =>
    quantity > 0 && quantity < 20 ? setQuantity((prev) => prev + 1) : null;
  const substractQuantity = () =>
    quantity > 1 && quantity < 21 ? setQuantity((prev) => prev - 1) : null;
  const handleAddToOrder = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { categories, ...rest } = pizza;
    dispatch(addToOrder({ item: rest, quantity: quantity }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (parseInt(event.target.value) > 20) {
      setQuantity(20);
      toast.error('You can order up to 20');
    } else if (parseInt(event.target.value) < 1) {
      setQuantity(1);
    } else {
      setQuantity(parseInt(event.target.value));
    }
  };

  const handleRemove = () => dispatch(removeFromOrder(pizza._id));

  return (
    <PizzaCard theme={theme}>
      <img
        src={require(`assets/image/pizza-${pizza._id}.svg`)}
        height={'192px'}
        alt={`Picture of ${pizza.name} pizza`}
        className={'pizza-img'}
      />
      <PriceTag price={pizza.price} />
      <Typography
        variant='card-title'
        color={'light'}
        style={{ ...{ textTransform: 'uppercase' } }}
      >
        {pizza.name}
      </Typography>
      <CardContent>
        <Typography variant='card-subtitle' color={'light'}>
          {pizza.ingredients.map((i, id) =>
            id != pizza.ingredients.length - 1 ? (
              <span key={`ingredients-${i}`}> {i}, </span>
            ) : (
              <span key={`ingredients-${i}`}> {i}</span>
            ),
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonWithInput
          value={quantity}
          onIncrement={addQuantity}
          onDecrement={substractQuantity}
          onClick={handleAddToOrder}
          onChange={handleChange}
        />
        <ButtonWithInputMobile
          value={quantity}
          onClick={handleRemove}
          onIncrement={addQuantity}
          onDecrement={substractQuantity}
          withRemove={false}
        />
        <PriceTag price={pizza.price * quantity} size='sm' />
      </CardActions>
    </PizzaCard>
  );
};

export default Card;
