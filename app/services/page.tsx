import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Bug,
  CheckCircle2,
  ClipboardList,
  CloudUpload,
  Code2,
  FileCheck2,
  Gauge,
  HeartPulse,
  Image as ImageIcon,
  LayoutDashboard,
  LifeBuoy,
  ListChecks,
  LockKeyhole,
  MessageCircle,
  MessagesSquare,
  MonitorSmartphone,
  PackageCheck,
  Plane,
  Quote,
  Rocket,
  SearchCheck,
  Server,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  TestTube2,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { IconInfoCard } from "@/components/ui/IconInfoCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PricingCard } from "@/components/ui/PricingCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { LeadGenerationSections } from "@/components/lead/LeadGenerationSections";

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
  {
    title: "Discovery Call",
    description:
      "We discuss your goals, audience, current problems, and what success should look like.",
    icon: SearchCheck,
  },
  {
    title: "Requirement Analysis",
    description:
      "I organize the features, priorities, user flows, integrations, and project scope.",
    icon: ClipboardList,
  },
  {
    title: "UI/UX Planning",
    description:
      "I plan a clean interface and responsive structure before development starts.",
    icon: ImageIcon,
  },
  {
    title: "Development",
    description:
      "I build the frontend, backend, database, APIs, and AI features needed for the project.",
    icon: Code2,
  },
  {
    title: "Testing",
    description:
      "I check forms, responsiveness, key workflows, errors, and browser behavior.",
    icon: TestTube2,
  },
  {
    title: "Deployment",
    description:
      "I prepare the production build, deploy the project, and help connect the domain.",
    icon: Rocket,
  },
  {
    title: "Support",
    description:
      "I stay available for fixes, small updates, deployment help, and post-launch questions.",
    icon: ShieldCheck,
  },
];

const trustCards = [
  {
    title: "Clear communication",
    description:
      "You get simple updates, direct answers, and a clear understanding of what is being built.",
    icon: MessageCircle,
  },
  {
    title: "Clean and responsive UI",
    description:
      "Interfaces are designed to look polished and work smoothly across mobile, tablet, and desktop.",
    icon: MonitorSmartphone,
  },
  {
    title: "Full-stack development",
    description:
      "I can handle frontend, backend, database, authentication, APIs, and deployment.",
    icon: Server,
  },
  {
    title: "AI integration experience",
    description:
      "I build practical AI features such as chatbots, automation tools, and smart workflows.",
    icon: Bot,
  },
  {
    title: "Secure and scalable code",
    description:
      "I focus on clean structure, validation, maintainability, and sensible security basics.",
    icon: LockKeyhole,
  },
  {
    title: "Deployment and post-launch support",
    description:
      "I help launch the project and support small fixes or improvements after delivery.",
    icon: LifeBuoy,
  },
];

const supportPoints = [
  { title: "Bug fixing", icon: Bug },
  { title: "Minor updates", icon: Settings2 },
  { title: "Deployment help", icon: CloudUpload },
  { title: "Performance check", icon: Gauge },
  { title: "Basic documentation", icon: FileCheck2 },
];

const testimonials = [
  {
    quote: "Great communication and clean work.",
    name: "Client feedback",
  },
  {
    quote: "Delivered the project with proper explanation.",
    name: "Project collaborator",
  },
  {
    quote: "Understands both frontend and backend very well.",
    name: "Technical teammate",
  },
];

