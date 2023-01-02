import { CSSProperties, PropsWithChildren, useContext, useState } from 'react';
import styled from 'styled-components';
import Typography from 'components/Atoms/Typography/Typography';
import Icon, { IconName } from 'components/Atoms/Icon/Icon';
import { ThemeContext } from 'components/Theme/ThemeContext';
import { NavLink } from 'react-router-dom';

export type ListIconItemProps = {
  label: string;
  icon: {
    name: IconName;
    size: number;
  };
  linkTo: string;
  style?: CSSProperties;
};

type SidebarItemProps = {
  isActive: boolean;
};

const SidebarItem = styled.div<SidebarItemProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 1.25rem 0;
  cursor: pointer;
  background: ${(props) => (props.isActive ? props.theme.palette.light : 'none')};
  border-top: 1px solid ${(props) => props.theme.palette.secondary};
  border-bottom: 1px solid ${(props) => props.theme.palette.secondary};
  & > h5.item-title {
    color: ${(props) =>
      props.isActive ? props.theme.palette.secondary : props.theme.palette.light};
  }
  &:hover {
    background: ${(props) => props.theme.palette.light};
    & > h5.item-title {
      color: ${(props) => props.theme.palette.secondary};
    }
  }
`;

const ListIconItem = ({ label, icon, linkTo }: PropsWithChildren<ListIconItemProps>) => {
  const theme = useContext(ThemeContext);
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <li>
      <NavLink to={linkTo} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {({ isActive }) => (
          <SidebarItem theme={theme} isActive={isActive}>
            {Icon({ ...icon, isActive: isActive ? true : isHover })}
            <Typography variant={'item-title'} style={{ ...{ textTransform: 'uppercase' } }}>
              {label}
            </Typography>
          </SidebarItem>
        )}
      </NavLink>
    </li>
  );
};

export default ListIconItem;
