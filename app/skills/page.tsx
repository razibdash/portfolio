import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Braces,
  CheckCircle2,
  Code2,
  Database,
  Layers3,
  MonitorSmartphone,
  Rocket,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechStackBadges } from "@/components/ui/TechStackBadges";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { skills } from "@/data/skills";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Skills",
  description:
    "Frontend, backend, AI, and tooling skill categories of Razib Dash.",
  path: "/skills",
});

const totalSkills = skills.reduce(
  (total, group) => total + group.items.length,
  0,
);

const categoryMeta: Record<
  string,
  {
    icon: LucideIcon;
    accent: string;
    focus: string;
    outcome: string;
  }
> = {
  Frontend: {
    icon: MonitorSmartphone,
    accent: "from-sky-500/15 via-cyan-500/10 to-emerald-500/10",
    focus: "Interfaces, components, motion, responsiveness, and accessibility.",
    outcome:
      "Product screens that feel clear, fast, and polished on real devices.",
  },
  Backend: {
    icon: Server,
    accent: "from-indigo-500/15 via-blue-500/10 to-slate-500/10",
    focus:
      "APIs, authentication, validation, data models, and server-side workflows.",
    outcome:
      "Reliable application foundations for dashboards, portals, and business tools.",
  },
  AI: {
    icon: BrainCircuit,
    accent: "from-fuchsia-500/15 via-violet-500/10 to-sky-500/10",
    focus:
      "OpenAI integrations, assistant flows, retrieval concepts, and automation.",
    outcome:
      "Useful AI features that answer questions, process content, and reduce manual work.",
  },
  Tools: {
    icon: Wrench,
    accent: "from-amber-500/15 via-lime-500/10 to-teal-500/10",
    focus:
      "Developer workflow, deployment, API testing, version control, and team handoff.",
    outcome:
      "Cleaner delivery habits from local development through production launch.",
  },
};

const snapshot = [
  { value: `${totalSkills}+`, label: "Practical Skills", icon: Sparkles },
  { value: `${skills.length}`, label: "Core Areas", icon: Layers3 },
  { value: "AI", label: "Product Focus", icon: Bot },
  { value: "Full Stack", label: "Build Range", icon: Code2 },
];

const capabilityAreas = [
  {
    title: "Product Frontends",
    description:
      "Responsive landing pages, dashboards, admin screens, forms, and interactive product flows.",
    icon: Braces,
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "Business Backends",
    description:
      "API routes, REST services, authentication flows, validation layers, and database-connected features.",
    icon: Database,
    skills: ["Node.js", "Express", "Laravel", "REST API", "Prisma"],
  },
  {
    title: "AI Workflows",
    description:
      "Chat assistants, prompt workflows, document-aware features, automation helpers, and evaluation habits.",
    icon: Bot,
    skills: [
      "OpenAI API",
      "AI Assistants",
      "RAG Concepts",
      "Embeddings",
      "Automation",
    ],
  },
];

const deliveryHabits = [
  "Plan clean user flows before building screens.",
  "Use typed components and reusable UI patterns.",
  "Connect frontend states to real backend behavior.",
  "Validate inputs, errors, and important edge cases.",
  "Prepare projects for deployment and practical handoff.",
];

