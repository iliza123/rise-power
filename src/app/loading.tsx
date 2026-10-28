import Image from "next/image";

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center overflow-hidden bg-cream"
      role="status"
      aria-live="polite"
      aria-label="Loading Rise Mission Power"
    >
      <style>{`html, body { overflow: hidden !important; }`}</style>
      <Image
        src="/media/brand/rise-mission-power-logo.svg"
        alt=""
        width={573}
        height={150}
        priority
        className="h-10 w-auto animate-pulse sm:h-12"
      />
    </div>
  );
}
