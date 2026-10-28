import { notFound } from "next/navigation";

/** /markets/ai-backup2 is turned off. Uncomment the block below to restore it. */
export default function AiBackupReferencePage() {
  notFound();
}

/*
import type { Metadata } from "next";

import { MarketLayoutAiBackup } from "@/components/markets/MarketLayoutAiBackup";
import { aiBackupPage } from "@/lib/markets/ai-backup-content";

export const metadata: Metadata = {
  title: "AI Backup — Site Content",
  description:
    "Site copy for the AI Backup page, shown here for comparison with /markets/ai-backup.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/markets/ai-backup2",
  },
};

export default function AiBackupReferencePage() {
  return <MarketLayoutAiBackup tone="light" page={aiBackupPage} />;
}
*/
