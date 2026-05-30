import { cn } from "@/lib/utils";

export function ProjectBadges({
  badges,
  className,
}: {
  badges: string[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {badges.map((badge) => (
        <span
          key={badge}
          className="rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}
