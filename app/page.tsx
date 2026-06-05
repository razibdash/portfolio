import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Bot,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  HeartPulse,
  Layers3,
  Mail,
  Plane,
  Rocket,
  ShoppingCart,
  Sparkles,
  Store,
  UsersRound,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { ProjectBadges } from "@/components/projects/ProjectBadges";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

const highlights = [
  { label: "Business-ready builds", value: "07+", icon: Layers3 },
  { label: "AI integrations", value: "08+", icon: BrainCircuit },
  { label: "Responsive UI focus", value: "100%", icon: Code2 },
];

const services = [
  {
    title: "Ecommerce Website",
    description:
      "Conversion-focused storefronts with product pages, checkout flows, admin tools, and smooth mobile shopping.",
    icon: ShoppingCart,
  },
  {
    title: "Travel Website",
    description:
      "Booking-ready travel sites for packages, tours, destinations, inquiries, and lead generation.",
    icon: Plane,
  },
  {
    title: "Clinic / EMR Software",
    description:
      "Healthcare workflows for appointments, patient records, prescriptions, reporting, and clinic operations.",
    icon: HeartPulse,
  },
  {
    title: "AI Chatbot",
    description:
      "Helpful chatbots for support, FAQs, lead capture, document Q&A, and internal team assistance.",
    icon: Bot,
  },
  {
    title: "Business Dashboard",
    description:
      "Clean dashboards that turn sales, operations, finance, or product data into decisions.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Custom Web App",
    description:
      "Full-stack applications designed around your workflow, users, permissions, and growth plans.",
    icon: BriefcaseBusiness,
  },
  {
    title: "AI Automation Tools",
    description:
      "Automation systems that reduce repetitive work across forms, reports, messages, and business processes.",
    icon: Workflow,
  },
];

const audiences = [
  {
    title: "Small Businesses",
    description: "Modern websites and tools that help local teams win trust and capture leads.",
    icon: Store,
  },
  {
    title: "Clinics & Healthcare",
    description: "Patient-friendly systems for clinical workflows, records, and daily operations.",
    icon: HeartPulse,
  },
  {
    title: "Travel Agencies",
    description: "Travel sites that present packages clearly and make inquiries easy.",
    icon: Plane,
  },
  {
    title: "Ecommerce Brands",
    description: "Storefronts, dashboards, and automations for selling with less friction.",
    icon: ShoppingCart,
  },
  {
    title: "Startups",
    description: "MVPs, internal tools, and launch-ready apps built with speed and clarity.",
    icon: Rocket,
  },
  {
    title: "Agencies",
    description: "Reliable development support for client sites, dashboards, and AI features.",
    icon: Building2,
  },
];

const whyWorkWithMe = [
  "Full-stack development",
  "AI integration",
  "Clean responsive UI",
  "Fast communication",
  "Deployment & support",
];

