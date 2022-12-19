import { getInitialTheme } from './../../Theme/initialTheme';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
    height: 200px;
    background: ${getInitialTheme().palette.primary};
`;