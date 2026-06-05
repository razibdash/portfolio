"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloatingButton() {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8801327758860";
  const phoneNumber = rawNumber.replace(/[^\d]/g, "");
  const message = encodeURIComponent("Hi Razib, I want to discuss a project.");
  const href = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Razib on WhatsApp"
      className="fixed bottom-24 right-4 z-40 box-border inline-flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500 text-white shadow-soft transition hover:-translate-y-1 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 sm:right-6"
      data-cursor="Open"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
