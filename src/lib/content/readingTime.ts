/**
 * Utility to calculate estimated reading time based on word count.
 * Average reading speed: ~180-200 words per minute across Cyrillic and Latin scripts.
 */

export function calculateReadingTime(content: unknown, wordsPerMinute = 180): number {
  if (!content) return 1;

  let text = "";

  if (typeof content === "string") {
    text = content;
  } else if (Array.isArray(content)) {
    text = content
      .map((item) => {
        if (typeof item === "string") return item;
        if (item && typeof item === "object") {
          const parts: string[] = [];
          if ("title" in item && typeof (item as { title: unknown }).title === "string") {
            parts.push((item as { title: string }).title);
          }
          if ("paragraphs" in item && Array.isArray((item as { paragraphs: unknown }).paragraphs)) {
            parts.push(...(item as { paragraphs: string[] }).paragraphs.filter((p) => typeof p === "string"));
          }
          if ("body" in item && Array.isArray((item as { body: unknown }).body)) {
            parts.push(...(item as { body: string[] }).body.filter((p) => typeof p === "string"));
          }
          if ("excerpt" in item && typeof (item as { excerpt: unknown }).excerpt === "string") {
            parts.push((item as { excerpt: string }).excerpt);
          }
          if ("quote" in item && item.quote && typeof (item.quote as { text?: unknown }).text === "string") {
            parts.push((item.quote as { text: string }).text);
          }
          return parts.join(" ");
        }
        return "";
      })
      .join(" ");
  }

  // Strip HTML / Markdown tags if present
  const cleanText = text
    .replace(/<[^>]*>/g, " ")
    .replace(/[#*_`~[\]()]/g, " ")
    .trim();

  if (!cleanText) return 1;

  // Split into words, supporting alphanumeric characters from all Unicode scripts
  const words = cleanText.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  return Math.max(1, minutes);
}