export default function HomePage() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <>
      <Container className="relative pb-20 pt-10 md:pb-28 md:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-4 py-2 text-sm text-muted shadow-sm backdrop-blur dark:bg-slate-950/40">
                <Sparkles className="h-4 w-4 text-brand-600 dark:text-brand-300" />
                Client-focused web development with practical AI
              </div>
              <h1 className="mt-8 max-w-4xl font-display text-4xl font-semibold tracking-[-0.04em] md:text-6xl lg:text-7xl">
                I build AI-powered websites, web apps, dashboards, and automation tools for businesses.
              </h1>
              <p className="mt-5 text-xl font-medium text-brand-700 dark:text-brand-300 md:text-2xl">
                Software Developer | AI Integration Specialist
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                I help businesses launch Ecommerce website, Travel website,
                Clinic/EMR system, AI chatbot, Business dashboard, and Custom
                web app solutions that are fast, responsive, and useful.
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
                  variant="ghost"
                  dataCursor="Open"
                  download
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-8 rounded-[3rem] bg-brand-500/10 blur-3xl" />
              <div className="relative rounded-[2rem] border border-line bg-white/70 p-4 shadow-soft backdrop-blur dark:bg-slate-950/55">
                <Image
                  src="/razibdash.png"
                  alt="Razib Dash developer profile card"
                  width={720}
                  height={720}
                  priority
                  className="rounded-[1.5rem]"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-line bg-white/65 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft dark:bg-slate-950/45"
              data-cursor="View"
            >
              <item.icon className="h-5 w-5 text-brand-600 dark:text-brand-300" />
              <p className="mt-4 font-display text-3xl font-semibold">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-muted">{item.label}</p>
            </div>
          ))}
        </StaggerGroup>
      </Container>

      <section className="border-y border-line bg-white/45 py-16 backdrop-blur dark:bg-slate-950/30">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Websites, dashboards, and AI tools built around business goals."
            description="Choose a focused build or bring a custom workflow. I can help plan, design, develop, deploy, and improve it."
          />
          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex h-full flex-col rounded-3xl border border-line bg-white/65 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft dark:bg-slate-950/45"
                data-cursor="View"
              >
                <service.icon className="h-6 w-6 text-brand-600 dark:text-brand-300" />
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition hover:text-brand-600 dark:text-brand-300"
                  data-cursor="Open"
                >
                  Contact Me <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600 dark:text-brand-300">
                Who I Help
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                Practical builds for teams that need more than a pretty website.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                I work best with businesses that need a useful digital product:
                a clearer customer journey, a smarter internal workflow, or an
                AI feature that saves time.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton
                  href="/contact"
                  label="Start a Project"
                  icon={<Mail className="h-4 w-4" />}
                  dataCursor="Open"
                />
                <MagneticButton
                  href="/projects"
                  label="See Examples"
                  variant="secondary"
                  dataCursor="View"
                />
              </div>
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-4 sm:grid-cols-2">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="rounded-3xl border border-line bg-white/65 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft dark:bg-slate-950/45"
                data-cursor="View"
              >
                <audience.icon className="h-5 w-5 text-brand-600 dark:text-brand-300" />
                <h3 className="mt-4 font-display text-xl font-semibold">
                  {audience.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {audience.description}
                </p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </Container>

      <section className="border-y border-line bg-white/45 py-16 backdrop-blur dark:bg-slate-950/30">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600 dark:text-brand-300">
                  Why Work With Me
                </p>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                  Clean execution from idea to launch, with AI where it actually helps.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                  You get full-stack product thinking, responsive UI, practical
                  automation, and support after deployment so the work keeps
                  creating value.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <MagneticButton
                    href="/contact"
                    label="Hire Me"
                    icon={<Mail className="h-4 w-4" />}
                    dataCursor="Open"
                  />
                  <MagneticButton
                    href="/resume/cv.pdf"
                    label="Download CV"
                    icon={<Download className="h-4 w-4" />}
                    variant="secondary"
                    dataCursor="Open"
                    download
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-4 sm:grid-cols-2">
                {whyWorkWithMe.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-3xl border border-line bg-white/65 p-5 shadow-sm backdrop-blur dark:bg-slate-950/45"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-700 dark:text-brand-300">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    <p className="font-semibold">{item}</p>
                  </div>
                ))}
                <div className="rounded-3xl border border-line bg-brand-600 p-6 text-white shadow-glow sm:col-span-2">
                  <UsersRound className="h-6 w-6 text-white/80" />
                  <h3 className="mt-4 font-display text-2xl font-semibold">
                    Built for clear outcomes
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/80">
                    Whether the goal is more leads, smoother operations, or
                    faster internal work, every feature is shaped around a real
                    business result.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-white/45 py-20 backdrop-blur dark:bg-slate-950/30">
        <Container>
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured projects built for speed, usability, and strong product value."
          />
          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="group rounded-3xl transition hover:-translate-y-2 hover:shadow-soft dark:bg-slate-950/50"
                data-cursor="View"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={720}
                  height={460}
                  className="rounded-2xl object-cover"
                />
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-600 dark:text-brand-300">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted transition group-hover:text-brand-600 dark:group-hover:text-brand-300" />
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {project.summary}
                </p>
                <ProjectBadges badges={project.badges.slice(0, 3)} className="mt-4" />
              </Link>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <Container className="py-20">
        <SectionHeading
          eyebrow="Core Stack"
          title="A practical skill set for shipping modern applications."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {skills.map((group) => (
            <Reveal key={group.category}>
              <div className="h-full rounded-3xl border border-line bg-white/65 p-6 shadow-sm backdrop-blur dark:bg-slate-950/45">
                <h3 className="font-display text-xl font-semibold">
                  {group.category}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.slice(0, 8).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-line bg-paper px-3 py-1 text-sm text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 font-semibold text-brand-700 dark:text-brand-300"
            data-cursor="Open"
          >
            Explore full skill map <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>

      <section className="pb-20">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-line bg-white/70 p-8 shadow-soft backdrop-blur dark:bg-slate-950/55 md:p-10">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600 dark:text-brand-300">
                    Let&apos;s Build
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                    Need a website, dashboard, or AI automation tool?
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
                    Let&apos;s discuss your project and build something useful.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <MagneticButton
                    href="/contact"
                    label="Start a Project"
                    dataCursor="Open"
                  />
                  <MagneticButton
                    href="/resume/cv.pdf"
                    label="Download CV"
                    icon={<Download className="h-4 w-4" />}
                    variant="secondary"
                    dataCursor="Open"
                    download
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
