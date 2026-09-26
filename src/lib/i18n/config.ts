export const locales = ["ru", "uk", "en"] as const;
export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = "ru";

export function isLocale(value: string): value is AppLocale {
  return locales.includes(value as AppLocale);
}

export function toPrismaLocale(locale: AppLocale): "RU" | "UK" | "EN" {
  switch (locale) {
    case "ru":
      return "RU";
    case "uk":
      return "UK";
    case "en":
      return "EN";
  }
}

export function fromPrismaLocale(locale: "RU" | "UK" | "EN"): AppLocale {
  switch (locale) {
    case "RU":
      return "ru";
    case "UK":
      return "uk";
    case "EN":
      return "en";
  }
}

