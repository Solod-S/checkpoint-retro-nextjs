import { describe, expect, it } from "vitest";

function getPaginationRange(currentPage: number, totalPages: number) {
  const pages: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return {
    pages,
    hasPrev: currentPage > 1,
    hasNext: currentPage < totalPages,
  };
}

describe("getPaginationRange", () => {
  it("calculates page range and prev/next flags on first page", () => {
    const result = getPaginationRange(1, 5);
    expect(result.pages).toEqual([1, 2, 3, 4, 5]);
    expect(result.hasPrev).toBe(false);
    expect(result.hasNext).toBe(true);
  });

  it("calculates page range and prev/next flags on middle page", () => {
    const result = getPaginationRange(3, 5);
    expect(result.hasPrev).toBe(true);
    expect(result.hasNext).toBe(true);
  });

  it("calculates page range and prev/next flags on last page", () => {
    const result = getPaginationRange(5, 5);
    expect(result.hasPrev).toBe(true);
    expect(result.hasNext).toBe(false);
  });
});
