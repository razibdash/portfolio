import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

const MAX_INPUT_LENGTH = 900;

export function ChatInput({
  onSend,
  disabled,
}: {
  onSend: (message: string) => void;
  disabled?: boolean;
}) {
  const [value, setValue] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = value.trim();

    if (!message || disabled) return;

    onSend(message);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <label htmlFor="razib-ai-message" className="sr-only">
        Message Razib AI Assistant
      </label>
      <textarea
        id="razib-ai-message"
        value={value}
        maxLength={MAX_INPUT_LENGTH}
        rows={1}
        disabled={disabled}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            event.currentTarget.form?.requestSubmit();
          }
        }}
        placeholder="Ask about Razib's projects, skills, resume..."
        className="max-h-28 min-h-12 flex-1 resize-none rounded-2xl border border-line bg-paper px-4 py-3 text-sm outline-none transition focus:border-brand-500 disabled:cursor-not-allowed disabled:opacity-70"
      />
      <button
        type="submit"
        disabled={disabled || value.trim().length === 0}
        className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-600 text-white shadow-glow transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/40 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
        aria-label="Send message"
        data-cursor="Send"
      >
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
