import Card from 'components/Organisms/Card/Card';
import { useGetPizzasListQuery } from 'services/pizza';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
`;

const MenuContainer = styled.div`
  display: grid;
  width: 84vw;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

const Main = () => {
  const { data, error, isLoading } = useGetPizzasListQuery();
  return (
    <Box className='box'>
    <main>
     
     <MenuContainer>
      {data?.pizzaList.map(el =>
            <Card key={`pizza-${el._id}`} pizza = {el}/>
            )}
     </MenuContainer>
       
    </main>
      </Box>
  );
};
export default Main;
