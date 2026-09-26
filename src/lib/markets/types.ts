export type MarketMedia = {
  src: string;
  alt: string;
  mobileSrc?: string;
};

export type MarketStat = {
  value: string;
  label: string;
  body: string;
};

export type MarketCallout = {
  title: string;
  body: string;
};

export type MarketCta = {
  label: string;
  href: string;
};

export type MarketProduct = {
  name: string;
  tagline: string;
  body: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

/** Core systems shown in the per-market “how it’s used” section. */
export type MarketProductSlug = "sentinel" | "falcon" | "titan";

export type MarketProductUseEntry = {
  slug: MarketProductSlug;
  /** Short role in this market, e.g. "Forward node power" */
  role: string;
  /** How this product is used in this specific market. */
  body: string;
  /** Optional scene image for this market; falls back to catalog product shot. */
  imageSrc?: string;
};

export type MarketProductUsesSection = {
  eyebrow: string;
  headingBefore: string;
  headingAccent: string;
  intro: string;
  items: readonly [
    MarketProductUseEntry,
    MarketProductUseEntry,
    MarketProductUseEntry,
  ];
};

export type MarketSpotlight = {
  number: string;
  label: string;
  headingBefore: string;
  headingAccent: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  features: readonly string[];
  featuredProducts: readonly { label: string; href: string }[];
};

export type MarketLayout = "defense" | "commercial" | "consumer";

export type MarketDetailPage = {
  slug: string;
  id: string;
  label: string;
  /** Retained for data identity; all markets share one MarketLayout composition. */
  layout: MarketLayout;
  title: string;
  eyebrow: string;
  heading: string;
  body: string;
  heroBody: string;
  /** Cream overview section — market label + accented H2. */
  overview: {
    eyebrow: string;
    headingBefore: string;
    headingAccent: string;
  };
  href: string;
  images: {
    hero: MarketMedia;
    secondary: MarketMedia;
  };
  gallery: readonly MarketMedia[];
  applicationsIntro: string;
  applications: readonly string[];
  productsIntro: string;
  products: readonly MarketProduct[];
  /** Use-cases-style image + feature card block */
  spotlight: MarketSpotlight;
  /** How Sentinel, Falcon, and Titan are used in this market */
  productUses: MarketProductUsesSection;
  cta: MarketCta;
  stats: readonly MarketStat[];
  callouts: readonly MarketCallout[];
  galleryHeading: { before: string; accent: string };
  metaTitle: string;
  metaDescription: string;
};
