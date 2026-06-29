import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Lang = 'hu' | 'en';

const STORAGE_KEY = 'bindflow-lang';

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
  // A prerender (SSG) és a kliens első renderje is mindig 'hu' — így nincs
  // hidratációs eltérés. A mentett nyelvet hidratálás után vesszük át.
  const [lang, setLang] = useState<Lang>('hu');
  const t = (hu: string, en: string) => (lang === 'hu' ? hu : en);

  // Hidratálás után: vedd át a böngészőben mentett nyelvet, ha van.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'hu') setLang(stored);
  }, []);

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
