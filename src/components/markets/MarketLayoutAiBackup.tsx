import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal, RevealStagger } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import { aiBackupPage } from "@/lib/markets/ai-backup-content";
import {
  CREAM,
  MUTED,
  SAGE,
  SAGE_CTA,
  SECTION_RULE,
  SectionEyebrow,
  SPLIT_WASH,
} from "./market-ui";

/**
 * Full client-reference AI Backup page (sections 1–6) with images throughout.
 * No software platform. No page-local closing CTA (global ClosingCta + Footer).
 */
export function MarketLayoutAiBackup() {
  const page = aiBackupPage;

  return (
    <main className="bg-[#fbfaf7] text-[#101820]">
      {/* 1. Hero */}
      <StackedPageHero
        layout="split"
        imageSrc={page.hero.src}
        imageAlt={page.hero.alt}
        imageClassName="object-cover object-[center_50%]"
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
      <section className="py-10 sm:py-12 lg:py-14" style={{ background: CREAM }}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <SectionEyebrow>{page.features.eyebrow}</SectionEyebrow>
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
                className="group flex h-full flex-col overflow-hidden border bg-white transition-colors hover:border-[#6e7f42]"
                style={{ borderColor: SECTION_RULE }}
              >
                <div className="relative aspect-[16/10] bg-[#101820]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-display text-xl font-bold tracking-tight uppercase sm:text-2xl">
                    {item.title}
                  </h3>
                  <p
                    className="mt-3 flex-1 text-base leading-[1.55]"
                    style={{ color: MUTED }}
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

      {/* 3. Resilient energy — image + benefit cards with photos */}
      <section className="bg-white py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal variant="left">
              <SectionEyebrow>{page.resilient.eyebrow}</SectionEyebrow>
              <h2 className="mt-3 font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem] lg:text-[2.75rem]">
                {page.resilient.headingBefore}{" "}
                <span style={{ color: SAGE }}>
                  {page.resilient.headingAccent}
                </span>
              </h2>
              <p
                className="mt-4 text-base leading-[1.65] sm:text-lg"
                style={{ color: MUTED }}
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
            <Reveal variant="right">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#101820]">
                <Image
                  src={page.resilient.imageSrc}
                  alt={page.resilient.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <RevealStagger
            className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
            step={50}
            variant="up"
          >
            {page.resilient.benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="flex h-full flex-col overflow-hidden border bg-[#fbfaf7]"
                style={{ borderColor: SECTION_RULE }}
              >
                <div className="relative aspect-[16/10] bg-[#101820]">
                  <Image
                    src={benefit.imageSrc}
                    alt={benefit.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="font-display text-sm font-bold tracking-[0.12em] uppercase sm:text-base">
                    {benefit.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-[1.55]"
                    style={{ color: MUTED }}
                  >
                    {benefit.body}
                  </p>
                </div>
              </article>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* 4. Hydrogen tech */}
      <section className="py-10 sm:py-12 lg:py-14" style={{ background: CREAM }}>
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">
          <Reveal variant="left">
            <SectionEyebrow>{page.hydrogen.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem] lg:text-[2.5rem]">
              {page.hydrogen.headingBefore}{" "}
              <span style={{ color: SAGE }}>{page.hydrogen.headingAccent}</span>
            </h2>
            <p
              className="mt-4 text-base leading-[1.65] sm:text-lg"
              style={{ color: MUTED }}
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
                  <span style={{ color: MUTED }}>{bullet}</span>
                </li>
              ))}
            </ul>
            <Link
              href={page.hydrogen.cta.href}
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border px-7 text-sm font-semibold tracking-wide uppercase transition-colors hover:border-[#6e7f42]"
              style={{ borderColor: SECTION_RULE, color: SAGE }}
            >
              {page.hydrogen.cta.label}
              <ArrowRight className="size-4 shrink-0" aria-hidden />
            </Link>
          </Reveal>
          <Reveal variant="right">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#101820]">
              <Image
                src={page.hydrogen.imageSrc}
                alt={page.hydrogen.imageAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Four-step process — with images */}
      <section className="bg-white py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <SectionEyebrow>{page.steps.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 max-w-4xl font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem] lg:text-[2.75rem]">
              {page.steps.headingBefore}{" "}
              <span style={{ color: SAGE }}>{page.steps.headingAccent}</span>
            </h2>
          </Reveal>

          <RevealStagger
            className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
            step={60}
            variant="up"
          >
            {page.steps.items.map((step) => (
              <article
                key={step.number}
                className="flex h-full flex-col overflow-hidden border bg-[#fbfaf7]"
                style={{ borderColor: SECTION_RULE }}
              >
                <div className="relative aspect-[16/10] bg-[#101820]">
                  <Image
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span
                    className="absolute top-3 left-3 font-display text-sm font-bold tracking-[0.14em] text-white uppercase"
                    style={{ textShadow: "0 1px 8px rgba(0,0,0,0.55)" }}
                  >
                    {step.number}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="font-display text-xl font-bold tracking-tight uppercase">
                    {step.title}
                  </h3>
                  <p
                    className="mt-2 text-base leading-[1.55]"
                    style={{ color: MUTED }}
                  >
                    {step.body}
                  </p>
                </div>
              </article>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* 6. Applications */}
      <section className="py-10 sm:py-12 lg:py-14" style={{ background: CREAM }}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <SectionEyebrow>{page.applications.eyebrow}</SectionEyebrow>
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
                className="group relative flex min-h-[280px] flex-col justify-end overflow-hidden bg-[#101820]"
              >
                <Image
                  src={app.imageSrc}
                  alt={app.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"
                />
                <div className="relative z-10 p-5 sm:p-6">
                  <h3 className="font-display text-xl font-bold tracking-tight text-white uppercase">
                    {app.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.5] text-white/85">
                    {app.body}
                  </p>
                  <span
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase"
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
    </main>
  );
}
