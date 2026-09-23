import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Droplets,
  Globe2,
  KeyRound,
  Leaf,
  Lock,
  ShieldCheck,
  Timer,
  TrendingUp,
  VolumeX,
  Wrench,
} from "lucide-react";
import { whyHydrogen } from "@/lib/home-content";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";

/** Match homepage section accent + layout tokens */
const sage = "#6e7f42";
const pageInset = "mx-auto w-full max-w-[1760px] px-6 lg:px-10";
const sectionY = "py-14 sm:py-18 lg:py-20";

const metricIcons: LucideIcon[] = [VolumeX, Leaf, Wrench, KeyRound, Timer];
const benefitIcons: LucideIcon[] = [Leaf, VolumeX, Wrench, Timer];
const pillarIcons: LucideIcon[] = [
  ShieldCheck,
  TrendingUp,
  Droplets,
  Globe2,
  Lock,
];

export function WhyHydrogen() {
  const {
    eyebrow,
    headingBefore,
    headingAccent,
    headingAfter,
    body,
    tableHeaders,
    comparison,
    productImageSrc,
    productImageAlt,
    benefits,
    pillars,
  } = whyHydrogen;

  return (
    <section
      id="why-hydrogen"
      className={`scroll-mt-28 bg-[#fbfaf7] ${sectionY}`}
    >
      <div className={pageInset}>
        <Reveal variant="up">
          <header className="mx-auto max-w-3xl text-center">
            <p className="type-eyebrow" style={{ color: sage }}>
              {eyebrow}
            </p>
            <h2 className="type-section-h2 mt-3 text-[#1a1c16]">
              {headingBefore}{" "}
              <span style={{ color: sage }}>{headingAccent}</span>{" "}
              {headingAfter}
            </h2>
            <p className="type-section-body mx-auto mt-4 max-w-2xl">{body}</p>
          </header>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2 lg:gap-6">
          {/* Left — comparison table */}
          <Reveal variant="up" className="min-w-0">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#141814] px-5 py-6 text-white sm:px-6 sm:py-8 lg:px-8">
              <h3 className="type-card-title text-white">
                <span style={{ color: sage }}>HYDROGEN</span>
                <span> VS DIESEL</span>
              </h3>

              <div className="mt-6 flex-1 sm:mt-8">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-white/15">
                      <th className="type-card-label w-[34%] pb-3 text-white/75">
                        {tableHeaders.metric}
                      </th>
                      <th className="type-card-label w-[38%] px-2 pb-3 text-center text-[#c5d48a]">
                        {tableHeaders.hydrogen}
                      </th>
                      <th className="type-card-label w-[28%] pb-3 text-center text-white/75">
                        {tableHeaders.diesel}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => {
                      const Icon = metricIcons[index] ?? Leaf;
                      return (
                        <tr
                          key={row.metric}
                          className="border-b border-white/10 last:border-b-0"
                        >
                          <td className="py-3.5 pr-2 align-middle sm:py-4">
                            <span className="flex items-center gap-2.5 sm:gap-3">
                              <Icon
                                className="size-4 shrink-0 sm:size-[1.125rem]"
                                style={{ color: sage }}
                                strokeWidth={1.75}
                                aria-hidden
                              />
                              <span className="font-display text-sm font-bold tracking-[0.02em] text-white uppercase sm:text-base">
                                {row.metric}
                              </span>
                            </span>
                          </td>
                          <td className="px-1.5 py-2.5 align-middle sm:px-2">
                            <div
                              className="mx-auto flex min-h-11 max-w-[11.5rem] items-center justify-center gap-2 rounded-md px-2.5 py-2 text-center font-display text-sm font-bold tracking-[0.04em] text-white uppercase sm:min-h-12 sm:max-w-none sm:text-[15px]"
                              style={{
                                background: sage,
                                boxShadow: "0 0 0 1px rgba(255,255,255,0.12)",
                              }}
                            >
                              <span
                                className="size-1.5 shrink-0 rounded-full bg-white"
                                aria-hidden
                              />
                              {row.hydrogen}
                            </div>
                          </td>
                          <td className="py-3.5 pl-1 text-center align-middle text-sm font-medium text-white/85 sm:py-4 sm:text-base">
                            {row.diesel}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {/* Right — visual + benefits */}
          <Reveal variant="fade" className="min-w-0">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e0dcd3] bg-white">
              <div className="relative aspect-[2.4/1] w-full bg-[#eceae3] sm:aspect-[2.5/1]">
                <Image
                  src={productImageSrc}
                  alt={productImageAlt}
                  fill
                  className="object-cover object-[center_40%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <ul className="flex flex-1 flex-col justify-center gap-5 px-5 py-6 sm:gap-6 sm:px-6 sm:py-8 lg:px-8">
                {benefits.map((item, index) => {
                  const Icon = benefitIcons[index] ?? Leaf;
                  return (
                    <li key={item.title} className="flex gap-4">
                      <span
                        className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full border-2 bg-white"
                        style={{ borderColor: sage, color: sage }}
                      >
                        <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <p
                          className="type-card-title-sm"
                          style={{ color: sage }}
                        >
                          {item.title}
                        </p>
                        <p className="type-card-body mt-1.5">{item.body}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Bottom pillars — readable icon strip */}
        <RevealStagger
          className="mt-4 grid grid-cols-1 divide-y divide-[#eeeae3] overflow-hidden rounded-2xl border border-[#e0dcd3] bg-white sm:mt-5 sm:grid-cols-2 sm:divide-x lg:grid-cols-5 lg:divide-y-0"
          step={45}
        >
          {pillars.map((pillar, index) => {
            const Icon = pillarIcons[index] ?? ShieldCheck;
            return (
              <div
                key={pillar.title}
                className="flex gap-3 px-4 py-4 sm:px-5 sm:py-5 lg:flex-col lg:items-center lg:px-3 lg:py-5 xl:px-4"
              >
                <span
                  className="grid size-[3.25rem] shrink-0 place-items-center rounded-full border sm:size-14"
                  style={{
                    borderColor: "rgba(110, 127, 66, 0.45)",
                    color: sage,
                  }}
                >
                  <Icon
                    className="size-6 sm:size-7"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </span>

                <div className="min-w-0 lg:mt-2.5 lg:text-center">
                  <p className="font-display text-base font-bold tracking-[0.08em] text-[#1a1c16] uppercase sm:text-lg">
                    {pillar.title}
                  </p>
                  <p className="mt-1 text-base leading-snug text-[#5c584e] sm:mt-1.5 sm:text-[1.0625rem] sm:leading-snug lg:mx-auto lg:max-w-[13.5rem]">
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
