"use client";

import { useEffect, useRef } from "react";
import { RotateCcw, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ChatInput } from "@/components/chatbot/ChatInput";
import {
  ChatMessage,
  type ChatMessageItem,
} from "@/components/chatbot/ChatMessage";
import { SuggestedQuestions } from "@/components/chatbot/SuggestedQuestions";
import { TypingIndicator } from "@/components/chatbot/TypingIndicator";

export function ChatWindow({
  open,
  messages,
  loading,
  error,
  onClose,
  onReset,
  onSend,
}: {
  open: boolean;
  messages: ChatMessageItem[];
  loading: boolean;
  error: string;
  onClose: () => void;
  onReset: () => void;
  onSend: (message: string) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading, open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.section
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-24 right-4 z-[70] flex h-[min(720px,calc(100vh-8rem))] w-[calc(100vw-2rem)] max-w-[420px] flex-col overflow-hidden rounded-[2rem] border border-line bg-white/90 shadow-soft backdrop-blur-xl dark:bg-slate-950/90 sm:right-6"
          role="dialog"
          aria-modal="false"
          aria-labelledby="razib-ai-title"
        >
          <header className="border-b border-line p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-600 dark:text-brand-300">
                  Portfolio Chat
                </p>
                <h2
                  id="razib-ai-title"
                  className="mt-1 font-display text-xl font-semibold"
                >
                  Razib AI Assistant
                </h2>
                {/* <p className="mt-1 text-sm text-muted">
                  Ask about skills, projects, resume, and contact options.
                </p> */}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={onReset}
                  className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition hover:text-ink focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                  aria-label="Clear chat"
                  data-cursor="Clear"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition hover:text-ink focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                  aria-label="Close chat"
                  data-cursor="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </header>

          <div
            ref={scrollRef}
            className="flex-1 space-y-4 overflow-y-auto p-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {loading && <TypingIndicator />}
            {error && (
              <p className="rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-300">
                {error}
              </p>
            )}
          </div>

          <div className="border-t border-line p-4">
            <SuggestedQuestions onSelect={onSend} disabled={loading} />
            <div className="mt-3">
              <ChatInput onSend={onSend} disabled={loading} />
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
