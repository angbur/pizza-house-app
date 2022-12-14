import { Theme } from './theme.types';

const initialTheme: Theme = {
  palette: {
    primary: {
      main: '#EB853E',
      dark: '#E47120',
      contrastColor: '#FCFBFB',
    },
    secondary: {
      main: '#151515',
      light: '#4A4747',
    },
    tertiary: '#FCFBFB',
  },
};

export const getInitialTheme = (): Theme => {
  return initialTheme;
};
