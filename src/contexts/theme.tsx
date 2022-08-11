import React, { createContext, useCallback, useContext, useState } from "react";

export type Themes = "dark" | "light";

type ThemeContextData = {
  currentTheme: Themes;
  handleChangeTheme: () => void;
};

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState<Themes>("dark");

  const handleChangeTheme = useCallback(() => {
    setSelectedTheme(selectedTheme === "light" ? "dark" : "light");
  }, [selectedTheme]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: selectedTheme,
        handleChangeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  return context;
}
