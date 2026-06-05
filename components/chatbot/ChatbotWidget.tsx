"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { ChatWindow } from "@/components/chatbot/ChatWindow";
import type { ChatMessageItem } from "@/components/chatbot/ChatMessage";

const STORAGE_KEY = "razib-ai-chat";
const MAX_STORED_MESSAGES = 18;

const welcomeMessage: ChatMessageItem = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi, I am Razib AI Assistant. Ask me about Razib's skills, projects, resume, availability, or contact options.",
};

function createMessage(role: ChatMessageItem["role"], content: string): ChatMessageItem {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    role,
    content,
  };
}

function readStoredMessages() {
  if (typeof window === "undefined") return [welcomeMessage];

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return [welcomeMessage];

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [welcomeMessage];

    const validMessages = parsed.filter(
      (message): message is ChatMessageItem =>
        typeof message?.id === "string" &&
        (message.role === "user" || message.role === "assistant") &&
        typeof message.content === "string",
    );

    return validMessages.length > 0 ? validMessages : [welcomeMessage];
  } catch {
    return [welcomeMessage];
  }
}

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageItem[]>([welcomeMessage]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setMessages(readStoredMessages());
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(messages.slice(-MAX_STORED_MESSAGES)),
    );
  }, [messages]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  async function sendMessage(content: string) {
    const userMessage = createMessage("user", content);
    const nextMessages = [...messages, userMessage].slice(-MAX_STORED_MESSAGES);

    setMessages(nextMessages);
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages
            .filter((message) => message.id !== welcomeMessage.id)
            .map(({ role, content: messageContent }) => ({
              role,
              content: messageContent,
            })),
        }),
      });

      const data = await response.json().catch(() => null);
      const answer =
        typeof data?.answer === "string"
          ? data.answer
          : "I could not answer right now. Please try again or contact Razib.";

      if (!response.ok) {
        setError(answer);
        return;
      }

      setMessages((current) =>
        [...current, createMessage("assistant", answer)].slice(
          -MAX_STORED_MESSAGES,
        ),
      );
    } catch {
      setError("Network error. Please try again or contact Razib directly.");
    } finally {
      setLoading(false);
    }
  }

  function resetConversation() {
    setMessages([welcomeMessage]);
    setError("");
    window.localStorage.removeItem(STORAGE_KEY);
  }

  return (
    <>
      <ChatWindow
        open={open}
        messages={messages}
        loading={loading}
        error={error}
        onClose={() => setOpen(false)}
        onReset={resetConversation}
        onSend={sendMessage}
      />

      {!open && (
        <motion.button
          type="button"
          onClick={() => setOpen(true)}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.96 }}
          className="fixed bottom-6 right-4 z-[70] box-border inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-glow transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/40 sm:right-6"
          aria-label="Open Razib AI Assistant"
          aria-expanded={open}
          data-cursor="Chat"
        >
          <MessageCircle className="h-6 w-6" />
        </motion.button>
      )}
    </>
  );
}
