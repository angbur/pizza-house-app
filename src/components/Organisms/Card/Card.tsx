import PriceTag from 'components/Atoms/PriceTag/PriceTag';
import Typography from 'components/Atoms/Typography/Typography';
import ButtonWithInput from 'components/Molecules/ButtonWithInput/ButtonWithInput';
import { addToOrder } from 'components/Pages/Order/orderSlice';
import { ThemeContext } from 'components/Theme/ThemeContext';
import { useAppDispatch } from 'hooks';
import { useContext, useState } from 'react';
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
  & > img {
    margin: 1rem;
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

  const addQuantity = () => quantity > 0 && quantity < 20 ? setQuantity(prev=>prev+1) : null;
  const substractQuantity = () => quantity > 1 && quantity < 21 ? setQuantity(prev=>prev-1) : null;
  const handleAddToOrder = () => {
    const {categories, _id, ...rest} = pizza;
    dispatch(addToOrder({item: rest, quantity: quantity}));
  };

  return (
    <PizzaCard theme={theme}>
      <img
        src={require(`assets/image/pizza-${pizza._id}.svg`)}
        height={'192px'}
        alt={`Picture of ${pizza.name} pizza`}
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
        <ButtonWithInput value={quantity} onIncrement={addQuantity} onDecrement={substractQuantity} onClick={handleAddToOrder}/>
        <PriceTag price={pizza.price*quantity} size='sm' />
      </CardActions>
    </PizzaCard>
  );
};

export default Card;
