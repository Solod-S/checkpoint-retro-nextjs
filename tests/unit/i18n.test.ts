import { describe, expect, it } from "vitest";
import { fromPrismaLocale, isLocale, toPrismaLocale } from "@/lib/i18n/config";
import { Locale } from "@prisma/client";

describe("isLocale", () => {
  it("accepts supported locales", () => {
    expect(isLocale("ru")).toBe(true);
    expect(isLocale("uk")).toBe(true);
    expect(isLocale("en")).toBe(true);
  });

  it("rejects unsupported locales", () => {
    expect(isLocale("de")).toBe(false);
  });
});

describe("prisma locale mapping", () => {
  it("converts AppLocale to Prisma Locale", () => {
    expect(toPrismaLocale("ru")).toBe(Locale.RU);
    expect(toPrismaLocale("uk")).toBe(Locale.UK);
    expect(toPrismaLocale("en")).toBe(Locale.EN);
  });

  it("converts Prisma Locale to AppLocale", () => {
    expect(fromPrismaLocale(Locale.RU)).toBe("ru");
    expect(fromPrismaLocale(Locale.UK)).toBe("uk");
    expect(fromPrismaLocale(Locale.EN)).toBe("en");
  });
});
