import type { Metadata } from "next";
import Link from "next/link";

import { MarketLayoutAiBackup } from "@/components/markets/MarketLayoutAiBackup";
import { aiBackupReferencePage } from "@/lib/markets/ai-backup-reference-content";

export const metadata: Metadata = {
  title: "AI Backup — Client Reference Content",
  description:
    "Client reference content from the original AI Backup mockup. For review against the live page.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/markets/ai-backup2",
  },
};

/**
 * Same layout as /markets/ai-backup, with the client's original mockup copy.
 * Share this URL to compare existing vs live site content.
 */
export default function AiBackupReferencePage() {
  return (
    <MarketLayoutAiBackup
      page={aiBackupReferencePage}
      compareBanner={
        <div className="border-b border-[#d9d4c8] bg-[#101820] text-white">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-10">
            <p className="text-sm text-white/80">
              Client reference content — original mockup wording for comparison.
            </p>
            <Link
              href="/markets/ai-backup"
              className="text-sm font-semibold tracking-wide text-[#849363] uppercase hover:opacity-90"
            >
              View new site content →
            </Link>
          </div>
        </div>
      }
    />
  );
}
