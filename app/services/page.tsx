import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CalendarCheck2,
  CheckCircle2,
  ClipboardList,
  Code2,
  FileCheck2,
  HeartPulse,
  Image as ImageIcon,
  LayoutDashboard,
  ListChecks,
  MessagesSquare,
  PackageCheck,
  Plane,
  Rocket,
  SearchCheck,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  TestTube2,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, web apps, dashboards, AI tools, automation systems, ecommerce websites, travel websites, and clinic EMR software services by Razib Dash.",
};

const services = [
  {
    title: "Ecommerce Website",
    description:
      "Online store with products, cart, checkout, order management, and admin panel.",
    icon: ShoppingCart,
    features: [
      "Product catalog",
      "Cart & checkout",
      "Order management",
      "Payment integration",
      "Admin dashboard",
    ],
  },
  {
    title: "Travel Website",
    description:
      "Travel agency website with tour packages, booking forms, gallery, and inquiry system.",
    icon: Plane,
    features: [
      "Tour package listing",
      "Booking/inquiry form",
      "Image gallery",
      "Destination pages",
      "Contact integration",
    ],
  },
  {
    title: "Clinic / EMR Software",
    description:
      "Healthcare system for clinics to manage patients, appointments, prescriptions, and reports.",
    icon: HeartPulse,
    features: [
      "Patient management",
      "Appointment scheduling",
      "Prescription system",
      "Medical records",
      "Billing & reports",
    ],
  },
  {
    title: "AI Chatbot",
    description:
      "Smart chatbot for websites, support, FAQs, lead collection, and business automation.",
    icon: Bot,
    features: [
      "OpenAI API integration",
      "FAQ chatbot",
      "Lead capture",
      "Website integration",
      "Admin control",
    ],
  },
  {
    title: "Business Dashboard",
    description:
      "Custom dashboard for sales, customers, invoices, reports, and business analytics.",
    icon: LayoutDashboard,
    features: [
      "Login system",
      "Role-based access",
      "Reports & charts",
      "Invoice system",
      "Export PDF/Excel",
    ],
  },
  {
    title: "Custom Web App",
    description:
      "Full-stack web application with frontend, backend, database, authentication, and deployment.",
    icon: BriefcaseBusiness,
    features: [
      "Frontend development",
      "Backend API",
      "Database design",
      "Authentication",
      "Deployment support",
    ],
  },
  {
    title: "AI Automation Tools",
    description:
      "Automation tools for documents, forms, emails, workflows, and repetitive business tasks.",
    icon: Workflow,
    features: [
      "Document extraction",
      "Form autofill",
      "Workflow automation",
      "API integration",
      "Browser extension",
    ],
  },
];

const processSteps = [
  { title: "Discovery", icon: SearchCheck },
  { title: "Planning", icon: ClipboardList },
  { title: "UI/UX", icon: ImageIcon },
  { title: "Development", icon: Code2 },
  { title: "Testing", icon: TestTube2 },
  { title: "Deployment", icon: Rocket },
  { title: "Support", icon: ShieldCheck },
];

const pricing = [
  { title: "Landing Page", price: "$100+", icon: FileCheck2 },
  { title: "Business Website", price: "$200+", icon: Store },
  { title: "Ecommerce Website", price: "$400+", icon: PackageCheck },
  { title: "Dashboard / Admin Panel", price: "$300+", icon: LayoutDashboard },
  { title: "AI Chatbot", price: "$250+", icon: MessagesSquare },
  { title: "Clinic / EMR System", price: "$700+", icon: CalendarCheck2 },
  { title: "Custom Web App", price: "Custom Quote", icon: Settings2 },
];

