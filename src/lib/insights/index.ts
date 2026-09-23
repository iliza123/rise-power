import { insights } from "./articles";
import type { InsightArticle, InsightBlock, InsightListItem } from "./types";

export type { InsightArticle, InsightBlock, InsightListItem };
export { insights };

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insights.find((article) => article.slug === slug);
}

/**
 * Prefer relatedSlugs, then fill from insights — never reuse the same hero.src
 * as the current article or any already-selected related card.
 */
export function getRelatedInsights(
  article: InsightArticle,
  limit = 2,
): InsightArticle[] {
  const usedHeroes = new Set<string>([article.hero.src]);
  const selected: InsightArticle[] = [];
  const selectedSlugs = new Set<string>([article.slug]);

  for (const slug of article.relatedSlugs) {
    if (selected.length >= limit) break;
    const item = getInsightBySlug(slug);
    if (!item || selectedSlugs.has(item.slug)) continue;
    if (usedHeroes.has(item.hero.src)) continue;
    selected.push(item);
    selectedSlugs.add(item.slug);
    usedHeroes.add(item.hero.src);
  }

  if (selected.length < limit) {
    for (const item of insights) {
      if (selected.length >= limit) break;
      if (selectedSlugs.has(item.slug) || usedHeroes.has(item.hero.src)) continue;
      selected.push(item);
      selectedSlugs.add(item.slug);
      usedHeroes.add(item.hero.src);
    }
  }

  return selected;
}

/** Flatten block body to plain text for legacy consumers that expect a string. */
export function getInsightPlainBody(article: InsightArticle): string {
  return article.body
    .map((block) => blockToPlain(block))
    .filter(Boolean)
    .join("\n\n");
}

function blockToPlain(block: InsightBlock): string {
  switch (block.type) {
    case "paragraph":
    case "heading":
      return block.text;
    case "pullQuote":
      return block.attribution
        ? `"${block.text}" — ${block.attribution}`
        : `"${block.text}"`;
    case "takeaways":
      return block.items.map((item) => `• ${item}`).join("\n");
    case "figure":
      return block.caption ?? block.alt;
    default:
      return "";
  }
}

/** Lightweight list projection for index / featured cards. */
export function toInsightListItem(article: InsightArticle): InsightListItem {
  const {
    slug,
    title,
    date,
    displayDate,
    category,
    excerpt,
    readTime,
    hero,
    accentPhrase,
  } = article;
  return {
    slug,
    title,
    date,
    displayDate,
    category,
    excerpt,
    readTime,
    hero,
    accentPhrase,
  };
}
