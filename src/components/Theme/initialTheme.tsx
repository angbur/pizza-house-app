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
};

export const getInitialTheme = (): Theme => {
  return initialTheme;
};
