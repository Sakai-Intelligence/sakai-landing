
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Locale } from "./useTranslation";

interface LocaleContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);


const AVAILABLE_LOCALES: Locale[] = ["en", "ca", "es"];
const STORAGE_KEY = "sakai-landing-locale";

function getInitialLocale(): Locale {
  // 1. If stored, use it
  const stored = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
  if (stored && AVAILABLE_LOCALES.includes(stored as Locale)) {
    return stored as Locale;
  }
  // 2. Try to match browser locales
  if (typeof window !== 'undefined' && navigator.languages) {
    var browserLocales = navigator.languages.map(l => l.split('-')[0].toLowerCase());
    var intersection = browserLocales.filter(l => AVAILABLE_LOCALES.includes(l));
    if (intersection.length > 0) return intersection[0];
  }
  // 3. Fallback to English
  return "en";
}

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale());

  // setLocale wrapper to persist (only called when user manually changes locale)
  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, l);
    }
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}
