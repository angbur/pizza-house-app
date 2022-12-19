import { createGlobalStyle } from 'styled-components';
import { getInitialTheme } from './components/Theme/initialTheme';
import KleponIjoFont from './assets/fonts/KleponIjo.ttf';
import SourceSansProLight from './assets/fonts/SourceSansPro-Light.ttf';
import SourceSansProRegular from './assets/fonts/SourceSansPro-Regular.ttf';
import SourceSansProSemiBold from './assets/fonts/SourceSansPro-SemiBold.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Klepon Ijo';
        font-style: normal;
        font-weight: 400;
        format('truetype');
        format('opentype');
        src:  local('Klepon Ijo'), url(${KleponIjoFont}) format('ttf'),
    }
    @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 300;
        format('truetype');
        format('opentype');
        src: local('Source Sans Pro Light'), url(${SourceSansProLight}) format('ttf'),
    }
    @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 400;
        format('truetype');
        format('opentype');
        src: local('Source Sans Pro Regular'), url(${SourceSansProRegular}) format('ttf'),
    }
    @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 600;
        format('truetype');
        format('opentype');
        src: local('Source Sans Pro SemiBold'), url(${SourceSansProSemiBold}) format('ttf'),
    }
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
        font-family: 'Source Sans Pro Regular', sans-serif;;
    }
    #root {
        display: block;
    }
    main {
        display: block;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    a {
    cursor: pointer;
    }`;

export default GlobalStyle;
