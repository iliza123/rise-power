import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { SnapCarousel } from "@/components/home/SnapCarousel";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import { aiBackupPage } from "@/lib/markets/ai-backup-content";
import type { AiBackupPageContent } from "@/lib/markets/ai-backup-page-types";
import {
  CREAM,
  MUTED,
  SAGE,
  SAGE_CTA,
  SECTION_RULE,
  SectionEyebrow,
  SPLIT_WASH,
} from "./market-ui";

type BenefitIconName = AiBackupPageContent["resilient"]["benefits"][number]["icon"];

const benefitIconProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function BenefitIcon({
  name,
  className,
}: {
  name: BenefitIconName;
  className: string;
}) {
  if (name === "bolt") {
    return (
      <svg {...benefitIconProps} className={className}>
        <path d="M26 5 14 27h9l-3 16 16-24h-9l3-14Z" />
      </svg>
    );
  }
  if (name === "modular") {
    return (
      <svg {...benefitIconProps} className={className}>
        <path d="M18 14 32 8l12 6-14 6Z" />
        <path d="M18 14v12l14 6V20" />
        <path d="M44 14v12L30 32" />
        <path d="M10 22a8 8 0 1 0 3.2-6.4" />
        <path d="M10 12.5V18h5.5" />
      </svg>
    );
  }
  if (name === "cycle") {
    return (
      <svg {...benefitIconProps} className={className}>
        <path d="M16 18a10 10 0 0 1 16.5-6.2L36 15" />
        <path d="M36 9v7h-7" />
        <path d="M32 30a10 10 0 0 1-16.5 6.2L12 33" />
        <path d="M12 39v-7h7" />
      </svg>
    );
  }
  return (
    <svg {...benefitIconProps} className={className}>
      <path d="M8 38V27" />
      <path d="M18 38V21" />
      <path d="M28 38V15" />
      <path d="M8 31 18 24l10-7 12-8" />
      <path d="M32 9h8v8" />
    </svg>
  );
}

function ResilientBenefitCard({
  benefit,
  tone,
}: {
  benefit: AiBackupPageContent["resilient"]["benefits"][number];
  tone: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <article
      className={
        dark
          ? "flex h-full flex-col rounded-xl border border-[#d4e56a]/30 bg-[#0c1210]/78 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_22px_48px_rgba(0,0,0,0.32)] backdrop-blur-md sm:p-7"
          : "flex h-full flex-col rounded-xl border bg-[#fbfaf7] p-6 shadow-[0_16px_40px_rgba(16,24,32,0.05)] sm:p-7"
      }
      style={dark ? undefined : { borderColor: SECTION_RULE }}
    >
      <BenefitIcon
        name={benefit.icon}
        className={dark ? "size-10 text-[#d4e56a]" : "size-10 text-[#6e7f42]"}
      />
      <h3
        className={`mt-5 font-display text-[0.95rem] leading-[1.2] font-bold tracking-[0.04em] uppercase sm:text-base ${dark ? "text-white" : "text-[#101820]"}`}
      >
        {benefit.title}
      </h3>
      <p
        className="mt-2.5 text-sm leading-snug sm:text-[0.9375rem]"
        style={{ color: dark ? "rgba(255,255,255,0.72)" : MUTED }}
      >
        {benefit.body}
      </p>
    </article>
  );
}

