import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Github,
  ImageIcon,
  PlayCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { FlowDiagram } from "@/components/projects/FlowDiagram";
import { ProjectBadges } from "@/components/projects/ProjectBadges";
import { ProjectScreenshotCarousel } from "@/components/projects/ProjectScreenshotCarousel";
import { VideoPreviewModal } from "@/components/projects/VideoPreviewModal";
import { TechStackBadges } from "@/components/ui/TechStackBadges";
import { projects, type ProjectLink } from "@/data/projects";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  createPageMetadata,
  JsonLd,
} from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3 text-muted">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-7">
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-600 dark:text-brand-300" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function LinkAction({
  link,
  icon,
}: {
  link: ProjectLink;
  icon: ReactNode;
}) {
  if (link.href) {
    const isExternal = link.href.startsWith("http");

    return (
      <Link
        href={link.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white/70 px-4 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-brand-500/10 focus:outline-none focus:ring-2 focus:ring-brand-500/40 dark:bg-slate-950/50"
        data-cursor="Open"
      >
        {icon}
        {link.label}
      </Link>
    );
  }

  return (
    <span className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-paper px-4 py-3 text-sm font-semibold text-muted">
      {icon}
      {link.label}
    </span>
  );
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return createPageMetadata({
    title: `${project.title} Case Study`,
    description: `${project.summary} Case study by Razib Dash covering problem, role, features, tech stack, and full-stack development approach.`,
    path: `/projects/${project.slug}`,
    image: project.image,
    keywords: [
      project.category,
      project.status,
      ...project.badges,
      ...project.filters,
      ...project.stack,
      "Project case study",
    ],
  });
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const { caseStudy } = project;
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: `${project.title} Case Study`,
    description: project.description,
    url: absoluteUrl(`/projects/${project.slug}`),
    image: absoluteUrl(project.image),
    keywords: [...project.badges, ...project.filters, ...project.stack].join(", "),
    creator: {
      "@type": "Person",
      name: "Razib Dash",
      url: absoluteUrl("/"),
    },
    about: project.features,
    programmingLanguage: project.stack,
  };

  return (
    <Container className="py-14 md:py-20">
      <JsonLd
        data={[
          projectJsonLd,
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.title, path: `/projects/${project.slug}` },
          ]),
        ]}
      />
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/40 dark:hover:text-brand-300"
        data-cursor="Open"
      >
        <ArrowLeft className="h-4 w-4" /> Back to projects
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.42fr]">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-600 dark:text-brand-300">
              {project.category} / {project.status}
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              {project.description}
            </p>
            <ProjectBadges badges={project.badges} className="mt-6" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="rounded-3xl border border-line bg-white/70 p-6 shadow-soft backdrop-blur dark:bg-slate-950/50">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted">
              Project Links
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <VideoPreviewModal
                title={project.title}
                videoUrl={project.demoVideoUrl}
              />
              <LinkAction
                link={caseStudy.links.github}
                icon={<Github className="h-4 w-4" />}
              />
              <LinkAction
                link={caseStudy.links.live}
                icon={<ExternalLink className="h-4 w-4" />}
              />
              <LinkAction
                link={caseStudy.links.caseStudy}
                icon={<PlayCircle className="h-4 w-4" />}
              />
            </div>
            <div className="mt-5 space-y-2 text-sm leading-6 text-muted">
              {[caseStudy.links.github, caseStudy.links.live]
                .filter((link) => link.note)
                .map((link) => (
                  <p key={link.label}>{link.note}</p>
                ))}
            </div>
          </aside>
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-12">
          <ProjectScreenshotCarousel
            title={project.title}
            images={project.screenshots ?? [project.image]}
          />
        </div>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <Reveal>
          <section className="rounded-3xl border border-line bg-white/65 p-7 shadow-sm backdrop-blur dark:bg-slate-950/45">
            <h2 className="font-display text-2xl font-semibold">Problem</h2>
            <p className="mt-4 leading-8 text-muted">{caseStudy.problem}</p>
          </section>
        </Reveal>

        <Reveal delay={0.08}>
          <section className="rounded-3xl border border-line bg-white/65 p-7 shadow-sm backdrop-blur dark:bg-slate-950/45">
            <h2 className="font-display text-2xl font-semibold">My Role</h2>
            <p className="mt-4 leading-8 text-muted">{caseStudy.role}</p>
          </section>
        </Reveal>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <section className="h-full rounded-3xl border border-line bg-white/65 p-7 shadow-sm backdrop-blur dark:bg-slate-950/45">
            <h2 className="font-display text-2xl font-semibold">
              My Contribution
            </h2>
            <BulletList items={caseStudy.contribution} />
          </section>
        </Reveal>

        <Reveal delay={0.08}>
          <section className="h-full rounded-3xl border border-line bg-white/65 p-7 shadow-sm backdrop-blur dark:bg-slate-950/45">
            <h2 className="font-display text-2xl font-semibold">
              Key Features
            </h2>
            <BulletList items={caseStudy.keyFeatures} />
          </section>
        </Reveal>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <section className="rounded-3xl border border-line bg-white/65 p-7 shadow-sm backdrop-blur dark:bg-slate-950/45">
            <h2 className="font-display text-2xl font-semibold">Tech Stack</h2>
            <TechStackBadges items={project.stack} className="mt-5" />
          </section>
        </Reveal>

        {caseStudy.architecture && (
          <Reveal delay={0.08}>
            <FlowDiagram
              title={caseStudy.architecture.title}
              steps={caseStudy.architecture.steps}
            />
          </Reveal>
        )}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <section className="h-full rounded-3xl border border-line bg-white/65 p-7 shadow-sm backdrop-blur dark:bg-slate-950/45">
            <h2 className="font-display text-2xl font-semibold">
              Challenges & Solutions
            </h2>
            <div className="mt-5 space-y-5">
              {caseStudy.challenges.map((item) => (
                <div key={item.challenge} className="rounded-2xl border border-line bg-paper/70 p-4">
                  <h3 className="font-semibold text-ink">{item.challenge}</h3>
                  <p className="mt-2 leading-7 text-muted">{item.solution}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.08}>
          <section className="h-full rounded-3xl border border-line bg-white/65 p-7 shadow-sm backdrop-blur dark:bg-slate-950/45">
            <h2 className="font-display text-2xl font-semibold">
              Screenshots / Demo
            </h2>
            <p className="mt-4 leading-8 text-muted">
              {caseStudy.demo.description}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {caseStudy.demo.items.map((item) => (
                <div
                  key={item}
                  className="grid min-h-32 place-items-center rounded-2xl border border-dashed border-brand-500/35 bg-brand-500/10 p-4 text-center"
                >
                  <div>
                    <ImageIcon className="mx-auto h-6 w-6 text-brand-600 dark:text-brand-300" />
                    <p className="mt-3 text-sm font-semibold text-ink">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      </div>

      <Reveal>
        <section className="mt-8 rounded-[2rem] border border-line bg-gradient-to-br from-brand-600 to-slate-950 p-8 text-white shadow-soft md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
            Result / Impact
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
            Practical proof of full-stack product development.
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-blue-50">
            {caseStudy.result}
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-8 rounded-[2rem] border border-line bg-white/70 p-8 shadow-soft backdrop-blur dark:bg-slate-950/50 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600 dark:text-brand-300">
                Build Something Similar
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
                Need a custom web app, dashboard, AI chatbot, or automation tool?
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-muted">
                Contact me to discuss a project like {project.title}, or a
                custom solution for your business workflow.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
              data-cursor="Open"
            >
              Start a Project <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </section>
      </Reveal>
    </Container>
  );
}
