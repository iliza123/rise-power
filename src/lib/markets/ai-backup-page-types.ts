/** Shared shape for live AI Backup page and client-reference variant. */
export type AiBackupPageContent = {
  eyebrow: string;
  titleLine1: string;
  titleAccent: string;
  heroBody: string;
  cta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  hero: {
    src: string;
    mobileSrc?: string;
    alt: string;
  };
  badges: { label: string }[];
  features: {
    eyebrow: string;
    items: {
      title: string;
      body: string;
      imageSrc: string;
      imageAlt: string;
      href: string;
    }[];
  };
  resilient: {
    eyebrow: string;
    headingBefore: string;
    headingAccent: string;
    body: string;
    cta: { label: string; href: string };
    imageSrc: string;
    imageAlt: string;
    /** Optional frame classes when the photo is not square. */
    imageFrameClassName?: string;
    benefits: {
      title: string;
      body: string;
      icon: "bolt" | "modular" | "cycle" | "chart";
    }[];
  };
  hydrogen: {
    eyebrow: string;
    headingBefore: string;
    headingAccent: string;
    body: string;
    imageSrc: string;
    imageAlt: string;
    cta: { label: string; href: string };
    bullets: string[];
  };
  steps: {
    eyebrow: string;
    headingBefore: string;
    headingAccent: string;
    items: {
      number: string;
      title: string;
      body: string;
      imageSrc: string;
      imageAlt: string;
    }[];
  };
  applications: {
    eyebrow: string;
    headingBefore: string;
    headingAccent: string;
    items: {
      title: string;
      body: string;
      imageSrc: string;
      imageAlt: string;
      href: string;
    }[];
  };
  /** Software-platform block (fleet visibility / energy management). */
  platform?: {
    eyebrow: string;
    headingBefore: string;
    headingAccent: string;
    body: string;
    cta: { label: string; href: string };
    imageSrc: string;
    imageAlt: string;
  };
};
