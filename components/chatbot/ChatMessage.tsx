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
          "max-w-[82%] rounded-2xl border px-4 py-3 text-sm leading-6 shadow-sm",
          isUser
            ? "border-brand-600 bg-brand-600 text-white"
            : "border-line bg-paper text-muted",
        )}
      >
        {message.content}
      </div>
      {isUser && (
        <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
          <User className="h-4 w-4" />
        </span>
      )}
    </div>
  );
}