const pricingPackages = [
  {
    title: "Landing Page",
    price: "$100+",
    bestFor: "Personal portfolio, small business, product page",
    features: [
      "1 responsive page",
      "Modern UI design",
      "Contact form",
      "Basic SEO",
      "Deployment support",
    ],
    ctaLabel: "Get Started",
    icon: FileCheck2,
  },
  {
    title: "Business Website",
    price: "$200+",
    bestFor: "Company, agency, service business",
    features: [
      "3-5 pages",
      "Responsive design",
      "Contact form",
      "Basic animations",
      "SEO setup",
    ],
    ctaLabel: "Get Started",
    icon: Store,
    popular: true,
  },
  {
    title: "Ecommerce Website",
    price: "$400+",
    bestFor: "Online store",
    features: [
      "Product listing",
      "Cart system",
      "Checkout flow",
      "Order management",
      "Admin dashboard",
    ],
    ctaLabel: "Get Started",
    icon: PackageCheck,
  },
  {
    title: "Dashboard / Admin Panel",
    price: "$300+",
    bestFor: "Business tools and management systems",
    features: [
      "Login system",
      "Role-based access",
      "Data tables",
      "Charts/reports",
      "Export option",
    ],
    ctaLabel: "Get Started",
    icon: LayoutDashboard,
  },
  {
    title: "AI Chatbot",
    price: "$250+",
    bestFor: "Website support, FAQ, lead collection",
    features: [
      "OpenAI API integration",
      "FAQ chatbot",
      "Lead capture",
      "Website integration",
      "Basic admin control",
    ],
    ctaLabel: "Get Started",
    icon: MessagesSquare,
  },
  {
    title: "Custom Web App",
    price: "Custom Quote",
    bestFor: "Startup MVP, automation, complex system",
    features: [
      "Frontend + backend",
      "Database",
      "Authentication",
      "API integration",
      "Deployment support",
    ],
    ctaLabel: "Request Quote",
    icon: Settings2,
  },
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
          eyebrow="Trust"
          title="Why Clients Can Trust Me"
          description="I focus on clear delivery, reliable engineering, and practical support so the project is useful after launch."
        />

        <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trustCards.map((item) => (
            <IconInfoCard key={item.title} {...item} />
          ))}
        </StaggerGroup>
      </Container>

      <section className="border-y border-line bg-white/45 py-20 backdrop-blur dark:bg-slate-950/30">
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="My Work Process"
            description="A clear step-by-step workflow keeps the project organized from first discussion to post-launch support."
            centered
          />

          <StaggerGroup className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="h-full rounded-3xl border border-line bg-white/65 p-6 shadow-sm backdrop-blur dark:bg-slate-950/45"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-700 dark:text-brand-300">
                    <step.icon className="h-6 w-6" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Pricing & Packages"
            description="Choose a package based on your project needs. Final price may vary depending on features, timeline, and complexity."
          />

          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {pricingPackages.map((item) => (
              <PricingCard
                key={item.title}
                href="/contact"
                {...item}
              />
            ))}
          </StaggerGroup>

          <Reveal>
            <div className="mt-8 flex items-start gap-3 rounded-3xl border border-line bg-paper/75 p-5 text-sm text-muted shadow-sm backdrop-blur">
              <ListChecks className="mt-0.5 h-5 w-5 shrink-0 text-brand-600 dark:text-brand-300" />
              <p>
                Final price may vary depending on features, timeline, and
                complexity.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <LeadGenerationSections />

      <section className="border-y border-line bg-white/45 py-20 backdrop-blur dark:bg-slate-950/30">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <div className="h-full rounded-3xl border border-line bg-white/65 p-7 shadow-soft backdrop-blur dark:bg-slate-950/45 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-700 dark:text-brand-300">
                    <LifeBuoy className="h-6 w-6" />
                  </span>
                  <h2 className="font-display text-3xl font-semibold tracking-[-0.03em]">
                    Support After Delivery
                  </h2>
                </div>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
                  I provide post-launch support, bug fixing, small updates, and
                  deployment help after project delivery.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {supportPoints.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-3 rounded-2xl border border-line bg-paper/70 p-4 text-sm font-semibold text-muted"
                    >
                      <item.icon className="h-5 w-5 shrink-0 text-brand-600 dark:text-brand-300" />
                      {item.title}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="h-full rounded-3xl border border-line bg-brand-600 p-7 text-white shadow-glow md:p-8">
                <ShieldCheck className="h-8 w-8 text-white/80" />
                <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.03em]">
                  Your Project Details Stay Private
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/80">
                  I respect client privacy and keep project details, business
                  ideas, and data confidential.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Container className="py-20">
        <SectionHeading
          eyebrow="Testimonials"
          title="What People Say"
          description="A few placeholder notes until more client testimonials are available."
        />

        <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.quote}
              className="h-full rounded-3xl border border-line bg-white/65 p-6 shadow-sm backdrop-blur dark:bg-slate-950/45"
            >
              <Quote className="h-7 w-7 text-brand-600 dark:text-brand-300" />
              <p className="mt-5 text-lg font-medium leading-8">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                {testimonial.name}
              </p>
            </div>
          ))}
        </StaggerGroup>
      </Container>

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
                    Ready to build something reliable?
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-50">
                    Let&apos;s discuss your project and create a solution that
                    works.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <MagneticButton
                    href="/contact"
                    label="Start a Project"
                    variant="secondary"
                    dataCursor="Open"
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
