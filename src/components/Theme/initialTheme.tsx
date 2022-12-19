import { Theme } from './theme.types';

const initialTheme: Theme = {
  palette: {
    primary: '#EB853E',
    primaryDark: '#E47120',
    contrastColor: '#FCFBFB',
    secondary: '#151515',
    tertiary: '#4A4747',
    light: '#FCFBFB',
  },
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: '400',
      lineHeight: '1.6',
    },
    h2: {
      fontFamily: 'Source Sans Pro Light',
      fontWeight: '300',
      lineHeight: '1.3',
      letterSpacing: '1px',
      fontSize: '2.25rem',
    },

  }
};

export const getInitialTheme = (): Theme => {
  return initialTheme;
};
