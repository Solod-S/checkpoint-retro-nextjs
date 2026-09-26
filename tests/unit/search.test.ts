import { describe, expect, it } from "vitest";
import { FallbackSearchProvider } from "@/lib/search/provider";
import { PostKind } from "@/lib/search/types";

describe("SearchProvider Relevance & Scoring", () => {
  const provider = new FallbackSearchProvider();

  it("finds materials across locales and scores exact matches highest", async () => {
    const result = await provider.search({
      query: "Dreamcast",
      locale: "ru",
    });

    expect(result.hits.length).toBeGreaterThan(0);
    expect(result.hits[0]?.title.toLowerCase()).toContain("dreamcast");
    expect(result.hits[0]?.score).toBeGreaterThan(50);
  });

  it("filters search results by content kind", async () => {
    const newsOnly = await provider.search({
      query: "",
      locale: "ru",
      kind: PostKind.NEWS,
    });

    expect(newsOnly.hits.length).toBeGreaterThan(0);
    expect(newsOnly.hits.every((h) => h.kind === "NEWS")).toBe(true);

    const articlesOnly = await provider.search({
      query: "",
      locale: "ru",
      kind: PostKind.ARTICLE,
    });

    expect(articlesOnly.hits.length).toBeGreaterThan(0);
    expect(articlesOnly.hits.every((h) => h.kind === "ARTICLE")).toBe(true);
  });

  it("filters search results by platform", async () => {
    const nintendoResults = await provider.search({
      query: "",
      locale: "ru",
      platform: "nintendo",
    });

    expect(nintendoResults.hits.length).toBeGreaterThan(0);
    expect(
      nintendoResults.hits.every((h) => h.platform?.key === "nintendo")
    ).toBe(true);
  });

  it("paginates results accurately with page and pageSize", async () => {
    const page1 = await provider.search({
      query: "",
      locale: "ru",
      page: 1,
      pageSize: 2,
    });

    expect(page1.hits.length).toBe(2);
    expect(page1.page).toBe(1);
    expect(page1.totalPages).toBeGreaterThan(1);

    const page2 = await provider.search({
      query: "",
      locale: "ru",
      page: 2,
      pageSize: 2,
    });

    expect(page2.hits.length).toBe(2);
    expect(page2.page).toBe(2);
    expect(page2.hits[0]?.id).not.toBe(page1.hits[0]?.id);
  });

  it("handles empty results gracefully when query has zero matches", async () => {
    const result = await provider.search({
      query: "xyz999nonexistentgamequery",
      locale: "ru",
    });

    expect(result.hits.length).toBe(0);
    expect(result.total).toBe(0);
    expect(result.totalPages).toBe(1);
  });
});
