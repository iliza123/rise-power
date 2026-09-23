import Image from "next/image";

type StackedPageHeroProps = {
  imageSrc: string;
  imageAlt: string;
  /** Extra classes for the image (object-position, etc.). */
  imageClassName?: string;
  /** Section background when copy sits below the photo (below xl). */
  tone?: string;
  /** Shorter desktop height for article / detail heroes. */
  compact?: boolean;
  /** Max width for the copy column (default 1440px). */
  contentMaxWidthClassName?: string;
  /**
   * `overlay` (default): full-bleed image with left gradient for copy.
   * `split`: left content + original-aspect clear right image (xl+).
   */
  layout?: "overlay" | "split";
  /** Intrinsic width for split layout (avoids cover/zoom crop). */
  imageWidth?: number;
  /** Intrinsic height for split layout (avoids cover/zoom crop). */
  imageHeight?: number;
  children: React.ReactNode;
};

/**
 * Page hero: image above / copy below below xl; full-bleed cinematic overlay on xl+.
 * Optional `layout="split"` keeps copy on the left and the photo clear on the right
 * at its original aspect — no cover crop or kenburns zoom.
 */
export function StackedPageHero({
  imageSrc,
  imageAlt,
  imageClassName = "object-cover object-center",
  tone = "#0a100e",
  compact = false,
  contentMaxWidthClassName = "max-w-[1440px]",
  layout = "overlay",
  imageWidth = 1920,
  imageHeight = 1080,
  children,
}: StackedPageHeroProps) {
  const desktopMinH = compact
    ? "xl:min-h-[min(62svh,520px)]"
    : "xl:min-h-[min(100svh,800px)]";
  const copyPad = compact
    ? "xl:pt-28 xl:pb-12"
    : "xl:pt-32 xl:pb-20";

  if (layout === "split") {
    return (
      <section
        className="relative isolate w-full overflow-hidden text-white xl:min-h-[min(78svh,720px)]"
        style={{ backgroundColor: tone }}
      >
        {/* Mobile / tablet — original-aspect image above copy */}
        <div className="relative w-full xl:hidden" style={{ backgroundColor: tone }}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            priority
            quality={100}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>

        {/* Desktop — original-aspect image anchored right; bleeds left under the wash */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[58%] overflow-visible xl:flex xl:items-center xl:justify-end"
          aria-hidden
        >
          <Image
            src={imageSrc}
            alt=""
            width={imageWidth}
            height={imageHeight}
            priority
            quality={100}
            sizes="58vw"
            className="h-full w-auto max-w-none"
          />
        </div>

        {/* Overlay wash — solid under copy, soft blend across the mid seam, clear on the right */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] hidden xl:block"
          aria-hidden
          style={{
            background: `linear-gradient(90deg, ${tone} 0%, ${tone} 38%, ${tone}f2 44%, ${tone}cc 50%, ${tone}66 56%, transparent 64%)`,
          }}
        />

        <div
          className={`relative z-10 mx-auto flex w-full ${contentMaxWidthClassName} flex-col px-6 py-10 sm:px-8 sm:py-12 lg:px-10 xl:min-h-[min(78svh,720px)] xl:justify-center xl:px-10 xl:pt-28 xl:pb-16 2xl:px-14 [&_p]:!text-white`}
        >
          <div className="w-full max-w-[34rem]">{children}</div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`relative flex w-full flex-col overflow-hidden text-white ${desktopMinH}`}
      style={{ backgroundColor: tone }}
    >
      <div className="relative aspect-[3/2] w-full shrink-0 sm:aspect-[16/10] lg:aspect-[21/9] xl:absolute xl:inset-0 xl:aspect-auto">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className={`hero-animate-media ${imageClassName}`}
        />
        <div className="pointer-events-none absolute inset-0 hidden xl:block" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-r from-[#071016]/95 via-[#071016]/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071016]/45 via-transparent to-transparent" />
        </div>
      </div>

      <div
        className={`relative z-10 mx-auto flex w-full ${contentMaxWidthClassName} flex-1 flex-col justify-center px-6 pt-8 pb-12 sm:px-8 sm:pt-10 sm:pb-14 lg:px-10 ${desktopMinH} ${copyPad} [&_p]:!text-white`}
      >
        {children}
      </div>
    </section>
  );
}
