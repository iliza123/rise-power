import { Reveal } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import { type MarketDetailPage } from "@/lib/markets";
import { MarketSpotlightSection } from "./MarketSpotlightSection";
import {
  HeroCtas,
  MUTED,
  OVERLAY_WASH,
  SAGE,
  SECTION_RULE,
  SectionEyebrow,
} from "./market-ui";

/** Lifestyle / open — soft editorial overview, feature rows. */
export function MarketLayoutConsumer({
  market,
}: {
  market: MarketDetailPage;
}) {
  return (
    <main className="bg-[#fbfaf7] text-[#101820]">
      {/* Overlay hero — different from split used on defense/commercial */}
      <StackedPageHero
        layout="overlay"
        imageSrc={market.images.hero.src}
        mobileImageSrc={market.images.hero.mobileSrc}
        imageAlt={market.images.hero.alt}
        imageClassName="object-cover object-[center_45%]"
        tone="#0a0f10"
        splitWash={OVERLAY_WASH}
      >
        <div className="hero-animate-copy mx-auto w-full max-w-3xl text-center sm:mx-0 sm:max-w-[34rem] sm:text-left">
          <div className="flex justify-center sm:justify-start">
            <SectionEyebrow light>{market.eyebrow}</SectionEyebrow>
          </div>
          <h1 className="mt-4 type-page-h1 text-white [text-shadow:none] sm:mt-5">
            {market.title}
          </h1>
          <p className="type-section-body mt-5 !text-white/90 sm:mt-6">
            {market.heroBody}
          </p>
          <div className="flex justify-center sm:justify-start">
            <HeroCtas
              primaryHref={market.cta.href}
              primaryLabel={market.cta.label}
            />
          </div>
        </div>
      </StackedPageHero>

      {/* Soft overview — calm editorial, not drill-sergeant caps */}
      <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #f6f4ee 0%, #fbfaf7 48%, #f1f3ec 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-28 -right-16 h-80 w-80 rounded-full blur-3xl"
          style={{ background: `${SAGE}14` }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full blur-3xl"
          style={{ background: "rgba(42, 51, 32, 0.05)" }}
        />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16 xl:gap-20">
            <Reveal variant="up" className="min-w-0 max-w-2xl">
              <SectionEyebrow>Overview</SectionEyebrow>
              <h2 className="mt-5 font-display text-[1.65rem] leading-[1.18] font-semibold tracking-[-0.02em] text-[#1c221c] normal-case sm:text-[2.05rem] lg:text-[2.4rem]">
                Portable backup for camping, RV power, and emergency home use
                when the grid cannot be{" "}
                <span style={{ color: SAGE }}>trusted.</span>
              </h2>
              <p
                className="mt-5 max-w-xl text-base leading-[1.75] sm:text-[1.0625rem]"
                style={{ color: MUTED }}
              >
                {market.body}
              </p>
            </Reveal>

            <Reveal variant="up" delay={80} className="min-w-0">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10">
                {market.stats.map((stat) => (
                  <li key={stat.label} className="min-w-0">
                    <p
                      className="font-display text-[1.55rem] leading-none font-semibold tracking-tight normal-case sm:text-[1.75rem]"
                      style={{ color: SAGE }}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-2 max-w-[16ch] text-sm leading-snug text-[#4f5852] normal-case sm:text-[0.9375rem]">
                      {stat.label}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <MarketSpotlightSection spotlight={market.spotlight} />

      {/* Large feature rows — callouts */}
      <section className="bg-white py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          <Reveal variant="up" className="text-center">
            <SectionEyebrow center>Consumer</SectionEyebrow>
            <h2 className="mt-3 font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem]">
              Camping, RV Power &{" "}
              <span style={{ color: SAGE }}>Emergency Home Backup.</span>
            </h2>
          </Reveal>

          <ul className="mt-10 space-y-0">
            {market.callouts.map((callout, index) => (
              <Reveal key={callout.title} variant="up" delay={index * 50}>
                <li
                  className="border-b py-6 first:border-t sm:py-7"
                  style={{ borderColor: SECTION_RULE }}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                    <h3 className="font-display text-2xl font-bold tracking-tight uppercase sm:text-[1.75rem]">
                      {callout.title}
                    </h3>
                    <p
                      className="max-w-md text-base leading-[1.55] sm:text-right"
                      style={{ color: MUTED }}
                    >
                      {callout.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
