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

/** Lime accent from the Cleaner / Quieter / Stronger board */
const accent = "#8CC63F";
const pageInset = "mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10";

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
      className="scroll-mt-28 bg-white py-10 sm:py-12 lg:py-14"
    >
      <div className={pageInset}>
        <Reveal variant="up">
          <header className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-[1.85rem] leading-[0.92] font-bold tracking-[-0.02em] text-[#111] uppercase sm:text-4xl lg:text-[2.75rem] xl:text-[3.15rem]">
              {headingBefore}{" "}
              <span style={{ color: accent }}>{headingAccent}</span>{" "}
              {headingAfter}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed text-[#555] sm:mt-4 sm:text-sm lg:text-[15px]">
              {body}
            </p>
          </header>
        </Reveal>

        <div className="mt-7 grid gap-3 sm:mt-8 lg:mt-9 lg:grid-cols-2 lg:gap-4">
          {/* Left — dark comparison table */}
          <Reveal variant="up" className="min-w-0">
            <div className="flex h-full flex-col overflow-hidden rounded-lg bg-[#1c1c1c] px-4 py-5 text-white sm:rounded-xl sm:px-5 sm:py-6 lg:px-6">
              <p className="font-display text-base font-bold tracking-[0.06em] uppercase sm:text-lg lg:text-xl">
                <span style={{ color: accent }}>HYDROGEN</span>
                <span className="text-white"> VS DIESEL</span>
              </p>

              <div className="mt-4 flex-1 sm:mt-5">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-white/[0.12]">
                      <th className="w-[34%] pb-2.5 text-[9px] font-semibold tracking-[0.18em] text-white/50 uppercase sm:text-[10px]">
                        {tableHeaders.metric}
                      </th>
                      <th
                        className="w-[36%] px-1 pb-2.5 text-center text-[9px] font-bold tracking-[0.16em] uppercase sm:text-[10px]"
                        style={{ color: accent }}
                      >
                        {tableHeaders.hydrogen}
                      </th>
                      <th className="w-[30%] pb-2.5 text-center text-[9px] font-semibold tracking-[0.16em] text-white/50 uppercase sm:text-[10px]">
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
                          className="border-b border-white/[0.1] last:border-b-0"
                        >
                          <td className="py-3 pr-1 align-middle sm:py-3.5">
                            <span className="flex items-center gap-2 sm:gap-2.5">
                              <Icon
                                className="size-3.5 shrink-0 sm:size-4"
                                style={{ color: accent }}
                                strokeWidth={1.75}
                                aria-hidden
                              />
                              <span className="text-[11px] font-semibold text-white sm:text-xs">
                                {row.metric}
                              </span>
                            </span>
                          </td>
                          <td className="px-1 py-2 align-middle">
                            <div
                              className="mx-auto flex min-h-[2.35rem] items-center justify-center gap-1.5 rounded border px-1.5 py-1.5 text-center text-[10px] font-bold sm:min-h-[2.6rem] sm:text-[11px]"
                              style={{
                                borderColor: accent,
                                background: "rgba(140, 198, 63, 0.14)",
                                color: accent,
                                boxShadow: "0 0 16px rgba(140, 198, 63, 0.2)",
                              }}
                            >
                              <span
                                className="size-1.5 shrink-0 rounded-full"
                                style={{ background: accent }}
                                aria-hidden
                              />
                              {row.hydrogen}
                            </div>
                          </td>
                          <td className="py-3 pl-1 text-center align-middle text-[10px] font-medium text-white/70 sm:py-3.5 sm:text-[11px]">
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
            <div className="flex h-full flex-col overflow-hidden rounded-lg border border-[#e8e8e8] bg-[#f5f5f5] sm:rounded-xl">
              <div className="relative aspect-[2.75/1] w-full bg-[#e8e8e8] sm:aspect-[2.6/1]">
                <Image
                  src={productImageSrc}
                  alt={productImageAlt}
                  fill
                  className="object-cover object-[center_40%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <ul className="flex flex-1 flex-col justify-center gap-3.5 px-4 py-4 sm:gap-4 sm:px-5 sm:py-5 lg:px-6">
                {benefits.map((item, index) => {
                  const Icon = benefitIcons[index] ?? Leaf;
                  return (
                    <li key={item.title} className="flex gap-3">
                      <span
                        className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border-[1.5px] bg-white sm:size-9"
                        style={{ borderColor: accent, color: accent }}
                      >
                        <Icon
                          className="size-3.5 sm:size-4"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                      </span>
                      <div className="min-w-0">
                        <p
                          className="font-display text-[11px] font-bold tracking-[0.08em] uppercase sm:text-xs"
                          style={{ color: accent }}
                        >
                          {item.title}
                        </p>
                        <p className="mt-0.5 text-[12px] leading-snug text-[#444] sm:text-[13px]">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Bottom pillars */}
        <RevealStagger
          className="mt-3 grid grid-cols-2 gap-x-4 gap-y-6 rounded-lg border border-[#e8e8e8] bg-[#f5f5f5] px-4 py-6 sm:mt-4 sm:grid-cols-3 sm:rounded-xl sm:px-6 sm:py-7 lg:grid-cols-5 lg:gap-3 lg:px-8"
          step={45}
        >
          {pillars.map((pillar, index) => {
            const Icon = pillarIcons[index] ?? ShieldCheck;
            return (
              <div key={pillar.title} className="text-center">
                <span
                  className="mx-auto grid size-9 place-items-center sm:size-10"
                  style={{ color: accent }}
                >
                  <Icon className="size-5 sm:size-6" strokeWidth={1.5} aria-hidden />
                </span>
                <p className="mt-2 font-display text-[10px] font-bold tracking-[0.1em] text-[#111] uppercase sm:text-[11px]">
                  {pillar.title}
                </p>
                <p className="mt-1 text-[10px] leading-snug text-[#666] sm:text-[11px]">
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
