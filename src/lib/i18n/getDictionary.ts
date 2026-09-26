import type { AppLocale } from "./config";

const dictionaries = {
  ru: () => import("../../../messages/ru.json").then((m) => m.default),
  uk: () => import("../../../messages/uk.json").then((m) => m.default),
  en: () => import("../../../messages/en.json").then((m) => m.default),
};

export async function getDictionary(locale: AppLocale) {
  return dictionaries[locale]();
}
