import React, { createContext, useState } from "react";
import { Theme1, Theme2, Theme3 } from "../components/variables";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(Theme1);

  const toggleTheme = (dotPosition) => {
    if (dotPosition === 1) {
      setTheme(Theme2);
    } else if (dotPosition === 2) {
      setTheme(Theme3);
    } else {
      setTheme(Theme1);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
