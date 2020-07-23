import React, { createContext } from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { usePersistedState } from '../hooks';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

export const ThemeContext = createContext({ theme: dark, toggleTheme: null });

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = usePersistedState('@Auth:theme', dark);
  const toggleTheme = () => setTheme(theme === dark ? light : dark);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>
    </ThemeContext.Provider>
  );
}
