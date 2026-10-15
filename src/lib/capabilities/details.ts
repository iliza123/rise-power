import { capabilities, type CapabilityTab } from "@/lib/home-content";
import type { CapabilityDetailPage } from "./types";

/** Maps home-content tab ids to URL slug segments. */
export const CAPABILITY_SLUG_BY_ID: Record<string, string> = {
  engineering: "engineering-development",
  // integration: "system-integration", // page removed — restore with tab in home-content
  field: "field-deployment",
  safety: "safety-compliance",
};

/** SEO-optimized titles/descriptions mapped by capability tab id. */
const CAPABILITY_SEO: Record<
  string,
  { metaTitle: string; metaDescription: string }
> = {
  engineering: {
    metaTitle:
      "Prototype Manufacturing & Design for Manufacturing | Canada",
    metaDescription:
      "Prototype manufacturing services, new product introduction manufacturing, and design for manufacturing services. Aerospace manufacturing Canada and defence manufacturing Canada — fuel cell component manufacturing, hydrogen component manufacturing, and electrolyzer component manufacturing.",
  },
  field: {
    metaTitle: "Field Deployment for Portable Hydrogen Power Systems",
    metaDescription:
      "Logistics, operator training, and field service for portable hydrogen power and tactical hydrogen generators — cartridge supply and deployment support for remote and defence operations.",
  },
  safety: {
    metaTitle: "Safety & Compliance for Hydrogen Fuel Cell Systems",
    metaDescription:
      "Safety and compliance engineering for portable hydrogen fuel cell generators, indoor safe backup power, and hydrogen cartridge systems — including CSA/NFPA 2 indoor use and military environmental standards.",
  },
};

function toDetailPage(tab: CapabilityTab): CapabilityDetailPage {
  const slug = CAPABILITY_SLUG_BY_ID[tab.id];
  if (!slug) {
    throw new Error(`Missing capability slug for tab id "${tab.id}"`);
  }

  const seo = CAPABILITY_SEO[tab.id];

  return {
    slug,
    id: tab.id,
    label: tab.label,
    title: tab.title,
    eyebrow: tab.eyebrow,
    heading: tab.heading,
    body: tab.body,
    heroBody: tab.heroBody,
    href: tab.href,
    images: {
      hero: {
        src: tab.imageSrc,
        alt: tab.imageAlt,
        mobileSrc: tab.mobileImageSrc,
      },
      secondary: {
        src: tab.secondaryImageSrc,
        alt: tab.secondaryImageAlt,
      },
    },
    gallery: tab.gallery,
    deliverablesIntro: tab.deliverablesIntro,
    deliverables: tab.deliverables,
    cta: tab.cta,
    stats: tab.stats,
    callouts: tab.callouts,
    metaTitle: seo?.metaTitle ?? tab.title,
    metaDescription: seo?.metaDescription ?? (tab.heroBody || tab.body),
    showRoadmap: tab.id === "safety",
  };
}

/** Capability detail pages derived from `capabilities.tabs` in home-content. */
export const capabilityDetails: CapabilityDetailPage[] =
  capabilities.tabs.map(toDetailPage);
