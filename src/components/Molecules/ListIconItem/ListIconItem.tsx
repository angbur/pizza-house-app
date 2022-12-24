import { CSSProperties, PropsWithChildren } from 'react';
import styled from 'styled-components';
import Typography from 'components/Atoms/Typography/Typography';
import Icon, { IconName } from 'components/Atoms/Icon/Icon';

export type ListIconItemProps = {
  label: string;
  icon: {
    name: IconName;
    size: number;
  };
  style?: CSSProperties;
};

const IconItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ListIconItem = ({ label, icon, style }: PropsWithChildren<ListIconItemProps>) => (
  <IconItemBox>
    {Icon(icon)}
    <Typography
      variant={'item-title'}
      color='light'
      style={{ ...{ textTransform: 'uppercase' }, ...style }}
    >
      {label}
    </Typography>
  </IconItemBox>
);

export default ListIconItem;
