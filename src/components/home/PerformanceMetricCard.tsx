import type { LucideIcon } from "lucide-react";
import { StatGauge } from "./StatGauge";

type PerformanceMetricCardProps = {
  icon: LucideIcon;
  value: string;
  unit?: string;
  title: string;
  body: string;
  percent?: number;
};

const PRIMARY_GREEN = "#6e7f42";

/**
 * Compact beveled metric card — gauge + divider icon + title/body.
 * Sized for even 2×2 / 4-col grids across breakpoints.
 */
export function PerformanceMetricCard({
  icon: Icon,
  value,
  unit,
  title,
  body,
  percent = 72,
}: PerformanceMetricCardProps) {
  return (
    <div
      className="motion-hover-lift h-full w-full"
      style={{
        filter: "drop-shadow(0 8px 18px rgba(22, 28, 22, 0.08))",
      }}
    >
      <article
        className="relative flex h-full flex-col items-center bg-white px-3.5 pt-4 pb-4 sm:px-4 sm:pt-5 sm:pb-5"
        style={{
          clipPath:
            "polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 12px)",
          boxShadow: "inset 0 0 0 1px #e6e3da",
        }}
      >
        <div className="mx-auto aspect-square w-full max-w-[128px] sm:max-w-[144px]">
          <StatGauge value={value} unit={unit} percent={percent} size={144} />
        </div>

        <div className="relative mt-3 mb-0.5 flex w-[78%] max-w-[12rem] shrink-0 items-center justify-center">
          <div
            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2"
            style={{ background: "#d8d4ca" }}
            aria-hidden
          />
          <div className="relative z-[1] bg-white px-2.5">
            <Icon
              className="size-5 sm:size-6"
              strokeWidth={1.7}
              style={{ color: PRIMARY_GREEN }}
              aria-hidden
            />
          </div>
        </div>

        <h3 className="mt-2.5 flex min-h-[2.4em] max-w-[15rem] items-start justify-center text-center font-display text-base leading-snug font-bold tracking-[0.02em] text-[#1a1c16] uppercase sm:min-h-[2.5em] sm:text-[1.05rem]">
          {title}
        </h3>
        <p className="mt-1 min-h-[2.2em] max-w-[14rem] text-center text-[0.9375rem] leading-snug text-[#5c584e] sm:text-[1.05rem]">
          {body}
        </p>
      </article>
    </div>
  );
}
