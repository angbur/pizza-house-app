import ListIconItem from 'components/Molecules/ListIconItem/ListIconItem';
import { ThemeContext } from 'components/Theme/ThemeContext';
import { useContext } from 'react';
import styled from 'styled-components';

const SidebarNav = styled.div`
  width: 114px;
  position: sticky;
  border-right: 1px solid ${(props) => props.theme.palette.light};
`;

const Sidebar = () => {
  const theme = useContext(ThemeContext);
  return (
    <nav>
      <SidebarNav className={'sidebar'} theme={theme}>
        <ul>
          <ListIconItem icon={{ name: 'menu', size: 32 }} label={'menu'} isActive={false} />
          <ListIconItem
            icon={{ name: 'pizza-circle', size: 32 }}
            label={'make pizza'}
            isActive={false}
          />
          <ListIconItem icon={{ name: 'order', size: 26 }} label={'order'} isActive={false} />
          <ListIconItem icon={{ name: 'list-icon', size: 20 }} label={'history'} isActive={false} />
          <ListIconItem icon={{ name: 'email', size: 20 }} label={'contact'} isActive={false} />
        </ul>
      </SidebarNav>
    </nav>
  );
};

export default Sidebar;
