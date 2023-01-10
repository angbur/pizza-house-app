import Card from 'components/Organisms/Card/Card';
import styled from 'styled-components';
import { Pizza } from 'types/Pizza';
import { useSortedPizzaList } from './sortByName';

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
  const data: Pizza[] = useSortedPizzaList();

  return (
    <Box className='box'>
      <main>
        <MenuContainer>
          {data.map((el) => (
            <Card key={`pizza-${el._id}`} pizza={el} />
          ))}
        </MenuContainer>
      </main>
    </Box>
  );
};
export default Main;
