import React, { useEffect, useState } from "react";

export enum ETheme {
  light = "light",
  dark = "dark",
}

interface ITheme {
  theme: ETheme;
  toggleTheme: () => void;
  setTheme: (newTheme: ETheme) => void;
}

const ThemeContext = React.createContext<ITheme>({
  theme: ETheme.light,
  toggleTheme: () => {},
  setTheme: (newTheme: ETheme) => {},
});

interface IThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContextProvider: React.FunctionComponent<
  IThemeContextProviderProps
> = ({ children }) => {
  const [theme, setTheme] = useState<ETheme>(ETheme.light);

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === ETheme.light ? ETheme.dark : ETheme.light));
  }

  const themeValue: ITheme = {
    theme,
    toggleTheme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
