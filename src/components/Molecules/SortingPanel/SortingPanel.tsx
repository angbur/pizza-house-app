import Button from 'components/Atoms/Button/Button';
import Icon from 'components/Atoms/Icon/Icon';
import Typography from 'components/Atoms/Typography/Typography';
import styled from 'styled-components';
import { SortParams } from './useSortedPizzaList';

const Panel = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 2.5rem 0;
  @media (max-width: 520px) {
    gap: 1rem;
    & h5 {
      font-size: 0.625rem;
    }
  }
  @media (max-width: 466px) {
    display: none;
  }
`;

type SortingPanelProps = {
  onClick(param: SortParams): void;
};

const SortingPanel = ({ onClick }: SortingPanelProps) => {
  return (
    <Panel>
      <Typography variant='item-title' color='light' style={{ ...{ textTransform: 'uppercase' } }}>
        Sort by
      </Typography>
      <Button variant='button-text-light' name={'name'} onClick={() => onClick('name')}>
        <Typography variant='item-title' color='primary'>
          name
        </Typography>
      </Button>
      <Button variant='button-text-light' name={'price asc'} onClick={() => onClick('price asc')}>
        <Typography variant='item-title' color='light'>
          price {Icon({ name: 'arrow-down', size: 8, isActive: false })}
        </Typography>
      </Button>
      <Button variant='button-text-light' name={'price desc'} onClick={() => onClick('price desc')}>
        <Typography variant='item-title' color='light'>
          price {Icon({ name: 'arrow-up', size: 8, isActive: false })}
        </Typography>
      </Button>
    </Panel>
  );
};

export default SortingPanel;
