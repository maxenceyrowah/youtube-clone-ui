import { useEffect, useState } from "react";

type ThemeState = "dark" | "light";

function useDarkMode(): [ThemeState, React.Dispatch<React.SetStateAction<ThemeState>>] {
  const [theme, setTheme] = useState<ThemeState>("light");

  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}

export default useDarkMode;
