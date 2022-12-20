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
    mainTitle: {
      fontFamily: 'Klepon Ijo',
      fontSize: '3rem',
      fontWeight: '400',
      lineHeight: '1.6',
      letterSpacing: '1px',
    },
    sectionTitle: {
      fontFamily: 'Source Sans Pro',
      fontWeight: '300',
      lineHeight: '1.3',
      letterSpacing: '1px',
      fontSize: '2.25rem',
    },
    cardTitle: {
      fontFamily: 'Klepon Ijo',
      lineHeight: '1.2',
      letterSpacing: '2px',
      fontSize: '2rem',
      fontWeight: '400',
    },
    itemTitle: {
      fontFamily: 'Source Sans Pro',
      fontWeight: '600',
      fontSize: '1rem',
      lineHeight: '1.4',
      letterSpacing: '0',
    },
    paragraph: {
      fontFamily: 'Source Sans Pro',
      fontWeight: '400',
      fontSize: '1rem',
      lineHeight: '1.6',
      letterSpacing: '0',
    },
    caption: {
      fontFamily: 'Source Sans Pro',
      fontWeight: '400',
      fontSize: '0.75rem',
      lineHeight: '1.6',
      letterSpacing: '0',
    }
  },
};

export const getInitialTheme = (): Theme => {
  return initialTheme;
};
