import type { Metadata } from "next";
import { site } from "@/lib/content";

export const siteTitle = "Rise Mission Power";

/** Primary meta description — leading keywords front-loaded for SERP relevance. */
export const siteDescription =
  "Portable hydrogen power and hydrogen fuel cell generators for military, commercial, and emergency backup. Zero-emission diesel generator alternative with plug-and-play hydrogen cartridges — engineered and manufactured in Canada.";

/**
 * Priority SEO keywords for Rise Mission Power.
 * Used in root metadata and page-level keyword tags.
 */
export const siteKeywords = [
  "portable hydrogen power",
  "portable hydrogen fuel cell generator",
  "hydrogen backup power",
  "military portable power",
  "tactical hydrogen generator",
  "hydrogen-powered drones",
  "UAV hydrogen fuel cell",
  "hydrogen range extender for drones",
  "hydrogen cartridge system",
  "plug-and-play hydrogen cartridge",
  "zero-emission generator",
  "diesel generator alternative",
  "clean power for remote locations",
  "portable power for construction sites",
  "clean emergency generator",
  "backup power",
  "backup power without diesel",
  "indoor safe backup power",
  "AI data center backup power",
  "engineering and manufacturing company",
  "prototype manufacturing services",
  "new product introduction manufacturing",
  "design for manufacturing services",
  "aerospace manufacturing Canada",
  "defence manufacturing Canada",
  "fuel cell component manufacturing",
  "hydrogen component manufacturing",
  "electrolyzer component manufacturing",
  "Rise Mission Power",
  "Canadian manufacturing",
] as const;

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  keywords?: readonly string[] | string[];
}): Metadata {
  return {
    title,
    description,
    ...(keywords?.length ? { keywords: [...keywords] } : {}),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      type,
      siteName: site.name,
      locale: "en_CA",
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
