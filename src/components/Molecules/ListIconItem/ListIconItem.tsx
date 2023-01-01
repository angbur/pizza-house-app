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
  isActive: boolean;
  style?: CSSProperties;
};

const IconItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 1.25rem 0;
  cursor: pointer;
`;

const ListIconItem = ({
  label,
  icon,
  style,
  isActive = false,
}: PropsWithChildren<ListIconItemProps>) => (
  <li>
    <IconItemBox>
      {Icon({ ...icon, isActive })}
      <Typography
        variant={'item-title'}
        color='light'
        style={{ ...{ textTransform: 'uppercase' }, ...style }}
      >
        {label}
      </Typography>
    </IconItemBox>
  </li>
);

export default ListIconItem;
