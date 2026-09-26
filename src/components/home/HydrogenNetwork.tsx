import Image from "next/image";
import {
  ArrowRight,
  Globe2,
  Leaf,
  Network,
  RefreshCw,
} from "lucide-react";
import { hydrogenNetwork } from "@/lib/home-content";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";

/** Existing site accents — sage for headlines, sageOnDark for chrome on dark. */
const sage = "#6e7f42";
const sageOnDark = "#849363";
const forest = "#2a3320";
const cream = "#f3efe4";

const pageInset = "mx-auto w-full max-w-[1760px] px-5 sm:px-6 lg:px-10";
const sectionY = "py-14 sm:py-18 lg:py-20";

const pillarIcons = [Network, Globe2, RefreshCw, Leaf] as const;

export function HydrogenNetwork() {
  const { eyebrow, headingBefore, headingAccent, body, cards, flow, pillars } =
    hydrogenNetwork;

  return (
    <section
      id="hydrogen-network"
      className={`scroll-mt-28 overflow-hidden bg-[#060806] text-white ${sectionY}`}
    >
      <div className={pageInset}>
        <Reveal variant="up">
          <header className="mx-auto max-w-3xl text-center">
            <p className="type-eyebrow" style={{ color: sageOnDark }}>
              {eyebrow}
            </p>
            <h2 className="type-section-h2 mt-3 text-white sm:mt-4">
              {headingBefore}{" "}
              <span style={{ color: sage }}>{headingAccent}</span>
            </h2>
            <p className="type-section-body mx-auto mt-4 max-w-2xl !text-white sm:mt-5">
              {body}
            </p>
          </header>
        </Reveal>

        <RevealStagger
          className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"
          step={60}
          variant="up"
        >
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e1210] shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_18px_40px_-28px_rgba(0,0,0,0.65)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#060806]">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0e1210]/35 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col border-t border-[#e8e4da]/70 bg-[#f7f6f2] px-5 py-5 sm:px-6 sm:py-6">
                <h3 className="type-card-title text-[#141a14]">{card.title}</h3>
                <p className="type-card-body mt-2.5 text-[#5c6560]">{card.body}</p>
              </div>
            </article>
          ))}
        </RevealStagger>

        <Reveal variant="up" delay={80} className="hidden sm:block">
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#e8e4da] bg-[#f7f6f2] shadow-[0_12px_36px_-20px_rgba(0,0,0,0.55)] sm:mt-12 lg:max-w-4xl">
            <div
              className="flex flex-wrap items-center justify-center gap-y-4 px-4 py-5 sm:px-6 sm:py-6 lg:flex-nowrap lg:justify-between lg:gap-2 lg:px-8"
              role="list"
            >
              {flow.map((step, index) => (
                <div
                  key={step}
                  role="listitem"
                  className="flex items-center gap-2 sm:gap-3"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span
                      className="grid size-8 shrink-0 place-items-center rounded-full text-sm font-bold tabular-nums text-white sm:size-9"
                      style={{ background: sage }}
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="type-card-label tracking-[0.12em] whitespace-nowrap text-[#141a14]">
                      {step}
                    </p>
                  </div>
                  {index < flow.length - 1 ? (
                    <ArrowRight
                      className="mx-1 size-6 shrink-0 sm:mx-2 sm:size-7 lg:mx-3"
                      style={{ color: sage }}
                      strokeWidth={2.5}
                      aria-hidden
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <RevealStagger
          className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-14 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-16 lg:grid-cols-4 lg:gap-x-10"
          step={50}
          variant="up"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillarIcons[index] ?? Network;
            return (
              <div
                key={pillar.title}
                className="mx-auto flex max-w-[18rem] flex-col items-center text-center sm:mx-0 sm:max-w-none"
              >
                <span
                  className="grid size-12 place-items-center rounded-full border-2 border-white shadow-[0_0_0_1px_rgba(255,255,255,0.2)]"
                  style={{ background: cream, color: forest }}
                  aria-hidden
                >
                  <Icon className="size-5" strokeWidth={1.6} />
                </span>
                <h3
                  className="type-card-label mt-4 tracking-[0.14em] sm:mt-5 sm:tracking-[0.16em]"
                  style={{ color: sage }}
                >
                  {pillar.title}
                </h3>
                <p className="type-card-body-on-dark mt-3 hidden max-w-[16rem] !text-white sm:block lg:max-w-none">
                  {pillar.body}
                </p>
              </div>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