function HowItWorksStepCard({
  step,
  tone,
}: {
  step: AiBackupPageContent["steps"]["items"][number];
  tone: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-[7px] border ${dark ? "bg-[#141a18]" : "bg-[#fbfaf7]"}`}
      style={{ borderColor: dark ? "rgba(255,255,255,0.12)" : SECTION_RULE }}
    >
      <div className="relative aspect-square overflow-hidden bg-[#101820]">
        <Image
          src={step.imageSrc}
          alt={step.imageAlt}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 50vw, 85vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <span
          className="font-display text-sm font-bold tracking-[0.14em] uppercase"
          style={{ color: SAGE }}
        >
          {step.number}
        </span>
        <h3
          className={`mt-2 font-display text-xl font-bold tracking-tight uppercase ${dark ? "text-white" : "text-[#101820]"}`}
        >
          {step.title}
        </h3>
        <p
          className="mt-2 text-base leading-[1.55]"
          style={{ color: dark ? "rgba(255,255,255,0.72)" : MUTED }}
        >
          {step.body}
        </p>
      </div>
    </article>
  );
}

type AiBackupTone = "light" | "dark";

type MarketLayoutAiBackupProps = {
  page?: AiBackupPageContent;
  /** Light is the live page. Dark is the client-reference page. */
  tone?: AiBackupTone;
  /** Optional banner above the hero (e.g. client-reference compare link). */
  compareBanner?: ReactNode;
};

/**
 * AI Backup page (sections 1–7) with images throughout.
 * No page-local closing CTA (global ClosingCta + Footer).
 * `tone="light"` is /markets/ai-backup. `tone="dark"` is /markets/ai-backup2.
 * Both read images from the page content, so art can be swapped per page.
 */
export function MarketLayoutAiBackup({
  page = aiBackupPage,
  tone = "light",
  compareBanner,
}: MarketLayoutAiBackupProps) {
  const dark = tone === "dark";
  const copy = dark ? "rgba(244,246,242,0.72)" : MUTED;
  const wash = dark ? "#10161a" : CREAM;
  const paper = dark ? "#070b0c" : "#ffffff";
  const cardSurface = dark ? "#141a18" : "#ffffff";
  const cardRule = dark ? "rgba(255,255,255,0.12)" : SECTION_RULE;

  const benefitCards = (band: boolean) => (
    <>
      <Reveal variant="up" delay={80} className={band ? "lg:hidden" : "mt-10 lg:hidden"}>
        <SnapCarousel
          ariaLabel="Resilient energy benefits"
          showArrows
          showDots
          itemClassName="w-[min(85vw,22rem)]"
          trackClassName="gap-4 px-1 pb-1"
        >
          {page.resilient.benefits.map((benefit) => (
            <ResilientBenefitCard key={benefit.title} benefit={benefit} tone={tone} />
          ))}
        </SnapCarousel>
      </Reveal>
      <RevealStagger
        className={
          band
            ? "hidden gap-4 lg:grid lg:grid-cols-4 lg:gap-5"
            : "mt-10 hidden gap-4 lg:grid lg:grid-cols-4 lg:mt-14 lg:gap-5"
        }
        step={50}
        variant="up"
      >
        {page.resilient.benefits.map((benefit) => (
          <ResilientBenefitCard key={benefit.title} benefit={benefit} tone={tone} />
        ))}
      </RevealStagger>
    </>
  );

  return (
    <main className={dark ? "bg-[#070b0c] text-white" : "bg-[#fbfaf7] text-[#101820]"}>
      {compareBanner}
      {/* 1. Hero */}
      <StackedPageHero
        layout="split"
        imageSrc={page.hero.src}
        mobileImageSrc={page.hero.mobileSrc}
        imageAlt={page.hero.alt}
        imageClassName="object-cover object-center xl:object-[68%_center]"
        splitImageWidthClassName="w-[66%]"
        splitImageSizes="66vw"
        heroMinHeightClassName="xl:min-h-[min(88svh,800px)]"
        mobileBannerClassName="relative h-[min(58svh,480px)] w-full overflow-hidden sm:h-[min(52svh,520px)] xl:hidden"
        tone="#0a0f10"
        splitWash={SPLIT_WASH}
      >
        <div className="hero-animate-copy w-full text-left">
          <SectionEyebrow light>{page.eyebrow}</SectionEyebrow>
          <h1 className="mt-4 type-page-h1 text-white [text-shadow:none] sm:mt-5">
            <span className="block">{page.titleLine1}</span>
            <span className="mt-1 block" style={{ color: SAGE }}>
              {page.titleAccent}
            </span>
          </h1>
          <p className="type-section-body mt-5 max-w-[32rem] !text-white/90 sm:mt-6">
            {page.heroBody}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href={page.cta.href}
              className="cta-with-icon inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-7 text-sm font-semibold tracking-wide whitespace-nowrap text-white uppercase transition-opacity hover:opacity-90 sm:px-8"
              style={{ background: SAGE_CTA }}
            >
              <span className="leading-none">{page.cta.label}</span>
              <ArrowRight className="size-4 shrink-0 sm:size-5" aria-hidden />
            </Link>
            <Link
              href={page.secondaryCta.href}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/35 px-7 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:border-white/60 hover:bg-white/5 sm:px-8"
            >
              {page.secondaryCta.label}
              <ArrowRight className="size-4 shrink-0" aria-hidden />
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {page.badges.map((badge) => (
              <li
                key={badge.label}
                className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-white/85 uppercase"
              >
                <span
                  aria-hidden
                  className="size-1.5 shrink-0 rounded-full"
                  style={{ background: SAGE }}
                />
                {badge.label}
              </li>
            ))}
          </ul>
        </div>
      </StackedPageHero>

      {/* 2. Feature cards */}
      <section className="py-10 sm:py-12 lg:py-14" style={{ background: wash }}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <SectionEyebrow light={dark}>{page.features.eyebrow}</SectionEyebrow>
          </Reveal>
          <RevealStagger
            className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5"
            step={60}
            variant="up"
          >
            {page.features.items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex h-full flex-col overflow-hidden rounded-[7px] border transition-colors hover:border-[#6e7f42]"
                style={{ borderColor: cardRule, background: cardSurface, color: dark ? "#ffffff" : "#101820" }}
              >
                <div className="relative aspect-square overflow-hidden bg-[#101820]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-display text-xl font-bold tracking-tight uppercase sm:text-2xl">
                    {item.title}
                  </h3>
                  <p
                    className="mt-3 flex-1 text-base leading-[1.55]"
                    style={{ color: copy }}
                  >
                    {item.body}
                  </p>
                  <span
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase"
                    style={{ color: SAGE }}
                  >
                    Learn more
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* 3. Resilient energy — light cards, or a dark photo band on ai-backup2 */}
      <section className={dark ? "pt-10 sm:pt-12 lg:pt-14" : "bg-white py-10 sm:py-12 lg:py-14"} style={dark ? { background: paper } : undefined}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div
            className={`grid items-center gap-6 lg:gap-10 ${
              page.resilient.imageFrameClassName
                ? "lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,40rem)]"
                : "lg:grid-cols-[minmax(0,1fr)_minmax(18rem,32rem)]"
            }`}
          >
            {/* Image first on mobile; text stays left on desktop */}
            <Reveal variant="right" className="order-1 w-full lg:order-2 lg:justify-self-end">
              <div
                className={
                  page.resilient.imageFrameClassName ??
                  "relative aspect-square overflow-hidden rounded-[7px] bg-[#101820]"
                }
              >
                <Image
                  src={page.resilient.imageSrc}
                  alt={page.resilient.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>
            <Reveal variant="left" className="order-2 lg:order-1">
              <SectionEyebrow light={dark}>{page.resilient.eyebrow}</SectionEyebrow>
              <h2 className="mt-3 font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem] lg:text-[2.75rem]">
                {page.resilient.headingBefore}{" "}
                <span style={{ color: SAGE }}>
                  {page.resilient.headingAccent}
                </span>
              </h2>
              <p
                className="mt-4 text-base leading-[1.65] sm:text-lg"
                style={{ color: copy }}
              >
                {page.resilient.body}
              </p>
              <Link
                href={page.resilient.cta.href}
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-7 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
                style={{ background: SAGE_CTA }}
              >
                {page.resilient.cta.label}
                <ArrowRight className="size-4 shrink-0" aria-hidden />
              </Link>
            </Reveal>
          </div>

          {dark ? null : benefitCards(false)}
        </div>
        {dark ? (
          <div className="relative mt-10 overflow-hidden sm:mt-12 lg:mt-16">
            <Image
              src={page.resilient.imageSrc}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[center_82%] scale-110"
              aria-hidden
            />
            <div className="absolute inset-0 bg-[#070b0c]/88" aria-hidden />
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(214,164,72,0.22),transparent_58%)]"
              aria-hidden
            />
            <div className="relative mx-auto max-w-[1440px] px-6 py-8 sm:py-10 lg:px-10 lg:py-12">
              {benefitCards(true)}
            </div>
          </div>
        ) : null}
      </section>

      {/* 4. Hydrogen tech — image first on mobile; text stays left on desktop */}
      <section className="py-10 sm:py-12 lg:py-14" style={{ background: wash }}>
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-10 lg:px-10">
          <Reveal variant="right" className="order-1 lg:order-2">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[7px] bg-[#101820]">
              <Image
                src={page.hydrogen.imageSrc}
                alt={page.hydrogen.imageAlt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </Reveal>
          <Reveal variant="left" className="order-2 lg:order-1">
            <SectionEyebrow light={dark}>{page.hydrogen.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem] lg:text-[2.5rem]">
              {page.hydrogen.headingBefore}{" "}
              <span style={{ color: SAGE }}>{page.hydrogen.headingAccent}</span>
            </h2>
            <p
              className="mt-4 text-base leading-[1.65] sm:text-lg"
              style={{ color: copy }}
            >
              {page.hydrogen.body}
            </p>
            <ul className="mt-6 space-y-3">
              {page.hydrogen.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-base leading-[1.5]">
                  <span
                    aria-hidden
                    className="mt-2 size-1.5 shrink-0 rounded-full"
                    style={{ background: SAGE }}
                  />
                  <span style={{ color: copy }}>{bullet}</span>
                </li>
              ))}
            </ul>
            <Link
              href={page.hydrogen.cta.href}
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border px-7 text-sm font-semibold tracking-wide uppercase transition-colors hover:border-[#6e7f42]"
              style={{ borderColor: cardRule, color: SAGE }}
            >
              {page.hydrogen.cta.label}
              <ArrowRight className="size-4 shrink-0" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 5. Four-step process — slider on mobile, grid on desktop */}
      <section className="py-10 sm:py-12 lg:py-14" style={{ background: paper }}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <SectionEyebrow light={dark}>{page.steps.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 max-w-4xl font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem] lg:text-[2.75rem]">
              {page.steps.headingBefore}{" "}
              <span style={{ color: SAGE }}>{page.steps.headingAccent}</span>
            </h2>
          </Reveal>

          <Reveal variant="up" delay={80} className="mt-8 lg:hidden">
            <SnapCarousel
              ariaLabel="How it works steps"
              showArrows
              showDots
              itemClassName="w-[min(85vw,20rem)]"
              trackClassName="gap-4 px-1 pb-1"
            >
              {page.steps.items.map((step) => (
                <HowItWorksStepCard key={step.number} step={step} tone={tone} />
              ))}
            </SnapCarousel>
          </Reveal>

          <RevealStagger
            className="mt-10 hidden gap-5 lg:grid lg:grid-cols-4"
            step={60}
            variant="up"
          >
            {page.steps.items.map((step) => (
              <HowItWorksStepCard key={step.number} step={step} tone={tone} />
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* 6. Applications */}
      <section className="py-10 sm:py-12 lg:py-14" style={{ background: wash }}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <SectionEyebrow light={dark}>{page.applications.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 max-w-4xl font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem] lg:text-[2.75rem]">
              {page.applications.headingBefore}{" "}
              <span style={{ color: SAGE }}>
                {page.applications.headingAccent}
              </span>
            </h2>
          </Reveal>

          <RevealStagger
            className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
            step={60}
            variant="up"
          >
            {page.applications.items.map((app) => (
              <Link
                key={app.title}
                href={app.href}
                className="group flex h-full flex-col overflow-hidden rounded-[7px] border transition-colors hover:border-[#6e7f42]"
                style={{ borderColor: cardRule, background: cardSurface, color: dark ? "#ffffff" : "#101820" }}
              >
                <div className="relative aspect-square overflow-hidden bg-[#101820]">
                  <Image
                    src={app.imageSrc}
                    alt={app.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-display text-xl font-bold tracking-tight uppercase sm:text-2xl">
                    {app.title}
                  </h3>
                  <p
                    className="mt-3 flex-1 text-base leading-[1.55]"
                    style={{ color: copy }}
                  >
                    {app.body}
                  </p>
                  <span
                    className="cta-with-icon mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-semibold tracking-wide uppercase"
                    style={{ color: SAGE }}
                  >
                    Explore
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* 7. Platform — image first on mobile; text stays left on desktop */}
      {page.platform ? (
        <section className="py-10 sm:py-12 lg:py-14" style={{ background: paper }}>
          <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-10 lg:px-10">
            <Reveal variant="right" className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[7px] bg-[#101820]">
                <Image
                  src={page.platform.imageSrc}
                  alt={page.platform.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>
            <Reveal variant="left" className="order-2 lg:order-1">
              <SectionEyebrow light={dark}>{page.platform.eyebrow}</SectionEyebrow>
              <h2 className="mt-3 font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem] lg:text-[2.5rem]">
                {page.platform.headingBefore}{" "}
                <span style={{ color: SAGE }}>
                  {page.platform.headingAccent}
                </span>
              </h2>
              <p
                className="mt-4 text-base leading-[1.65] sm:text-lg"
                style={{ color: copy }}
              >
                {page.platform.body}
              </p>
              <Link
                href={page.platform.cta.href}
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-7 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
                style={{ background: SAGE_CTA }}
              >
                {page.platform.cta.label}
                <ArrowRight className="size-4 shrink-0" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </section>
      ) : null}
    </main>
  );
}
