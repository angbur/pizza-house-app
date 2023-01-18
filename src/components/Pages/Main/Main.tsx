import Card from 'components/Organisms/Card/Card';
import SortingPanel from 'components/Molecules/SortingPanel/SortingPanel';
import { useState } from 'react';
import styled from 'styled-components';
import { Pizza } from 'types/Pizza';
import { SortParams, useSortedPizzaList } from '../../Molecules/SortingPanel/useSortedPizzaList';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;
  margin-bottom: 8rem;
`;

const MenuContainer = styled.div`
  display: grid;
  width: 84vw;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  @media (max-width: 466px) {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
`;

const Main = () => {
  const [sortParam, setSortParam] = useState<SortParams>('name');
  const data: Pizza[] = useSortedPizzaList(sortParam);

  const handleClick = (param: SortParams) => {
    setSortParam(param);
  };

  return (
    <Box className='box'>
      <main>
        <SortingPanel onClick={handleClick} />
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
