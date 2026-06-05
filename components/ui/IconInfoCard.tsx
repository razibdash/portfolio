import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconInfoCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
};

export function IconInfoCard({
  title,
  description,
  icon: Icon,
  className,
  iconClassName,
}: IconInfoCardProps) {
  return (
    <div
      className={cn(
        "h-full rounded-3xl border border-line bg-white/65 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft dark:bg-slate-950/45",
        className,
      )}
      data-cursor="View"
    >
      <span
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-700 dark:text-brand-300",
          iconClassName,
        )}
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
    </div>
  );
}
