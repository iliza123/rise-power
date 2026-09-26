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

export type MarketLayout = "defense" | "commercial" | "consumer";

export type MarketDetailPage = {
  slug: string;
  id: string;
  label: string;
  /** Drives distinct page composition in MarketDetail layouts. */
  layout: MarketLayout;
  title: string;
  eyebrow: string;
  heading: string;
  body: string;
  heroBody: string;
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
  cta: MarketCta;
  stats: readonly MarketStat[];
  callouts: readonly MarketCallout[];
  galleryHeading: { before: string; accent: string };
  metaTitle: string;
  metaDescription: string;
};
