import { createContext, PropsWithChildren } from 'react';
import { getInitialTheme } from './initialTheme';
import type { Theme } from './theme.types';

export const ThemeContext = createContext({} as Theme);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const theme = getInitialTheme();

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
