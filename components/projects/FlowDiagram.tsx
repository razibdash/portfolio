import { ArrowRight } from "lucide-react";

export function FlowDiagram({
  title,
  steps,
}: {
  title: string;
  steps: string[];
}) {
  return (
    <div className="rounded-3xl border border-line bg-white/65 p-6 shadow-sm backdrop-blur dark:bg-slate-950/45">
      <h2 className="font-display text-2xl font-semibold">{title}</h2>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {steps.map((step, index) => (
          <div key={step} className="flex min-w-0 items-center gap-3">
            <span className="min-h-12 rounded-2xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink shadow-sm">
              {step}
            </span>
            {index < steps.length - 1 && (
              <ArrowRight
                className="h-4 w-4 shrink-0 text-brand-600 dark:text-brand-300"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