export default function SkillsPage() {
  return (
    <>
      <Container className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute right-4 top-12 h-40 w-40 rounded-[2.5rem] border border-brand-500/20 rotate-12" />
        <div className="pointer-events-none absolute bottom-12 left-8 h-28 w-28 rounded-[2rem] border border-line -rotate-12" />

        <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-end">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Skills"
                title="A technical toolkit for building useful web products."
                description="Grouped by real product work: polished interfaces, dependable backend features, AI-assisted workflows, and the delivery habits that help projects ship cleanly."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton
                  href="/projects"
                  label="See Projects"
                  dataCursor="Open"
                />
                <MagneticButton
                  href="/contact"
                  label="Discuss a Build"
                  variant="secondary"
                  icon={<ArrowRight className="h-4 w-4" />}
                  dataCursor="Open"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid grid-cols-2 gap-4">
              {snapshot.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-line bg-white/70 p-5 shadow-sm backdrop-blur dark:bg-slate-950/50"
                  >
                    <Icon className="h-5 w-5 text-brand-600 dark:text-brand-300" />
                    <p className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em]">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm text-muted">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>

      <section className="border-y border-line bg-white/45 py-16 backdrop-blur dark:bg-slate-950/25 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-start">
            <Reveal>
              <div className="sticky top-28">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600 dark:text-brand-300">
                  Skill Map
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                  The stack is organized around what each layer needs to do.
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  Each category connects tools to an outcome, so the page reads
                  like a capability map instead of a plain keyword list.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2">
              {skills.map((group, index) => {
                const meta = categoryMeta[group.category] ?? categoryMeta.Tools;
                const Icon = meta.icon;

                return (
                  <Reveal key={group.category} delay={index * 0.05}>
                    <div
                      className="group h-full overflow-hidden rounded-3xl border border-line bg-white/70 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft dark:bg-slate-950/55"
                      data-cursor="View"
                    >
                      <div className={`h-2 bg-gradient-to-r ${meta.accent}`} />
                      <div className="p-7">
                        <div className="flex items-start justify-between gap-4">
                          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-paper text-brand-600 dark:text-brand-300">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300">
                            {group.items.length} skills
                          </span>
                        </div>
                        <h3 className="mt-5 font-display text-2xl font-semibold">
                          {group.category}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-muted">
                          {group.description}
                        </p>
                        <div className="mt-5 rounded-2xl border border-line bg-paper/70 p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-300">
                            Focus
                          </p>
                          <p className="mt-2 text-sm leading-6 text-muted">
                            {meta.focus}
                          </p>
                          <p className="mt-3 text-sm font-medium text-ink">
                            {meta.outcome}
                          </p>
                        </div>
                        <TechStackBadges items={group.items} className="mt-6" />
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-16 md:py-20">
        <SectionHeading
          eyebrow="Applied Strengths"
          title="Where the skills create the most value."
          description="The strongest work sits at the intersection of UI, backend logic, and practical AI features for business workflows."
        />

        <StaggerGroup className="mt-10 grid gap-6 lg:grid-cols-3">
          {capabilityAreas.map((area) => {
            const Icon = area.icon;

            return (
              <div
                key={area.title}
                className="h-full rounded-3xl border border-line bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft dark:bg-slate-950/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-700 dark:text-brand-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {area.description}
                </p>
                <TechStackBadges items={area.skills} className="mt-5" />
              </div>
            );
          })}
        </StaggerGroup>
      </Container>

      <section className="pb-16 md:pb-24">
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-line bg-white/70 shadow-soft backdrop-blur dark:bg-slate-950/55">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="border-b border-line p-8 md:p-10 lg:border-b-0 lg:border-r">
                  <p className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-muted">
                    <ShieldCheck className="h-4 w-4 text-brand-600 dark:text-brand-300" />
                    Delivery habits
                  </p>
                  <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                    Skills are strongest when they show up in the build process.
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-muted">
                    The page now highlights both technologies and the way they
                    support maintainable, client-ready product work.
                  </p>
                </div>

                <div className="p-8 md:p-10">
                  <div className="grid gap-4">
                    {deliveryHabits.map((habit) => (
                      <div
                        key={habit}
                        className="flex items-start gap-3 rounded-2xl border border-line bg-paper/70 p-4"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-600 dark:text-brand-300" />
                        <p className="text-sm leading-6 text-muted">{habit}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <Link
                      href="/services"
                      className="group rounded-2xl border border-line bg-paper/70 p-5 transition hover:border-brand-500/40 hover:bg-brand-500/10"
                      data-cursor="Open"
                    >
                      <Settings2 className="h-5 w-5 text-brand-600 dark:text-brand-300" />
                      <h3 className="mt-4 font-display text-lg font-semibold">
                        Services
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        See the project types these skills support.
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 dark:text-brand-300">
                        View services{" "}
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </Link>
                    <Link
                      href="/projects"
                      className="group rounded-2xl border border-line bg-paper/70 p-5 transition hover:border-brand-500/40 hover:bg-brand-500/10"
                      data-cursor="Open"
                    >
                      <Rocket className="h-5 w-5 text-brand-600 dark:text-brand-300" />
                      <h3 className="mt-4 font-display text-lg font-semibold">
                        Projects
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        Review real examples across web, dashboard, and AI work.
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 dark:text-brand-300">
                        View projects{" "}
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
