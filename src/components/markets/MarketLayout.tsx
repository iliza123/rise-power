import { Reveal } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import { type MarketDetailPage } from "@/lib/markets";
import { MarketProductUses } from "./MarketProductUses";
import { MarketSpotlightSection } from "./MarketSpotlightSection";
import {
  CREAM,
  HeroCtas,
  MUTED,
  SAGE,
  SECTION_RULE,
  SectionEyebrow,
  SPLIT_WASH,
  TitleWithAccent,
} from "./market-ui";

/** Shared market detail layout — split hero, cream callouts, spotlight, product uses. */
export function MarketLayout({ market }: { market: MarketDetailPage }) {
  return (
    <main className="bg-[#fbfaf7] text-[#101820]">
      <StackedPageHero
        layout="split"
        imageSrc={market.images.hero.src}
        mobileImageSrc={market.images.hero.mobileSrc}
        imageAlt={market.images.hero.alt}
        imageClassName="object-cover object-[center_50%]"
        tone="#0a0f10"
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

      <section className="py-10 sm:py-12 lg:py-14" style={{ background: CREAM }}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <SectionEyebrow>{market.overview.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 max-w-4xl font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem] lg:text-[2.75rem]">
              {market.overview.headingBefore}{" "}
              <span style={{ color: SAGE }}>{market.overview.headingAccent}</span>
            </h2>
            <p
              className="mt-4 max-w-[42rem] text-base leading-[1.65] sm:text-lg"
              style={{ color: MUTED }}
            >
              {market.body}
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5">
            {market.callouts.map((callout, index) => (
              <Reveal key={callout.title} variant="up" delay={index * 60} className="h-full">
                <article
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
                    {callout.title}
                  </h3>
                  <p
                    className="mt-3 flex-1 text-base leading-[1.55]"
                    style={{ color: MUTED }}
                  >
                    {callout.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MarketSpotlightSection spotlight={market.spotlight} />

      <MarketProductUses section={market.productUses} tone="light" />
    </main>
  );
}
