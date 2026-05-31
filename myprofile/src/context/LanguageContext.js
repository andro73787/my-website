import { createContext, useContext, useState } from 'react';
import content from '../data/content';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const toggleLang = () => setLang(l => (l === 'en' ? 'ja' : 'en'));
  return (
    <LanguageContext.Provider value={{ lang, t: content[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
