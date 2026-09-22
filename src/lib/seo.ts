import type { Metadata } from "next";
import { site } from "@/lib/content";

export const siteTitle = "Rise Mission Power";
export const siteDescription =
  "Portable hydrogen power for everyday resilience. Quiet, zero-emission fuel cell systems for municipal, emergency, field, and off-grid applications — engineered and built in British Columbia.";

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  return {
    title,
    description,
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
