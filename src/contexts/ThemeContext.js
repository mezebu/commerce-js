import React, { createContext, useState } from "react";
import { useContext } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

const useThemeContext = () => {
  return useContext(ThemeContext);
};

const useThemeUpdateContext = () => {
  return useContext(ThemeUpdateContext);
};

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const themeHandler = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={themeHandler}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useThemeContext, useThemeUpdateContext };
