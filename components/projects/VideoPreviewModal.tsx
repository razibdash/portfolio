"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PlayCircle, X } from "lucide-react";

export function VideoPreviewModal({
  title,
  videoUrl,
}: {
  title: string;
  videoUrl?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
        data-cursor="Watch"
      >
        <PlayCircle className="h-4 w-4" />
        Watch Demo
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[95] bg-slate-950/60 px-4 py-8 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-preview-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setOpen(false)}
          >
            <motion.div
              className="mx-auto mt-12 w-full max-w-4xl overflow-hidden rounded-[2rem] border border-line bg-paper shadow-soft"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-line p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-600 dark:text-brand-300">
                    Project Demo
                  </p>
                  <h2 id="video-preview-title" className="mt-1 font-display text-2xl font-semibold">
                    {title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close demo video"
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:text-ink focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                  data-cursor="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="aspect-video bg-slate-950">
                {videoUrl ? (
                  <iframe
                    src={videoUrl}
                    title={`${title} demo video`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="grid h-full place-items-center p-8 text-center text-white">
                    <div>
                      <PlayCircle className="mx-auto h-14 w-14 text-brand-300" />
                      <p className="mt-5 font-display text-3xl font-semibold">
                        Demo video coming soon
                      </p>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                        This modal is ready for an embedded video. Add a demo URL
                        to the project data when the walkthrough is available.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
