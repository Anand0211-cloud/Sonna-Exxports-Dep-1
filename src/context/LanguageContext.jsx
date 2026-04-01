import React, { createContext, useContext, useState, useCallback } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

const LANGUAGES = [
  { code: 'en', iso: 'gb', label: 'English' },
  { code: 'fr', iso: 'fr', label: 'Français' },
  { code: 'tw', iso: 'gh', label: 'Twi (Akan)' },
  { code: 'sw', iso: 'ke', label: 'Kiswahili' },
  { code: 'ha', iso: 'ng', label: 'Hausa' },
];

const getFlagUrl = (iso) => `https://flagcdn.com/w40/${iso}.png`;

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    try {
      return localStorage.getItem('sonna-lang') || 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = useCallback((lang) => {
    setLanguageState(lang);
    try { localStorage.setItem('sonna-lang', lang); } catch {}
  }, []);

  const t = useCallback((key) => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[language] || entry['en'] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, LANGUAGES, getFlagUrl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

export { LANGUAGES, getFlagUrl };
