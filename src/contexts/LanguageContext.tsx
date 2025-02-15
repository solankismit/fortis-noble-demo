import React, { createContext, useContext, useState, useCallback } from "react";
import { ValidLocale, defaultLocale, locales } from "@/i18n/config";
import enTranslations from "@/i18n/translations/en.json";
import svTranslations from "@/i18n/translations/sv.json";

type Translations = typeof enTranslations;

interface LanguageContextType {
  locale: ValidLocale;
  translations: Translations;
  setLanguage: (locale: ValidLocale) => void;
}

const translations: Record<ValidLocale, Translations> = {
  en: enTranslations,
  sv: svTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<ValidLocale>(defaultLocale);

  const setLanguage = useCallback((newLocale: ValidLocale) => {
    if (locales.includes(newLocale)) {
      setLocale(newLocale);
      document.documentElement.lang = newLocale;
      localStorage.setItem("preferred-locale", newLocale);
    }
  }, []);

  React.useEffect(() => {
    const savedLocale = localStorage.getItem("preferred-locale") as ValidLocale;
    if (savedLocale && locales.includes(savedLocale)) {
      setLanguage(savedLocale);
    }
  }, [setLanguage]);

  const value = {
    locale,
    translations: translations[locale],
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
