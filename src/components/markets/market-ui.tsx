import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const SAGE = "#6e7f42";
export const SAGE_CTA = "#849363";
export const CREAM = "#fbfaf7";
export const MUTED = "#66717d";
export const INK = "#101820";
export const SECTION_RULE = "#e0e3dd";
export const DARK = "#0a0f10";

export function SectionEyebrow({
  children,
  light = false,
  center = false,
}: {
  children: React.ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  const color = light ? "#ffffff" : SAGE;

  return (
    <div
      className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}
    >
      <span aria-hidden="true" className="relative block h-[13px] w-[38px]">
        <span
          className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2"
          style={{ backgroundColor: color }}
        />
        <span
          className="absolute top-1/2 left-0 h-[9px] w-[9px] -translate-y-1/2 rotate-45 border-b border-l"
          style={{ borderColor: color }}
        />
      </span>
      <p
        className="text-base font-semibold tracking-[0.14em] uppercase sm:text-[0.9375rem]"
        style={{ color }}
      >
        {children}
      </p>
    </div>
  );
}

export function TitleWithAccent({ title }: { title: string }) {
  if (title.includes(" & ")) {
    const [before, after] = title.split(" & ");
    const afterWords = after.trim().split(/\s+/);
    if (afterWords.length <= 2) {
      return (
        <>
          {before} & <span style={{ color: SAGE }}>{after}</span>
        </>
      );
    }
  }

  const parts = title.trim().split(/\s+/);
  if (parts.length < 2) return <>{title}</>;

  const head = parts.slice(0, -1).join(" ");
  const tail = parts[parts.length - 1];

  return (
    <>
      {head} <span style={{ color: SAGE }}>{tail}</span>
    </>
  );
}

export function HeroCtas({
  primaryHref,
  primaryLabel,
  secondaryHref = "/markets",
  secondaryLabel = "All Markets",
}: {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
      <Link
        href={primaryHref}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
        style={{ background: SAGE_CTA }}
      >
        {primaryLabel}
        <ArrowRight className="size-5 shrink-0" aria-hidden />
      </Link>
      <Link
        href={secondaryHref}
        className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/50 px-7 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
      >
        <ArrowLeft
          className="size-4 shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5"
          strokeWidth={2}
          aria-hidden
        />
        {secondaryLabel}
      </Link>
    </div>
  );
}

export const SPLIT_WASH =
  "linear-gradient(90deg, #0a0f10 0%, #0a0f10 44%, rgba(10,15,16,0.82) 52%, rgba(10,15,16,0.35) 62%, transparent 74%)";

export const OVERLAY_WASH =
  "linear-gradient(90deg, #0a0f10 0%, rgba(10,15,16,0.88) 38%, rgba(10,15,16,0.45) 58%, transparent 78%)";
