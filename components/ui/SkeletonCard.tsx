export function SkeletonCard() {
  return (
    <div className="rounded-3xl border border-line bg-white/50 p-5 shadow-sm dark:bg-slate-950/40">
      <div className="skeleton h-44 rounded-2xl" />
      <div className="skeleton mt-5 h-5 w-2/3 rounded-full" />
      <div className="skeleton mt-3 h-4 w-full rounded-full" />
      <div className="skeleton mt-2 h-4 w-4/5 rounded-full" />
    </div>
  );
}
