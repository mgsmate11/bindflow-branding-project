import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Lang = 'hu' | 'en';

const STORAGE_KEY = 'bindflow-lang';

const getInitialLang = (): Lang => {
  if (typeof window === 'undefined') return 'hu';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'en' || stored === 'hu' ? stored : 'hu';
};

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (hu: string, en: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: 'hu',
  setLang: () => {},
  t: (hu) => hu,
});

export const useLang = () => useContext(LangContext);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(getInitialLang);
  const t = (hu: string, en: string) => (lang === 'hu' ? hu : en);

  // Persist the choice and keep <html lang> in sync (SEO + accessibility).
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};
