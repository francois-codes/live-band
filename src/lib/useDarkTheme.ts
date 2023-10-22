import { useEffect, useState } from "react";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.localStorage.theme ??
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export const useDarkTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light">(getInitialTheme());

  useEffect(() => {
    if (
      window.localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.theme = theme;
  }, [theme]);

  return {
    theme,
    toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
    removeLocalPreference: () => localStorage.removeItem("theme")
  };
};
