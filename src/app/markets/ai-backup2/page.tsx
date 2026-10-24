import type { Metadata } from "next";

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
 * Dark layout of the AI Backup page, with the client's original mockup copy.
 * Image slots are independent of the live page.
 */
export default function AiBackupReferencePage() {
  return (
    <MarketLayoutAiBackup tone="dark" page={aiBackupReferencePage} />
  );
}
