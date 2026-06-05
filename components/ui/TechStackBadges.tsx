import {
  Bot,
  Braces,
  Code2,
  Component,
  Database,
  Flame,
  Layers3,
  Server,
  Wind,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = [
  { match: ["react"], icon: Component },
  { match: ["next"], icon: Layers3 },
  { match: ["typescript", "javascript"], icon: Braces },
  { match: ["node", "express", "fastapi", "php"], icon: Server },
  { match: ["laravel"], icon: Flame },
  { match: ["python"], icon: Code2 },
  { match: ["mysql", "mongodb", "database", "faiss", "pinecone"], icon: Database },
  { match: ["openai", "groq", "langchain", "ai", "llm"], icon: Bot },
  { match: ["tailwind", "css", "bootstrap"], icon: Wind },
];

function getIcon(label: string) {
  const normalized = label.toLowerCase();
  return iconMap.find((item) =>
    item.match.some((token) => normalized.includes(token)),
  )?.icon ?? Code2;
}

export function TechStackBadges({
  items,
  className,
  limit,
}: {
  items: string[];
  className?: string;
  limit?: number;
}) {
  const visibleItems = limit ? items.slice(0, limit) : items;

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {visibleItems.map((item) => {
        const Icon = getIcon(item);

        return (
          <span
            key={item}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-medium text-muted"
          >
            <Icon className="h-3.5 w-3.5 text-brand-600 dark:text-brand-300" />
            {item}
          </span>
        );
      })}
    </div>
  );
}
