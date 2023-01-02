import Typography from 'components/Atoms/Typography/Typography';
import { ThemeContext } from 'components/Theme/ThemeContext';
import { useContext } from 'react';
import styled from 'styled-components';
import { Pizza } from 'types/Pizza';

type CardProps = {
  pizza?: Pizza;
};

const PizzaCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  padding: 1rem;
  border-radius: 8px;
  height: 540px;
  width: 360px;
  &:hover {
    border: 2px solid ${(props) => props.theme.palette.light};
  }
`;

const Card = ({ pizza }: CardProps) => {
  const theme = useContext(ThemeContext);
  return (
    <PizzaCard theme={theme}>
      <Typography
        variant='card-title'
        color={'light'}
        style={{ ...{ textTransform: 'uppercase' } }}
      >
        {pizza && pizza.name}
      </Typography>
      <Typography variant='card-subtitle' color={'light'}>
        {pizza && pizza.ingredients.toString()}
      </Typography>
    </PizzaCard>
  );
};

export default Card;
