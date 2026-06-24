"use client";

import Link from "next/link";
import {
  BriefcaseBusiness,
  CalendarClock,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Video,
} from "lucide-react";
import { FormEvent, ReactNode, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

type Option = {
  label: string;
  value: string;
};

type FieldProps = {
  id: string;
  label: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  type?: string;
};

const projectTypes = [
  "Landing Page",
  "Business Website",
  "Ecommerce Website",
  "Travel Website",
  "Clinic / EMR System",
  "Dashboard / Admin Panel",
  "AI Chatbot",
  "AI Automation Tool",
  "Custom Web App",
  "Other",
].map((item) => ({ label: item, value: item }));

const budgetRanges = [
  "Below $100",
  "$100 - $300",
  "$300 - $700",
  "$700 - $1500",
  "$1500+",
  "Not sure yet",
].map((item) => ({ label: item, value: item }));

const timelines = [
  "Urgent",
  "1-2 weeks",
  "2-4 weeks",
  "1-2 months",
  "Flexible",
].map((item) => ({ label: item, value: item }));

const contactMethods = ["Email", "WhatsApp", "Phone Call", "Google Meet"].map(
  (item) => ({ label: item, value: item }),
);

const quickContacts = [
  {
    label: "Email",
    value: "avrorazib@gmail.com",
    href: "mailto:avrorazib@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp / Phone",
    value: "+8801327758860",
    href: "https://wa.me/8801327758860",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Sylhet, Bangladesh",
    href: "https://www.google.com/maps/search/?api=1&query=Sylhet%2C%20Bangladesh",
    icon: MapPin,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/razibdash",
    href: "https://www.linkedin.com/in/razibdash/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/razibdash",
    href: "https://github.com/razibdash",
    icon: Github,
  },
];

function FormField({
  id,
  label,
  name,
  required = false,
  disabled = false,
  placeholder,
  type = "text",
}: FieldProps) {
  return (
    <label htmlFor={id} className="grid gap-2 text-sm font-semibold">
      {label} {required && <span className="sr-only">required</span>}
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        aria-required={required}
        disabled={disabled}
        className="rounded-2xl border border-line bg-paper px-4 py-3 font-normal outline-none transition focus:border-brand-500 disabled:cursor-not-allowed disabled:opacity-70"
        placeholder={placeholder}
      />
    </label>
  );
}

function SelectField({
  id,
  label,
  name,
  options,
  required = false,
  disabled = false,
  placeholder,
}: FieldProps & { options: Option[] }) {
  return (
    <label htmlFor={id} className="grid gap-2 text-sm font-semibold">
      {label} {required && <span className="sr-only">required</span>}
      <select
        id={id}
        name={name}
        required={required}
        aria-required={required}
        disabled={disabled}
        defaultValue=""
        className="rounded-2xl border border-line bg-paper px-4 py-3 font-normal outline-none transition focus:border-brand-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <option value="" disabled>
          {placeholder ?? "Select an option"}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  id,
  label,
  name,
  required = false,
  disabled = false,
  placeholder,
}: FieldProps) {
  return (
    <label htmlFor={id} className="grid gap-2 text-sm font-semibold">
      {label} {required && <span className="sr-only">required</span>}
      <textarea
        id={id}
        name={name}
        rows={7}
        required={required}
        aria-required={required}
        disabled={disabled}
        className="resize-none rounded-2xl border border-line bg-paper px-4 py-3 font-normal outline-none transition focus:border-brand-500 disabled:cursor-not-allowed disabled:opacity-70"
        placeholder={placeholder}
      />
    </label>
  );
}

function InfoPanel({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[2rem] border border-line bg-white/70 p-7 shadow-soft backdrop-blur dark:bg-slate-950/50">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-700 dark:text-brand-300">
          {icon}
        </span>
        <h2 className="font-display text-2xl font-semibold">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export function ContactClient() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("idle");
    setError("");

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      projectType: String(formData.get("projectType") || "").trim(),
      budgetRange: String(formData.get("budgetRange") || "").trim(),
      timeline: String(formData.get("timeline") || "").trim(),
      projectDetails: String(formData.get("projectDetails") || "").trim(),
      preferredContactMethod: String(
        formData.get("preferredContactMethod") || "",
      ).trim(),
    };

    const requiredFields = [
      payload.name,
      payload.email,
      payload.phone,
      payload.projectType,
      payload.budgetRange,
      payload.timeline,
      payload.projectDetails,
      payload.preferredContactMethod,
    ];

    if (requiredFields.some((value) => !value)) {
      setStatus("error");
      setError("Please fill in all required project request fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(payload.email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    if (payload.phone.length < 6) {
      setStatus("error");
      setError("Please enter a valid WhatsApp or phone number.");
      return;
    }

    if (payload.projectDetails.length < 20) {
      setStatus("error");
      setError(
        "Please add a few more project details so I can understand the request.",
      );
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setStatus("error");
        setError(data?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Network error. Please try again or email me directly.");
    }
  }

  const isLoading = status === "loading";

  return (
    <>
      <Container className="py-16 md:py-24">
        <SectionHeading
          level="h1"
          eyebrow="Contact"
          title="Let's Build Something Together"
          description="Have a project idea? Tell me about your website, web app, dashboard, AI tool, or automation need."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <Reveal>
              <InfoPanel
                icon={<Mail className="h-5 w-5" />}
                title="Quick Contact Info"
              >
                <p className="mt-4 leading-7 text-muted">
                  Reach out directly or send a detailed project request through
                  the form.
                </p>
                <div className="mt-6 grid gap-3">
                  {quickContacts.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="flex items-center gap-3 rounded-2xl border border-line bg-paper/70 p-4 text-muted transition hover:-translate-y-1 hover:text-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/40 dark:hover:text-brand-300"
                      data-cursor="Open"
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-[0.2em]">
                          {item.label}
                        </span>
                        <span className="mt-1 block break-words text-sm font-medium">
                          {item.value}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </InfoPanel>
            </Reveal>

            <Reveal delay={0.06}>
              <InfoPanel
                icon={<Video className="h-5 w-5" />}
                title="Want to discuss directly?"
              >
                <p className="mt-4 leading-7 text-muted">
                  Book a free consultation call to discuss your project
                  requirements.
                </p>
                <Link
                  href="mailto:avrorazib@gmail.com?subject=Free%20consultation%20call%20request"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/40 active:scale-95"
                  data-cursor="Open"
                >
                  <CalendarClock className="h-4 w-4" />
                  Book a Free Call
                </Link>
              </InfoPanel>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex items-start gap-3 rounded-[2rem] border border-line bg-white/70 p-5 text-sm text-muted shadow-sm backdrop-blur dark:bg-slate-950/50">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-600 dark:text-brand-300" />
                <p>
                  I usually reply within 24 hours. Your project details will
                  stay private.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <form
              id="project-request"
              onSubmit={handleSubmit}
              noValidate
              className="rounded-[2rem] border border-line bg-white/70 p-7 shadow-soft backdrop-blur dark:bg-slate-950/50"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-700 dark:text-brand-300">
                  <BriefcaseBusiness className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-semibold">
                    Project Request
                  </h2>
                  <p className="mt-1 text-sm text-muted">
                    Share the basics and I will reply with the next steps.
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <FormField
                  id="name"
                  name="name"
                  label="Full Name"
                  placeholder="Your full name"
                  required
                  disabled={isLoading}
                />
                <FormField
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="you@example.com"
                  required
                  disabled={isLoading}
                />
                <FormField
                  id="phone"
                  name="phone"
                  label="WhatsApp / Phone Number"
                  type="tel"
                  placeholder="+880..."
                  required
                  disabled={isLoading}
                />
                <FormField
                  id="company"
                  name="company"
                  label="Company / Business Name"
                  placeholder="Your company or brand"
                  disabled={isLoading}
                />
                <SelectField
                  id="projectType"
                  name="projectType"
                  label="Project Type"
                  placeholder="Select project type"
                  options={projectTypes}
                  required
                  disabled={isLoading}
                />
                <SelectField
                  id="budgetRange"
                  name="budgetRange"
                  label="Budget Range"
                  placeholder="Select budget range"
                  options={budgetRanges}
                  required
                  disabled={isLoading}
                />
                <SelectField
                  id="timeline"
                  name="timeline"
                  label="Timeline"
                  placeholder="Select timeline"
                  options={timelines}
                  required
                  disabled={isLoading}
                />
                <SelectField
                  id="preferredContactMethod"
                  name="preferredContactMethod"
                  label="Preferred Contact Method"
                  placeholder="Select contact method"
                  options={contactMethods}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="mt-5">
                <TextareaField
                  id="projectDetails"
                  name="projectDetails"
                  label="Project Details"
                  placeholder="Tell me what you need, important features, examples you like, and any deadline."
                  required
                  disabled={isLoading}
                />
              </div>

              <div aria-live="polite">
                {error && (
                  <p className="mt-4 rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-300">
                    {error}
                  </p>
                )}
                {status === "success" && (
                  <p className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-700 dark:text-emerald-300">
                    Project request sent successfully. I will get back to you
                    soon.
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                aria-busy={isLoading}
                className={cn(
                  "mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/40 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70",
                )}
                data-cursor="Send"
              >
                <Send className="h-4 w-4" />
                {isLoading ? "Sending..." : "Send Project Request"}
              </button>
            </form>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
