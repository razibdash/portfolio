import Link from "next/link";
import { CalendarClock, Download, Mail, SearchCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { LeadCaptureForm, type LeadField } from "@/components/lead/LeadCaptureForm";

const newsletterFields: LeadField[] = [
  {
    name: "name",
    label: "Name",
    placeholder: "Your name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    required: true,
  },
];

const auditFields: LeadField[] = [
  {
    name: "name",
    label: "Name",
    placeholder: "Your name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    required: true,
  },
  {
    name: "auditTarget",
    label: "Website URL / Business Name",
    placeholder: "https://example.com or your business name",
    required: true,
  },
  {
    name: "improvementGoal",
    label: "What do you want to improve?",
    type: "textarea",
    placeholder: "Tell me about your website, workflow, leads, speed, dashboard, or automation problem.",
    required: true,
  },
];

export function LeadGenerationSections() {
  const bookingUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    process.env.CALENDLY_URL ||
    process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL ||
    process.env.GOOGLE_CALENDAR_URL ||
    "mailto:avrorazib@gmail.com?subject=Free%20consultation%20call";

  return (
    <section className="border-y border-line bg-white/45 py-20 backdrop-blur dark:bg-slate-950/30">
      <Container>
        <SectionHeading
          eyebrow="Free Resources"
          title="Lead magnets for better project decisions."
          description="Subscribe, request a free audit, download the service brochure, or book a consultation call."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-line bg-white/65 p-7 shadow-soft backdrop-blur dark:bg-slate-950/45">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-700 dark:text-brand-300">
                  <Mail className="h-6 w-6" />
                </span>
                <h2 className="font-display text-2xl font-semibold">
                  Get Free AI & Web Automation Tips
                </h2>
              </div>
              <p className="mt-4 leading-7 text-muted">
                Join my newsletter to get useful ideas about websites, AI
                tools, dashboards, and automation.
              </p>
              <LeadCaptureForm
                formType="newsletter"
                fields={newsletterFields}
                submitLabel="Subscribe"
                successMessage="Subscribed successfully. Thank you for joining."
                className="mt-6"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-line bg-white/65 p-7 shadow-soft backdrop-blur dark:bg-slate-950/45">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-700 dark:text-brand-300">
                  <SearchCheck className="h-6 w-6" />
                </span>
                <h2 className="font-display text-2xl font-semibold">
                  Get a Free Website or Workflow Audit
                </h2>
              </div>
              <p className="mt-4 leading-7 text-muted">
                Share your website or business workflow and I&apos;ll suggest
                how it can be improved with better design, automation, or AI.
              </p>
              <LeadCaptureForm
                formType="audit"
                fields={auditFields}
                submitLabel="Request Free Audit"
                successMessage="Audit request sent. I will review it and reply soon."
                className="mt-6"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-line bg-white/65 p-7 shadow-sm backdrop-blur dark:bg-slate-950/45">
              <Download className="h-7 w-7 text-brand-600 dark:text-brand-300" />
              <h2 className="mt-5 font-display text-2xl font-semibold">
                Download My Service Brochure
              </h2>
              <p className="mt-4 leading-7 text-muted">
                See my services, packages, and project types in one PDF.
              </p>
              {/* TODO: Add the final brochure PDF to public/service-brochure.pdf. */}
              <a
                href="/service-brochure.pdf"
                download
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-brand-500/10 focus:outline-none focus:ring-2 focus:ring-brand-500/40 dark:bg-slate-950/50"
                data-cursor="Open"
              >
                <Download className="h-4 w-4" />
                Download Brochure
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-line bg-brand-600 p-7 text-white shadow-glow">
              <CalendarClock className="h-7 w-7 text-white/80" />
              <h2 className="mt-5 font-display text-2xl font-semibold">
                Book a Free Consultation Call
              </h2>
              <p className="mt-4 leading-7 text-white/80">
                Choose a time to discuss your project requirements.
              </p>
              <Link
                href={bookingUrl}
                target={bookingUrl.startsWith("http") ? "_blank" : undefined}
                rel={bookingUrl.startsWith("http") ? "noreferrer" : undefined}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-white/50"
                data-cursor="Open"
              >
                <CalendarClock className="h-4 w-4" />
                Book a Call
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
