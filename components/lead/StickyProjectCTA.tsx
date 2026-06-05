"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function StickyProjectCTA() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 left-1/2 z-40 inline-flex -translate-x-1/2 items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-1 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/40 md:left-auto md:right-24 md:translate-x-0"
      data-cursor="Open"
    >
      Start a Project
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
