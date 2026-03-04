import React, { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'hu' | 'en';

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
  const [lang, setLang] = useState<Lang>('hu');
  const t = (hu: string, en: string) => (lang === 'hu' ? hu : en);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};
