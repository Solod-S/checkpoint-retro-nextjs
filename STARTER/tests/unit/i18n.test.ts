import { describe, expect, it } from "vitest";
import { isLocale } from "@/lib/i18n/config";

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
