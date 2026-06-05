import type { Metadata } from "next";
import Image from "next/image";
import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  GraduationCap,
  HeartPulse,
  Layers3,
  Laptop,
  LineChart,
  Plane,
  Rocket,
  Server,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TechStackBadges } from "@/components/ui/TechStackBadges";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "About Razib Dash, an AI Web Developer and Full-Stack Developer in Bangladesh building websites, dashboards, chatbots, clinic EMR systems, ecommerce, travel, and automation tools.",
  path: "/about",
});

const quickInfoCards = [
  { title: "Software Engineer", icon: Code2 },
  { title: "CSE Graduate", icon: GraduationCap },
  { title: "AI Web Developer", icon: BrainCircuit },
  { title: "Full-Stack Developer", icon: Layers3 },
];

const services = [
  {
    title: "Ecommerce Website",
    description:
      "Product pages, checkout flows, admin features, and responsive storefront experiences.",
    icon: ShoppingCart,
  },
  {
    title: "Travel Website",
    description:
      "Destination pages, package listings, lead forms, and inquiry-focused booking journeys.",
    icon: Plane,
  },
  {
    title: "AI Chatbot",
    description:
      "Support, FAQ, document Q&A, lead capture, and internal assistant experiences.",
    icon: Bot,
  },
  {
    title: "Clinic / EMR Software",
    description:
      "Patient records, appointments, prescriptions, reporting, and clinic workflow tools.",
    icon: HeartPulse,
  },
  {
    title: "Business Dashboard",
    description:
      "Operational dashboards that make data easier to scan, compare, and act on.",
    icon: LineChart,
  },
  {
    title: "Custom Web App",
    description:
      "Role-based web applications designed around real users, teams, and processes.",
    icon: Laptop,
  },
  {
    title: "AI Automation Tools",
    description:
      "Practical automation for forms, reports, messages, workflows, and repetitive tasks.",
    icon: Workflow,
  },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Laravel",
  "FastAPI",
  "MongoDB",
  "MySQL",
  "OpenAI API",
];

const stats = [
  { value: "10+", label: "Projects", icon: Rocket },
  { value: "7+", label: "Service Areas", icon: BriefcaseBusiness },
  { value: "AI", label: "Full-Stack + AI", icon: BrainCircuit },
  { value: "Open", label: "Available for Freelance Work", icon: Sparkles },
];

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600 dark:text-brand-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-muted">{description}</p>
      ) : null}
    </div>
  );
}

