import { describe, expect, it } from "vitest";

function getPlatformClassKey(platform: string): string {
  const norm = platform.toLowerCase();
  if (norm.includes("nintendo")) return "nintendo";
  if (norm.includes("playstation") || norm === "ps") return "playstation";
  if (norm.includes("sega")) return "sega";
  if (norm.includes("pc")) return "pc";
  if (norm.includes("аркад") || norm.includes("arcade")) return "arcade";
  if (norm.includes("dreamcast")) return "dreamcast";
  return "default";
}

describe("getPlatformClassKey", () => {
  it("maps recognized platforms to correct style keys", () => {
    expect(getPlatformClassKey("Nintendo")).toBe("nintendo");
    expect(getPlatformClassKey("PLAYSTATION")).toBe("playstation");
    expect(getPlatformClassKey("PS")).toBe("playstation");
    expect(getPlatformClassKey("SEGA")).toBe("sega");
    expect(getPlatformClassKey("PC")).toBe("pc");
    expect(getPlatformClassKey("Аркады")).toBe("arcade");
    expect(getPlatformClassKey("Arcade")).toBe("arcade");
    expect(getPlatformClassKey("Dreamcast")).toBe("dreamcast");
  });

  it("falls back to default for unknown platforms", () => {
    expect(getPlatformClassKey("Unknown")).toBe("default");
  });
});
