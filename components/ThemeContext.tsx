import React, { createContext, ReactNode, useState } from "react";

type theme = "light" | "dark";

const themes = {
  dark: {
    background: "black",
    color: "white",
  },
  light: {
    background: "white",
    color: "black",
  },
};

export const ThemeContext = createContext({
  theme: "light" as theme,
  toggleTheme: () => {},
});

function ThemeContextWrapper({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<theme>("light");
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () =>
          setTheme((theme) => (theme === "dark" ? "light" : "dark")),
      }}>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          ...themes[theme],
        }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeContextWrapper;
