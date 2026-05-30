"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BriefcaseBusiness,
  Code2,
  FileText,
  Home,
  Mail,
  Newspaper,
  Search,
  User,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const commands = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Projects", href: "/projects", icon: BriefcaseBusiness },
  { label: "Skills", href: "/skills", icon: Code2 },
  { label: "Experience", href: "/experience", icon: BriefcaseBusiness },
  { label: "Blog", href: "/blog", icon: Newspaper },
  { label: "Resume", href: "/resume/cv.pdf", icon: FileText },
  { label: "Contact", href: "/contact", icon: Mail },
];

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCommands = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) return commands;

    return commands.filter((command) =>
      command.label.toLowerCase().includes(normalized),
    );
  }, [query]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isPaletteShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";

      if (isPaletteShortcut) {
        event.preventDefault();
        setOpen((value) => !value);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }

    window.setTimeout(() => inputRef.current?.focus(), 0);
  }, [open]);

  function navigate(href: string) {
    setOpen(false);
    router.push(href);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] bg-slate-950/45 px-4 py-24 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      onMouseDown={() => setOpen(false)}
    >
      <div
        className="mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-line bg-paper shadow-soft"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <Search className="h-5 w-5 text-muted" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search pages"
            className="min-w-0 flex-1 bg-transparent py-2 text-sm font-medium outline-none placeholder:text-muted"
            aria-label="Search pages"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition hover:text-ink focus:outline-none focus:ring-2 focus:ring-brand-500/40"
            aria-label="Close command palette"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-3">
          {filteredCommands.map((command) => (
            <button
              key={command.href}
              type="button"
              onClick={() => navigate(command.href)}
              className={cn(
                "flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm font-semibold text-muted transition",
                "hover:bg-brand-500/10 hover:text-ink focus:outline-none focus:ring-2 focus:ring-brand-500/40",
              )}
            >
              <command.icon className="h-5 w-5 text-brand-600 dark:text-brand-300" />
              {command.label}
            </button>
          ))}

          {filteredCommands.length === 0 && (
            <p className="px-3 py-6 text-center text-sm text-muted">
              No matching pages.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
