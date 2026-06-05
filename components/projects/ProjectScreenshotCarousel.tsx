"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export function ProjectScreenshotCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const screenshots = images.length > 0 ? images : ["/projects/saas-dashboard.svg"];
  const [active, setActive] = useState(0);

  function showPrevious() {
    setActive((current) => (current === 0 ? screenshots.length - 1 : current - 1));
  }

  function showNext() {
    setActive((current) => (current === screenshots.length - 1 ? 0 : current + 1));
  }

  return (
    <div className="rounded-[2rem] border border-line bg-white/65 p-3 shadow-soft backdrop-blur dark:bg-slate-950/50">
      <div className="relative overflow-hidden rounded-[1.5rem] bg-brand-500/5">
        <Image
          src={screenshots[active]}
          alt={`${title} screenshot ${active + 1}`}
          width={1400}
          height={850}
          priority
          className="aspect-[1.65] w-full object-cover"
        />
        {screenshots.length > 1 && (
          <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous screenshot"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-slate-950/55 text-white backdrop-blur transition hover:bg-slate-950/75 focus:outline-none focus:ring-2 focus:ring-white/60"
              data-cursor="View"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next screenshot"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-slate-950/55 text-white backdrop-blur transition hover:bg-slate-950/75 focus:outline-none focus:ring-2 focus:ring-white/60"
              data-cursor="View"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      {screenshots.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {screenshots.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show screenshot ${index + 1}`}
              aria-current={active === index}
              className="shrink-0 overflow-hidden rounded-xl border border-line opacity-70 transition hover:opacity-100 aria-current:opacity-100 aria-current:ring-2 aria-current:ring-brand-500/40"
            >
              <Image
                src={image}
                alt=""
                width={150}
                height={90}
                className="h-16 w-24 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
