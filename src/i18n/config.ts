export const defaultLocale = 'en';
export const locales = ['en', 'sv'] as const;
export type ValidLocale = typeof locales[number];

export const languageNames: Record<ValidLocale, string> = {
  en: 'English',
  sv: 'Svenska',
}; 