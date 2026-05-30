import ReactMarkdown from "react-markdown";
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

export type ChatMessageItem = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function ChatMessage({ message }: { message: ChatMessageItem }) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex gap-3", isUser && "justify-end")}>
      {!isUser && (
        <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-300">
          <Bot className="h-4 w-4" />
        </span>
      )}
      <div
        className={cn(
          "max-w-[82%] overflow-hidden rounded-2xl border px-4 py-3 text-sm leading-6 shadow-sm break-words",
          isUser
            ? "border-brand-600 bg-brand-600 text-white"
            : "border-line bg-paper text-muted",
        )}
      >
        {isUser ? (
          <span className="whitespace-pre-wrap">{message.content}</span>
        ) : (
          <ReactMarkdown
            components={{
              p: ({ children }) => (
                <p className="mb-3 last:mb-0">{children}</p>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-ink">{children}</strong>
              ),
              ul: ({ children }) => (
                <ul className="mb-3 list-disc space-y-1 pl-5 last:mb-0">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-3 list-decimal space-y-1 pl-5 last:mb-0">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="pl-1 leading-6">{children}</li>
              ),
              a: ({ children, href }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-brand-700 underline decoration-brand-500/40 underline-offset-4 transition hover:decoration-brand-600 dark:text-brand-300"
                >
                  {children}
                </a>
              ),
              code: ({ children }) => (
                <code className="rounded-md border border-line bg-white/70 px-1.5 py-0.5 text-[0.85em] font-semibold text-ink dark:bg-slate-900/70">
                  {children}
                </code>
              ),
              br: () => <br />,
            }}
          >
            {message.content}
          </ReactMarkdown>
        )}
      </div>
      {isUser && (
        <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
          <User className="h-4 w-4" />
        </span>
      )}
    </div>
  );
}
