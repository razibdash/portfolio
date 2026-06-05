import Link from "next/link";
import { ArrowRight, CheckCircle2, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  title: string;
  price: string;
  bestFor: string;
  features: string[];
  ctaLabel: string;
  href: string;
  icon: LucideIcon;
  popular?: boolean;
};

export function PricingCard({
  title,
  price,
  bestFor,
  features,
  ctaLabel,
  href,
  icon: Icon,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-3xl border p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft dark:bg-slate-950/45",
        popular
          ? "border-brand-500/50 bg-white/80 ring-2 ring-brand-500/15"
          : "border-line bg-white/65",
      )}
    >
      {popular && (
        <span className="absolute right-5 top-5 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-glow">
          Popular
        </span>
      )}

      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-700 dark:text-brand-300">
        <Icon className="h-6 w-6" />
      </span>

      <h3 className="mt-5 font-display text-2xl font-semibold">{title}</h3>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-brand-700 dark:text-brand-300">
        {price}
      </p>
      <p className="mt-3 text-sm leading-6 text-muted">
        <span className="font-semibold text-ink dark:text-slate-100">
          Best for:
        </span>{" "}
        {bestFor}
      </p>

      <ul className="mt-6 grid flex-1 gap-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm font-medium text-muted"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600 dark:text-brand-300" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={cn(
          "mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition active:scale-95",
          popular
            ? "bg-brand-600 text-white shadow-glow hover:bg-brand-700"
            : "border border-line bg-white/70 text-ink shadow-sm hover:bg-brand-500/10 dark:bg-slate-950/50",
        )}
        data-cursor="Open"
      >
        {ctaLabel}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