const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "A landing page can often be completed in a few days, while ecommerce, dashboard, EMR, and custom web app projects depend on feature scope and integrations.",
  },
  {
    question: "Do you provide deployment?",
    answer:
      "Yes. I can help deploy the project, configure the production environment, connect domains, and prepare the app for real users.",
  },
  {
    question: "Can you build AI features?",
    answer:
      "Yes. I can integrate AI chatbots, OpenAI API features, document tools, workflow automation, and practical AI assistants for business use cases.",
  },
  {
    question: "Do you provide support after delivery?",
    answer:
      "Yes. I provide support after delivery for fixes, improvements, small updates, and deployment-related help.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Contact me with your idea, goals, timeline, and must-have features. I will review the scope and suggest the best starting plan.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Container className="py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-4 py-2 text-sm text-muted shadow-sm backdrop-blur dark:bg-slate-950/40">
                <Sparkles className="h-4 w-4 text-brand-600 dark:text-brand-300" />
                Business-focused development services
              </div>
              <h1 className="mt-8 font-display text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
                Services I Offer
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted md:text-xl">
                I build websites, web apps, dashboards, AI tools, and automation
                systems for businesses.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <MagneticButton href="/contact" label="Start a Project" />
                <MagneticButton
                  href="/projects"
                  label="View Projects"
                  variant="secondary"
                  dataCursor="View"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Websites", icon: Store },
                { label: "Dashboards", icon: LayoutDashboard },
                { label: "AI Tools", icon: Bot },
                { label: "Automation", icon: Workflow },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-line bg-white/65 p-6 shadow-sm backdrop-blur dark:bg-slate-950/45"
                >
                  <item.icon className="h-6 w-6 text-brand-600 dark:text-brand-300" />
                  <p className="mt-5 font-display text-2xl font-semibold">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>

      <section className="border-y border-line bg-white/45 py-20 backdrop-blur dark:bg-slate-950/30">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Choose the right solution for your business."
            description="Each service can be built as a focused project or expanded into a larger full-stack system with custom features."
          />

          <StaggerGroup className="mt-10 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex h-full flex-col rounded-3xl border border-line bg-white/65 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft dark:bg-slate-950/45 md:p-7"
                data-cursor="View"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-700 dark:text-brand-300">
                    <service.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-semibold">
                      {service.title}
                    </h2>
                    <p className="mt-3 leading-7 text-muted">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm font-medium text-muted"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600 dark:text-brand-300" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 self-start text-sm font-semibold text-brand-700 transition hover:text-brand-600 dark:text-brand-300"
                  data-cursor="Open"
                >
                  Start with this service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <Container className="py-20">
        <SectionHeading
          eyebrow="Process"
          title="How I Work"
          description="A simple project flow keeps the work clear from first discussion to launch and support."
          centered
        />

        <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-line bg-white/65 p-5 text-center shadow-sm backdrop-blur dark:bg-slate-950/45"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-700 dark:text-brand-300">
                <step.icon className="h-6 w-6" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                Step {index + 1}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold">
                {step.title}
              </h3>
            </div>
          ))}
        </StaggerGroup>
      </Container>

      <section className="border-y border-line bg-white/45 py-20 backdrop-blur dark:bg-slate-950/30">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Starting Prices"
            description="Final price depends on features, timeline, and project scope."
          />

          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pricing.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-line bg-white/65 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft dark:bg-slate-950/45"
              >
                <item.icon className="h-6 w-6 text-brand-600 dark:text-brand-300" />
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-4 text-3xl font-semibold tracking-tight text-brand-700 dark:text-brand-300">
                  {item.price}
                </p>
              </div>
            ))}
          </StaggerGroup>

          <Reveal>
            <div className="mt-8 flex items-start gap-3 rounded-3xl border border-line bg-paper/75 p-5 text-sm text-muted shadow-sm backdrop-blur">
              <ListChecks className="mt-0.5 h-5 w-5 shrink-0 text-brand-600 dark:text-brand-300" />
              <p>Final price depends on features, timeline, and project scope.</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <Container className="py-20">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions before starting a project."
          description="Here are the quick answers most clients need before we discuss details."
        />

        <div className="mt-10 grid gap-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.04}>
              <details className="group rounded-3xl border border-line bg-white/65 p-6 shadow-sm backdrop-blur dark:bg-slate-950/45">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-semibold">
                  {faq.question}
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-brand-700 transition group-open:rotate-45 dark:text-brand-300">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-4 max-w-4xl leading-7 text-muted">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>

      <section className="pb-20">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-line bg-gradient-to-br from-brand-600 to-slate-950 p-8 text-white shadow-soft md:p-10">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-100">
                    Ready When You Are
                  </p>
                  <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                    Have a project in mind?
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-50">
                    Let&apos;s discuss your idea and build the right solution.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <MagneticButton
                    href="/contact"
                    label="Contact Me"
                    variant="secondary"
                    dataCursor="Open"
                  />
                  <MagneticButton
                    href="/projects"
                    label="View My Work"
                    variant="ghost"
                    dataCursor="View"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
