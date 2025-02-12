import React, { createContext, useContext, useState } from 'react';
import themes from './theme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.greenLight); 

  const switchTheme = (themeName) => {
    setTheme(themes[themeName] || themes.greenLight);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
