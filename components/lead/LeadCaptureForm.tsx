"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

type LeadField = {
  name: string;
  label: string;
  type?: "text" | "email" | "url" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  options?: string[];
};

type LeadCaptureFormProps = {
  formType: "newsletter" | "audit" | "estimate";
  fields: LeadField[];
  submitLabel: string;
  successMessage: string;
  className?: string;
  compact?: boolean;
  onSuccess?: () => void;
};

export function LeadCaptureForm({
  formType,
  fields,
  submitLabel,
  successMessage,
  className,
  compact = false,
  onSuccess,
}: LeadCaptureFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus("idle");
    setError("");

    const missingField = fields.find(
      (field) => field.required && !String(payload[field.name] || "").trim(),
    );

    if (missingField) {
      setStatus("error");
      setError(`Please complete ${missingField.label}.`);
      return;
    }

    const email = String(payload.email || "").trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType, ...payload }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setStatus("error");
        setError(data?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
      onSuccess?.();
    } catch {
      setStatus("error");
      setError("Network error. Please try again or contact me directly.");
    }
  }

  const isLoading = status === "loading";

  return (
    <form onSubmit={handleSubmit} noValidate className={cn("grid gap-4", className)}>
      <div className={cn("grid gap-4", !compact && "md:grid-cols-2")}>
        {fields.map((field) => (
          <label
            key={field.name}
            htmlFor={`${formType}-${field.name}`}
            className={cn(
              "grid gap-2 text-sm font-semibold",
              field.type === "textarea" && !compact && "md:col-span-2",
            )}
          >
            {field.label} {field.required && <span className="sr-only">required</span>}
            {field.type === "textarea" ? (
              <textarea
                id={`${formType}-${field.name}`}
                name={field.name}
                rows={compact ? 4 : 5}
                required={field.required}
                aria-required={field.required}
                disabled={isLoading}
                placeholder={field.placeholder}
                className="resize-none rounded-2xl border border-line bg-paper px-4 py-3 font-normal outline-none transition focus:border-brand-500 disabled:cursor-not-allowed disabled:opacity-70"
              />
            ) : field.type === "select" ? (
              <select
                id={`${formType}-${field.name}`}
                name={field.name}
                required={field.required}
                aria-required={field.required}
                disabled={isLoading}
                defaultValue=""
                className="rounded-2xl border border-line bg-paper px-4 py-3 font-normal outline-none transition focus:border-brand-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <option value="" disabled>
                  {field.placeholder ?? "Select an option"}
                </option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={`${formType}-${field.name}`}
                name={field.name}
                type={field.type ?? "text"}
                required={field.required}
                aria-required={field.required}
                disabled={isLoading}
                placeholder={field.placeholder}
                className="rounded-2xl border border-line bg-paper px-4 py-3 font-normal outline-none transition focus:border-brand-500 disabled:cursor-not-allowed disabled:opacity-70"
              />
            )}
          </label>
        ))}
      </div>

      <div aria-live="polite">
        {error && (
          <p className="rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-300">
            {error}
          </p>
        )}
        {status === "success" && (
          <p className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-700 dark:text-emerald-300">
            {successMessage}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        aria-busy={isLoading}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/40 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
        data-cursor="Send"
      >
        <Send className="h-4 w-4" />
        {isLoading ? "Sending..." : submitLabel}
      </button>
    </form>
  );
}

export type { LeadField };
