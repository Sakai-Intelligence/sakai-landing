
import en from './en.json';
import ca from './ca.json';
import es from './es.json';

export type Locale = 'en' | 'ca' | 'es';

const translations: Record<Locale, Record<string, string>> = { en, ca, es };

export function t(key: string, locale: Locale = 'en'): string {
  return translations[locale][key] || key;
}

export function useTranslation(locale: Locale = 'en') {
  return {
    t: (key: string) => t(key, locale),
    locale,
  };
}
