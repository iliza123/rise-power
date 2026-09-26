import { marketDetails } from "./details";
import type { MarketDetailPage } from "./types";

export type {
  MarketCallout,
  MarketCta,
  MarketDetailPage,
  MarketLayout,
  MarketMedia,
  MarketProduct,
  MarketProductSlug,
  MarketProductUseEntry,
  MarketProductUsesSection,
  MarketSpotlight,
  MarketStat,
} from "./types";
export { MARKET_PRODUCT_CATALOG } from "./product-catalog";
export type { MarketProductCatalogEntry } from "./product-catalog";
export { marketDetails } from "./details";

export function getMarketBySlug(
  slug: string,
): MarketDetailPage | undefined {
  return marketDetails.find((item) => item.slug === slug);
}

export function getRelatedMarkets(
  market: MarketDetailPage,
  limit = 2,
): MarketDetailPage[] {
  return marketDetails
    .filter((item) => item.slug !== market.slug)
    .slice(0, limit);
}

/** Static params for `app/markets/[slug]`. */
export function getMarketStaticParams(): { slug: string }[] {
  return marketDetails.map((item) => ({ slug: item.slug }));
}
