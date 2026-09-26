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

const sage = "#6e7f42";
const lime = "#b5d13c";
const pageInset = "mx-auto w-full max-w-[1760px] px-6 lg:px-10";

const pillarIcons = [Network, Globe2, RefreshCw, Leaf] as const;

export function HydrogenNetwork() {
  const { eyebrow, headingBefore, headingAccent, body, cards, flow, pillars } =
    hydrogenNetwork;

  return (
    <section
      id="hydrogen-network"
      className="scroll-mt-28 overflow-hidden bg-[#0a1016] py-12 text-white sm:py-14 lg:py-16"
    >
      <div className={pageInset}>
        <Reveal variant="up">
          <header className="mx-auto max-w-3xl text-center">
            <p className="type-eyebrow" style={{ color: lime }}>
              {eyebrow}
            </p>
            <h2 className="type-section-h2 mt-3 text-white">
              {headingBefore}{" "}
              <span style={{ color: lime }}>{headingAccent}</span>
            </h2>
            <p className="type-section-body mx-auto mt-4 max-w-3xl !text-white/80">
              {body}
            </p>
          </header>
        </Reveal>

        <RevealStagger
          className="mt-9 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4"
          step={60}
          variant="up"
        >
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#111820]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0a1016]">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col bg-white px-4 py-4 sm:px-5 sm:py-5">
                <h3 className="type-card-title text-[#141a14]">{card.title}</h3>
                <p className="type-card-body mt-2 text-[#5c584e]">{card.body}</p>
              </div>
            </article>
          ))}
        </RevealStagger>

        <Reveal variant="up" delay={80}>
          <div className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-[#111820] sm:mt-10">
            <div className="flex flex-col divide-y divide-white/10 sm:flex-row sm:divide-x sm:divide-y-0">
              {flow.map((step, index) => (
                <div
                  key={step}
                  className="flex flex-1 items-center justify-center gap-3 px-4 py-4 sm:px-5 sm:py-5"
                >
                  <p
                    className="type-card-label text-center"
                    style={{ color: lime }}
                  >
                    {step}
                  </p>
                  {index < flow.length - 1 ? (
                    <ArrowRight
                      className="hidden size-4 shrink-0 sm:block"
                      style={{ color: sage }}
                      strokeWidth={2}
                      aria-hidden
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <RevealStagger
          className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
          step={50}
          variant="up"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillarIcons[index] ?? Network;
            return (
              <div key={pillar.title} className="flex gap-3 sm:flex-col sm:gap-3">
                <span
                  className="grid size-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5"
                  style={{ color: lime }}
                >
                  <Icon className="size-5" strokeWidth={1.6} aria-hidden />
                </span>
                <div>
                  <h3 className="type-card-label text-white">{pillar.title}</h3>
                  <p className="type-card-body mt-1.5 !text-[0.9375rem] !text-white/70 sm:!text-base">
                    {pillar.body}
                  </p>
                </div>
              </div>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
