import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import { type MarketDetailPage } from "@/lib/markets";
import { MarketSpotlightSection } from "./MarketSpotlightSection";
import {
  DARK,
  HeroCtas,
  SAGE,
  SectionEyebrow,
  SPLIT_WASH,
  TitleWithAccent,
} from "./market-ui";

/** Tactical dossier — dark mission brief, timeline applications, compact product rows. */
export function MarketLayoutDefense({ market }: { market: MarketDetailPage }) {
  return (
    <main className="bg-[#0a0f10] text-white">
      <StackedPageHero
        layout="split"
        imageSrc={market.images.hero.src}
        mobileImageSrc={market.images.hero.mobileSrc}
        imageAlt={market.images.hero.alt}
        imageClassName="object-cover object-[center_40%]"
        tone={DARK}
        splitWash={SPLIT_WASH}
      >
        <div className="hero-animate-copy w-full text-left">
          <SectionEyebrow light>{market.eyebrow}</SectionEyebrow>
          <h1 className="mt-4 type-page-h1 text-white [text-shadow:none] sm:mt-5">
            <TitleWithAccent title={market.title} />
          </h1>
          <p className="type-section-body mt-5 max-w-[32rem] !text-white/90 sm:mt-6">
            {market.heroBody}
          </p>
          <HeroCtas
            primaryHref={market.cta.href}
            primaryLabel={market.cta.label}
          />
        </div>
      </StackedPageHero>

      {/* Dark mission brief + horizontal stats */}
      <section className="relative overflow-hidden border-t border-white/10 bg-[#0c1210] py-10 sm:py-12 lg:py-14">
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
            <Reveal variant="up">
              <SectionEyebrow light>Mission Brief</SectionEyebrow>
              <h2 className="mt-3 font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight text-white uppercase sm:text-[2.25rem] lg:text-[2.75rem]">
                <TitleWithAccent title={market.heading} />
              </h2>
              <p className="mt-4 max-w-[42rem] text-base leading-[1.7] text-white sm:text-lg">
                {market.body}
              </p>
            </Reveal>

            <Reveal variant="fade" delay={80} className="hidden lg:block">
              <p className="font-display text-[6rem] leading-none font-bold tracking-tight text-white/25 select-none sm:text-[7rem]">
                01
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-1 border-t border-white/15 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {market.stats.map((stat, index) => {
              const isOdd = index % 2 === 1;
              const isBottomRow = index >= 2;

              return (
                <Reveal
                  key={stat.label}
                  variant="up"
                  delay={index * 50}
                  className="h-full min-h-0"
                >
                  <article
                    className={[
                      "flex h-full flex-col px-5 py-6 sm:px-6 sm:py-7",
                      index > 0 ? "border-t border-white/15 sm:border-t-0" : "",
                      isOdd ? "sm:border-l sm:border-white/15" : "",
                      isBottomRow
                        ? "sm:border-t sm:border-white/15 lg:border-t-0"
                        : "",
                      index > 0 ? "lg:border-l lg:border-white/15" : "",
                    ].join(" ")}
                  >
                    <p
                      className="font-display text-[1.75rem] leading-none font-bold tracking-tight uppercase sm:text-[2rem]"
                      style={{ color: SAGE }}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-3 text-sm font-semibold tracking-[0.14em] text-white uppercase sm:text-[0.9375rem]">
                      {stat.label}
                    </p>
                    <p className="mt-3 max-w-[28ch] text-base leading-[1.55] text-white">
                      {stat.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <ul className="mt-8 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-7 lg:grid-cols-4">
            {market.callouts.map((callout, index) => (
              <Reveal key={callout.title} variant="up" delay={index * 40}>
                <li>
                  <p
                    className="text-sm font-bold tracking-[0.12em] uppercase sm:text-[0.9375rem]"
                    style={{ color: SAGE }}
                  >
                    {String(index + 1).padStart(2, "0")} · {callout.title}
                  </p>
                  <p className="mt-2.5 text-base leading-[1.55] text-white">
                    {callout.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <MarketSpotlightSection spotlight={market.spotlight} />

      {/* Deployment / How It Works — header above; image + steps aligned */}
      <section className="relative bg-[#f3f0e8] py-12 text-[#101820] sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="left">
            <SectionEyebrow>Deployment</SectionEyebrow>
            <h2 className="mt-3 font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem] lg:text-[2.5rem]">
              How It <span style={{ color: SAGE }}>Works.</span>
            </h2>
            <p className="mt-4 max-w-[30rem] text-base leading-[1.65] text-[#3d4440] sm:text-lg">
              {market.applicationsIntro}
            </p>
          </Reveal>

          <div className="mt-7 grid items-start gap-8 lg:mt-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10 xl:gap-12">
            <Reveal variant="left" delay={40} className="lg:sticky lg:top-24 lg:self-start">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#d9d8d0] bg-[#dfe4dc]">
                <Image
                  src={market.images.secondary.src}
                  alt={market.images.secondary.alt}
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal variant="right" delay={60}>
              <ol className="relative">
                {market.applications.map((item, index) => {
                  const isLast = index === market.applications.length - 1;

                  return (
                    <li
                      key={item}
                      className="relative grid grid-cols-[2.25rem_1fr] gap-x-4 pb-6 last:pb-0 sm:grid-cols-[2.75rem_1fr] sm:gap-x-5 sm:pb-7"
                    >
                      {/* Rail + marker */}
                      <div className="relative flex justify-center">
                        {!isLast ? (
                          <span
                            aria-hidden
                            className="absolute top-8 bottom-0 w-px"
                            style={{ background: `${SAGE}55` }}
                          />
                        ) : null}
                        <span
                          aria-hidden
                          className="relative z-[1] flex size-8 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white sm:size-9 sm:text-base"
                          style={{ background: SAGE }}
                        >
                          {index + 1}
                        </span>
                      </div>

                      {/* Copy */}
                      <div
                        className={[
                          "min-w-0 pt-0.5",
                          !isLast ? "border-b border-[#d9d8d0] pb-6 sm:pb-7" : "",
                        ].join(" ")}
                      >
                        <p
                          className="font-display text-sm font-bold tracking-[0.16em] uppercase"
                          style={{ color: SAGE }}
                        >
                          Step {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-2 text-base leading-[1.55] font-medium text-[#1a1f1c] sm:text-[1.0625rem]">
                          {item}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
