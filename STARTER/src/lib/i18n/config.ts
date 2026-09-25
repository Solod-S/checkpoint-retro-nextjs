export const locales = ["ru", "uk", "en"] as const;
export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = "ru";

export function isLocale(value: string): value is AppLocale {
  return locales.includes(value as AppLocale);
}
