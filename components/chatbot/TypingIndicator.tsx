export function TypingIndicator() {
  return (
    <div className="flex gap-3" aria-label="Razib AI Assistant is typing">
      <span className="mt-1 h-8 w-8 rounded-full bg-brand-500/10" />
      <div className="flex items-center gap-1 rounded-2xl border border-line bg-paper px-4 py-3 shadow-sm">
        {[0, 1, 2].map((item) => (
          <span
            key={item}
            className="h-2 w-2 animate-pulse rounded-full bg-brand-600 dark:bg-brand-300"
            style={{ animationDelay: `${item * 120}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
