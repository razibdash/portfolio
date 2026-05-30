export const suggestedQuestions = [
  "Tell me about Razib",
  "What projects has he built?",
  "What are his main skills?",
  "Show me his AI projects",
  "Explain the GlobaHealth EMR project",
  "Is he available for job or freelance work?",
  "How can I contact him?",
  "Where can I download his resume?",
];

export function SuggestedQuestions({
  onSelect,
  disabled,
}: {
  onSelect: (question: string) => void;
  disabled?: boolean;
}) {
  return (
    <div
      className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="Suggested questions"
    >
      {suggestedQuestions.map((question) => (
        <button
          key={question}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(question)}
          className="shrink-0 rounded-full border border-line bg-paper px-3 py-2 text-xs font-semibold text-muted transition hover:border-brand-500 hover:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/40 disabled:cursor-not-allowed disabled:opacity-60 dark:hover:text-brand-300"
        >
          {question}
        </button>
      ))}
    </div>
  );
}
