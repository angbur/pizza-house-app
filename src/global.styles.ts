import { createGlobalStyle } from 'styled-components';
import { getInitialTheme } from './components/Theme/initialTheme';

const GlobalStyle = createGlobalStyle`
    body, html, #root {
        box-sizing: border-box;
        font-size: 16px;
        box-sizing: border-box;
        height: 100%;
        margin: 0;
        padding: 0;
        outline: 0;
        background: ${getInitialTheme().palette.secondary};
        color: ${getInitialTheme().palette.light};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 400;
    }
    #root {
        display: block;
    }
    main {
        display: block;
    }
    *, *:before, *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    a {
    cursor: pointer;
    text-decoration: none;
    }`;

export default GlobalStyle;
