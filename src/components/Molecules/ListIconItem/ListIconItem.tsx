import Icon, { IconName } from 'components/Atoms/Icon/Icon';
import { CSSProperties } from 'react';
import styled from 'styled-components';
import Typography from '../../Atoms/Typography/Typography';

export type ListIconItemProps = {
  label: string;
  icon: {
    name: IconName;
    size: number;
  };
  style?: CSSProperties;
};

const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const ListIconItem = ({ label, icon, style }: ListIconItemProps) => (
  <IconItem>
    <Icon name={icon.name} size={icon.size} />
    <Typography variant={'item-title'} color='light' style={{...{textTransform: 'uppercase'}, ...style}}>
      {label}
    </Typography>
  </IconItem>
);

export default ListIconItem;
