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
  TitleWithAccent,
} from "./market-ui";

/** Short AI Backup page — AI data-center focused: hero, why, applications, systems. */
export function MarketLayoutAiBackup() {
  const page = aiBackupPage;

  return (
    <main className="bg-[#fbfaf7] text-[#101820]">
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
            <TitleWithAccent title={page.title} />
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
        </div>
      </StackedPageHero>

      <section className="py-10 sm:py-12 lg:py-14" style={{ background: CREAM }}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <SectionEyebrow>{page.overview.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 max-w-4xl font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem] lg:text-[2.75rem]">
              {page.overview.headingBefore}{" "}
              <span style={{ color: SAGE }}>{page.overview.headingAccent}</span>
            </h2>
            <p
              className="mt-4 max-w-[42rem] text-base leading-[1.65] sm:text-lg"
              style={{ color: MUTED }}
            >
              {page.overview.body}
            </p>
          </Reveal>

          <RevealStagger
            className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5"
            step={60}
            variant="up"
          >
            {page.overview.points.map((point, index) => (
              <article
                key={point.title}
                className="flex h-full flex-col border bg-white p-5 sm:p-6"
                style={{ borderColor: SECTION_RULE }}
              >
                <p
                  className="font-display text-3xl font-bold tabular-nums"
                  style={{ color: SAGE }}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight uppercase sm:text-2xl">
                  {point.title}
                </h3>
                <p
                  className="mt-3 flex-1 text-base leading-[1.55]"
                  style={{ color: MUTED }}
                >
                  {point.body}
                </p>
              </article>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-12 lg:py-14">
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">
          <Reveal variant="left">
            <SectionEyebrow>{page.fit.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem] lg:text-[2.5rem]">
              {page.fit.headingBefore}{" "}
              <span style={{ color: SAGE }}>{page.fit.headingAccent}</span>
            </h2>
            <p
              className="mt-4 text-base leading-[1.65] sm:text-lg"
              style={{ color: MUTED }}
            >
              {page.fit.body}
            </p>
            <ul className="mt-6 space-y-3">
              {page.fit.bullets.map((bullet) => (
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
          </Reveal>
          <Reveal variant="right">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#101820]">
              <Image
                src={page.fit.imageSrc}
                alt={page.fit.imageAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-14" style={{ background: CREAM }}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <SectionEyebrow>{page.systems.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 max-w-4xl font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem] lg:text-[2.75rem]">
              {page.systems.headingBefore}{" "}
              <span style={{ color: SAGE }}>{page.systems.headingAccent}</span>
            </h2>
            <p
              className="mt-4 max-w-[42rem] text-base leading-[1.65] sm:text-lg"
              style={{ color: MUTED }}
            >
              {page.systems.body}
            </p>
          </Reveal>

          <RevealStagger
            className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5"
            step={60}
            variant="up"
          >
            {page.systems.items.map((item) => (
              <article
                key={item.name}
                className="flex h-full flex-col overflow-hidden border bg-white"
                style={{ borderColor: SECTION_RULE }}
              >
                <div className="relative aspect-[16/10] bg-[#101820]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p
                    className="text-xs font-semibold tracking-[0.14em] uppercase"
                    style={{ color: SAGE }}
                  >
                    {item.role}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold tracking-tight uppercase">
                    {item.name}
                  </h3>
                  <p
                    className="mt-3 text-base leading-[1.55]"
                    style={{ color: MUTED }}
                  >
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </RevealStagger>
        </div>
      </section>
    </main>
  );
}
