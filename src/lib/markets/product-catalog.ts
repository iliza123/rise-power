import type { MarketProductSlug } from "./types";

export type MarketProductCatalogEntry = {
  name: string;
  shortName: string;
  href: `/products#${MarketProductSlug}`;
  imageSrc: string;
  imageAlt: string;
};

export const MARKET_PRODUCT_CATALOG: Record<
  MarketProductSlug,
  MarketProductCatalogEntry
> = {
  sentinel: {
    name: "Rise Sentinel™",
    shortName: "Sentinel",
    href: "/products#sentinel",
    imageSrc: "/media/use-cases/uc-product-sentinel.png",
    imageAlt: "Rise Sentinel portable hydrogen power system",
  },
  falcon: {
    name: "Rise Falcon™",
    shortName: "Falcon",
    href: "/products#falcon",
    imageSrc: "/media/use-cases/uc-product-falcon.png",
    imageAlt: "Rise Falcon hydrogen drone range extender",
  },
  titan: {
    name: "Rise Titan™",
    shortName: "Titan",
    href: "/products#titan",
    imageSrc: "/media/use-cases/uc-product-titan.png",
    imageAlt: "Rise Titan portable hydrogen generator",
  },
};
