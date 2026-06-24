import { BookOpen } from "lucide-react";

const gradients = [
  "from-brand-500 via-indigo-500 to-violet-600",
  "from-sky-500 via-cyan-500 to-emerald-500",
  "from-fuchsia-500 via-purple-500 to-indigo-600",
  "from-amber-500 via-orange-500 to-rose-600",
  "from-teal-500 via-cyan-600 to-blue-600",
  "from-rose-500 via-pink-500 to-fuchsia-600",
];

function gradientForSlug(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return gradients[hash % gradients.length];
}

export function BlogCover({
  slug,
  tag,
  size = "sm",
}: {
  slug: string;
  tag: string;
  size?: "sm" | "lg";
}) {
  const gradient = gradientForSlug(slug);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} ${
        size === "lg" ? "h-48 md:h-64" : "h-32"
      }`}
    >
      <div className="absolute -right-6 -top-10 h-32 w-32 rounded-full bg-white/10" />
      <div className="absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-white/10" />
      <div className="relative flex h-full flex-col justify-between p-4 md:p-6">
        <BookOpen className="h-6 w-6 text-white/80" />
        <span className="inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
          {tag}
        </span>
      </div>
    </div>
  );
}
