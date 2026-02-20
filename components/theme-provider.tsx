"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { appThemes, getTheme, type ThemeId } from "@/lib/themes";

interface ThemeContextValue {
  activeTheme: ThemeId;
  setTheme: (id: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  activeTheme: "midnight",
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [activeTheme, setActiveTheme] = useState<ThemeId>("midnight");

  function setTheme(id: ThemeId) {
    setActiveTheme(id);
    const theme = getTheme(id);
    const root = document.documentElement;
    Object.entries(theme.cssVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return <ThemeContext.Provider value={{ activeTheme, setTheme }}>{children}</ThemeContext.Provider>;
}

export { appThemes };
