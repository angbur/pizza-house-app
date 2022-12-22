import { getInitialTheme } from './../../Theme/initialTheme';
import styled from 'styled-components';

export const SidebarNav = styled.div`
  width: 114px;
  height: 100vh;
  position: sticky;
  border-right: 1px solid ${getInitialTheme().palette.light};
`;