function DeveloperBackdrop() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 560 560"
      className="absolute inset-0 h-full w-full text-brand-600/15 dark:text-brand-300/15"
      fill="none"
    >
      <path
        d="M80 133C139 63 255 54 337 92c84 39 143 129 129 219-14 88-96 153-183 168-83 14-183-20-219-99-36-78-44-176 16-247Z"
        className="fill-brand-500/10"
      />
      <path
        d="M126 212h308M126 286h230M126 360h308"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="m168 164-52 52 52 52M392 164l52 52-52 52"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m312 139-64 154"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <circle cx="426" cy="402" r="42" className="fill-brand-600/10" />
      <path
        d="M407 402h38M426 383v38"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <Container className="relative overflow-hidden pb-16 pt-10 md:pb-20 md:pt-20">
        <div className="pointer-events-none absolute left-8 top-10 h-28 w-28 rounded-[2rem] border border-brand-500/20 rotate-12" />
        <div className="pointer-events-none absolute bottom-12 right-6 h-40 w-40 rounded-[2.5rem] border border-line -rotate-12" />

        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] bg-brand-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white/70 p-4 shadow-soft backdrop-blur dark:bg-slate-950/55">
                <DeveloperBackdrop />
                <div className="relative rounded-[1.5rem] bg-paper/70 p-3">
                  <Image
                    src="/razibdash.png"
                    alt="Razib Dash, AI web developer and full-stack developer"
                    width={720}
                    height={720}
                    priority
                    className="rounded-[1.25rem] object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/65 px-4 py-2 text-sm font-medium text-muted shadow-sm backdrop-blur dark:bg-slate-950/45">
                <Sparkles className="h-4 w-4 text-brand-600 dark:text-brand-300" />
                Client-friendly web products with practical AI
              </p>
              <h1 className="mt-7 font-display text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                About Razib Dash
              </h1>
              <p className="mt-5 text-xl font-medium text-brand-700 dark:text-brand-300 md:text-2xl">
                Software Engineer | AI Integration Specialist
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                I build AI-powered websites, web apps, dashboards, chatbots,
                clinic/EMR systems, ecommerce websites, travel websites, and
                automation tools for businesses, startups, clinics, and
                agencies.
              </p>
              <p className="mt-4 max-w-3xl leading-8 text-muted">
                I am a Software Engineer and CSE graduate from Metropolitan
                University Bangladesh. My work combines clean interface design,
                full-stack engineering, database-aware thinking, and useful AI
                integrations that help teams move faster.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <MagneticButton
                  href="/contact"
                  label="Hire Me"
                  dataCursor="Open"
                />
                <MagneticButton
                  href="/projects"
                  label="View Projects"
                  variant="secondary"
                  dataCursor="View"
                />
                <MagneticButton
                  href="/resume/cv.pdf"
                  label="Download CV"
                  icon={<Download className="h-4 w-4" />}
                  variant="ghost"
                  dataCursor="Open"
                  download
                />
              </div>
            </div>
          </Reveal>
        </div>

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickInfoCards.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-2xl border border-line bg-white/65 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft dark:bg-slate-950/45"
              data-cursor="View"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-700 dark:text-brand-300">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold">
                {item.title}
              </h3>
            </div>
          ))}
        </StaggerGroup>
      </Container>

      <section className="border-y border-line bg-white/45 py-16 backdrop-blur dark:bg-slate-950/30">
        <Container>
          <SectionIntro
            eyebrow="What I Do"
            title="Websites, dashboards, AI features, and software systems for real business workflows."
            description="I focus on useful digital products that are easy for clients to understand, easy for users to operate, and practical to maintain after launch."
          />
          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group h-full rounded-3xl border border-line bg-white/65 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft dark:bg-slate-950/45"
                data-cursor="View"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-white dark:text-brand-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {service.description}
                </p>
              </div>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <Container className="py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Core Stack"
              title="A practical modern stack for AI-powered full-stack products."
              description="I choose tools that support fast interfaces, maintainable APIs, reliable data storage, and AI features that fit the product instead of distracting from it."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-3xl border border-line bg-white/65 p-7 shadow-soft backdrop-blur dark:bg-slate-950/45">
              <div className="pointer-events-none absolute right-6 top-6 h-24 w-24 rounded-[1.5rem] border border-brand-500/20 rotate-12" />
              <div className="relative flex flex-wrap gap-3">
                <TechStackBadges items={techStack} />
              </div>
              <div className="relative mt-7 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Frontend UI", icon: Layers3 },
                  { label: "Backend APIs", icon: Server },
                  { label: "Data & AI", icon: Database },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-line bg-paper/70 p-4"
                  >
                    <item.icon className="h-5 w-5 text-brand-600 dark:text-brand-300" />
                    <p className="mt-3 text-sm font-semibold">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      <section className="border-y border-line bg-white/45 py-16 backdrop-blur dark:bg-slate-950/30">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <Reveal>
              <div className="h-full rounded-3xl border border-line bg-white/65 p-7 shadow-sm backdrop-blur dark:bg-slate-950/45 md:p-8">
                <GraduationCap className="h-7 w-7 text-brand-600 dark:text-brand-300" />
                <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                  Education & credibility
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  CSE Graduate from Metropolitan University Bangladesh, with
                  hands-on experience across AI, full-stack development,
                  dashboards, EMR systems, and automation projects.
                </p>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    "Computer science foundation",
                    "AI product building",
                    "Dashboard and workflow design",
                    "Deployment-ready applications",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600 dark:text-brand-300" />
                      <p className="text-sm font-medium text-muted">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="h-full rounded-3xl border border-line bg-gradient-to-br from-brand-600 to-slate-950 p-7 text-white shadow-soft md:p-8">
                <ShieldCheck className="h-7 w-7 text-blue-100" />
                <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em]">
                  Professional approach
                </h2>
                <p className="mt-5 leading-8 text-blue-50">
                  I think beyond isolated features: the user flow, client goal,
                  responsive layout, database structure, AI behavior,
                  performance, and maintainability all matter when a product is
                  expected to support real business work.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Container className="py-16 md:py-20">
        <SectionIntro
          eyebrow="Numbers"
          title="A compact snapshot of the work I am building toward."
          description="The focus is steady delivery: useful projects, clear service areas, and full-stack development strengthened by practical AI."
        />
        <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-line bg-white/65 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft dark:bg-slate-950/45"
              data-cursor="View"
            >
              <stat.icon className="h-6 w-6 text-brand-600 dark:text-brand-300" />
              <p className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em]">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">{stat.label}</p>
            </div>
          ))}
        </StaggerGroup>
      </Container>

      <section className="pb-20">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-line bg-white/70 p-8 shadow-soft backdrop-blur dark:bg-slate-950/55 md:p-10">
              <svg
                aria-hidden="true"
                viewBox="0 0 320 180"
                className="pointer-events-none absolute right-0 top-0 h-44 w-80 text-brand-600/10 dark:text-brand-300/10"
                fill="none"
              >
                <path
                  d="M18 120C70 34 152 2 244 35c44 16 63 55 58 96"
                  stroke="currentColor"
                  strokeWidth="28"
                  strokeLinecap="round"
                />
                <path
                  d="M86 139h154M118 93h122"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
              <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600 dark:text-brand-300">
                    Let&apos;s Build
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                    Have a project idea?
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
                    Let&apos;s build a website, dashboard, chatbot, or
                    automation tool for your business.
                  </p>
                </div>
                <MagneticButton
                  href="/contact"
                  label="Start a Project"
                  dataCursor="Open"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
