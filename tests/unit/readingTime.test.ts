import { describe, expect, it } from "vitest";
import { calculateReadingTime } from "@/lib/content/readingTime";

describe("calculateReadingTime", () => {
  it("returns at least 1 minute for empty or short text", () => {
    expect(calculateReadingTime("")).toBe(1);
    expect(calculateReadingTime(undefined)).toBe(1);
    expect(calculateReadingTime("Short snippet.")).toBe(1);
  });

  it("calculates reading time for single long string correctly", () => {
    // 360 words should be 2 minutes at 180 wpm
    const text = Array(360).fill("word").join(" ");
    expect(calculateReadingTime(text)).toBe(2);

    // 540 words should be 3 minutes
    const longerText = Array(540).fill("слова").join(" ");
    expect(calculateReadingTime(longerText)).toBe(3);
  });

  it("calculates reading time for array of sections with paragraphs and quotes", () => {
    const sections = [
      {
        title: "Section 1",
        paragraphs: [Array(180).fill("retro").join(" ")],
        quote: { text: Array(90).fill("quote").join(" "), author: "Author" },
      },
      {
        title: "Section 2",
        paragraphs: [Array(180).fill("gaming").join(" ")],
      },
    ];

    // Total words: ~450 words -> ceil(450 / 180) = 3 minutes
    expect(calculateReadingTime(sections)).toBe(3);
  });

  it("calculates reading time for news body array of paragraphs", () => {
    const paragraphs = [
      Array(100).fill("новость").join(" "),
      Array(90).fill("игры").join(" "),
    ];
    // 190 words -> 2 minutes
    expect(calculateReadingTime(paragraphs)).toBe(2);
  });
});
