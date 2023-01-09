import ListIconItem from 'components/Molecules/ListIconItem/ListIconItem';
import { ThemeContext } from 'components/Theme/ThemeContext';
import { useContext } from 'react';
import styled from 'styled-components';

const SidebarNav = styled.div`
  width: 114px;
  position: sticky;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.palette.light};
  & > ul {
    list-style: none;
  }
`;

const Sidebar = () => {
  const theme = useContext(ThemeContext);
  return (
    <nav>
      <SidebarNav className={'sidebar'} theme={theme}>
        <ul>
          <ListIconItem icon={{ name: 'menu', size: 32 }} label={'menu'} linkTo={'/'} />
          <ListIconItem
            icon={{ name: 'pizza-circle', size: 32 }}
            label={'make pizza'}
            linkTo={'make-pizza'}
          />
          <ListIconItem icon={{ name: 'order', size: 26 }} label={'order'} linkTo={'order'} />
          <ListIconItem
            icon={{ name: 'list-icon', size: 20 }}
            label={'history'}
            linkTo={'history'}
          />
          <ListIconItem icon={{ name: 'email', size: 20 }} label={'contact'} linkTo={'contact'} />
        </ul>
      </SidebarNav>
    </nav>
  );
};

export default Sidebar;
