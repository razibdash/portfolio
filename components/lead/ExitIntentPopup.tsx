"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Sparkles, X } from "lucide-react";
import { LeadCaptureForm, type LeadField } from "@/components/lead/LeadCaptureForm";

const storageKey = "portfolio-exit-estimate-dismissed";

const estimateFields: LeadField[] = [
  {
    name: "name",
    label: "Name",
    placeholder: "Your name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    required: true,
  },
  {
    name: "projectType",
    label: "Project Type",
    type: "select",
    placeholder: "Select project type",
    required: true,
    options: [
      "Landing Page",
      "Business Website",
      "Ecommerce Website",
      "Dashboard / Admin Panel",
      "AI Chatbot",
      "AI Automation Tool",
      "Custom Web App",
      "Other",
    ],
  },
];

const estimateBenefits = [
  "Best project type for your goal",
  "Suggested feature scope",
  "Starting budget direction",
];

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    setDismissed(window.localStorage.getItem(storageKey) === "true");
  }, []);

  useEffect(() => {
    if (dismissed) return;

    function handleMouseOut(event: MouseEvent) {
      if (event.clientY <= 0 && !event.relatedTarget) {
        setOpen(true);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closePopup();
      }
    }

    document.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dismissed]);

  function closePopup() {
    window.localStorage.setItem(storageKey, "true");
    setDismissed(true);
    setOpen(false);
  }

  function handleSuccess() {
    window.localStorage.setItem(storageKey, "true");
    setDismissed(true);
    window.setTimeout(() => setOpen(false), 900);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] bg-slate-950/50 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="exit-estimate-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={closePopup}
        >
          <motion.div
            className="mx-auto mt-8 max-h-[calc(100vh-4rem)] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-line bg-paper p-4 shadow-soft md:mt-14 md:p-5"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="relative grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
              <button
                type="button"
                onClick={closePopup}
                className="absolute right-1 top-1 z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-paper/85 text-muted shadow-sm backdrop-blur transition hover:text-ink focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                aria-label="Close free estimate popup"
                data-cursor="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="overflow-hidden rounded-[1.6rem] bg-brand-600 p-6 text-white shadow-glow md:p-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-blue-50">
                  <Sparkles className="h-4 w-4" />
                  Free Estimate
                </div>

                <div className="mt-6 rounded-[1.4rem] border border-white/15 bg-white/10 p-4">
                  <svg
                    viewBox="0 0 360 230"
                    role="img"
                    aria-labelledby="exit-popup-illustration-title"
                    className="h-auto w-full"
                  >
                    <title id="exit-popup-illustration-title">
                      Project estimate dashboard illustration
                    </title>
                    <defs>
                      <linearGradient id="estimateCard" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.82" />
                      </linearGradient>
                      <linearGradient id="estimateAccent" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#93c5fd" />
                        <stop offset="100%" stopColor="#ffffff" />
                      </linearGradient>
                    </defs>
                    <rect width="360" height="230" rx="26" fill="#1d4ed8" />
                    <circle cx="300" cy="42" r="58" fill="#60a5fa" opacity="0.34" />
                    <circle cx="58" cy="186" r="72" fill="#93c5fd" opacity="0.18" />
                    <rect x="43" y="42" width="274" height="146" rx="22" fill="url(#estimateCard)" />
                    <rect x="66" y="67" width="96" height="12" rx="6" fill="#1d4ed8" opacity="0.88" />
                    <rect x="66" y="91" width="176" height="10" rx="5" fill="#94a3b8" opacity="0.45" />
                    <rect x="66" y="112" width="136" height="10" rx="5" fill="#94a3b8" opacity="0.35" />
                    <rect x="66" y="143" width="74" height="24" rx="12" fill="#2563eb" />
                    <rect x="154" y="143" width="82" height="24" rx="12" fill="#dbeafe" />
                    <path
                      d="M260 76c16 7 25 20 25 38 0 23-18 41-41 41-18 0-32-10-38-25"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                    <path
                      d="M206 130c-4-13-2-27 7-38 9-12 22-18 36-18"
                      fill="none"
                      stroke="url(#estimateAccent)"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                    <circle cx="244" cy="115" r="18" fill="#eff6ff" />
                    <path
                      d="m235 115 7 7 14-17"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em]">
                  Quick project clarity before you go.
                </h2>
                <p className="mt-4 leading-7 text-blue-50">
                  Share the basics and I will point you toward the right website,
                  dashboard, AI tool, or automation plan.
                </p>

                <div className="mt-6 grid gap-3">
                  {estimateBenefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 text-sm font-semibold text-blue-50"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-2 md:p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600 dark:text-brand-300">
                  Free Estimate
                </p>
                <h2
                  id="exit-estimate-title"
                  className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] md:text-4xl"
                >
                  Want a Free Project Estimate?
                </h2>

                <p className="mt-4 leading-7 text-muted">
                  Tell me about your project and I&apos;ll suggest the best
                  solution.
                </p>

                <LeadCaptureForm
                  formType="estimate"
                  fields={estimateFields}
                  submitLabel="Get Free Estimate"
                  successMessage="Estimate request sent. I will reply soon."
                  compact
                  className="mt-6"
                  onSuccess={handleSuccess}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
