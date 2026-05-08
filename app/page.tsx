import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  ExternalLink,
  Layers3,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

const highlights = [
  { label: "Full-stack builds", value: "12+", icon: Layers3 },
  { label: "AI experiments", value: "08+", icon: BrainCircuit },
  { label: "Clean code focus", value: "100%", icon: Code2 },
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
                Building sharp products with code, AI, and clarity
              </div>
              <h1 className="mt-8 font-display text-5xl font-semibold tracking-[-0.05em] md:text-7xl lg:text-8xl">
                Razib Dash
              </h1>
              <p className="mt-5 text-xl font-medium text-brand-700 dark:text-brand-300 md:text-2xl">
                Software Developer | AI Enthusiast
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                I design and develop fast, scalable, and user-focused web
                applications with modern frontend systems, reliable backend
                logic, and practical AI integrations.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <MagneticButton
                  href="/projects"
                  label="View Projects"
                  dataCursor="View"
                />
                <MagneticButton
                  href="/contact"
                  label="Contact Me"
                  variant="secondary"
                  dataCursor="Open"
                />
                <MagneticButton
                  href="/resume/razib-dash-resume.pdf"
                  label="Resume"
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
    </>
  );
}
