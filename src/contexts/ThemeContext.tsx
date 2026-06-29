import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'bindflow-theme';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // A brand alapból világos; a prerender (SSG) és a kliens első renderje is 'light',
  // így nincs hidratációs eltérés. A mentett választást hidratálás után vesszük át.
  const [theme, setTheme] = useState<Theme>('light');
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  // Hidratálás után: vedd át a böngészőben mentett témát, ha van.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark') setTheme('dark');
  }, []);

  // Persist the choice and toggle the `dark` class on <html> for Tailwind's darkMode: 'class'.
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
