'use client'

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Language = 'en' | 'cz' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('cz');

  useEffect(() => {
    const storedLang = typeof window !== 'undefined' ? localStorage.getItem('zoen-lang') : null;
    if (storedLang === 'cz' || storedLang === 'en' || storedLang === 'ru') setLanguageState(storedLang as Language);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('zoen-lang', lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
} 