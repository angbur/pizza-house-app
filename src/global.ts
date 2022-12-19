import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { getInitialTheme } from './components/Theme/initialTheme';

const GlobalStyle = createGlobalStyle`
${normalize()}
    html {
        box-sizing: border-box;
        font-size: 16px;
    }
    body {
        margin: 0;
        padding: 0;
        outline: 0;
        background: ${getInitialTheme().palette.secondary};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    main {
        width: 90%;
        margin: 0 auto;
    }
   *, *:before, *:after {
    box-sizing: inherit;
    }
    a {
    cursor: pointer;
    }`;

export default GlobalStyle;
