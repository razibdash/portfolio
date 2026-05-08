import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Reveal } from '@/components/motion/Reveal';
import { projects } from '@/data/projects';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Razib Dash`,
      description: project.summary,
      images: [{ url: project.image, width: 1200, height: 700, alt: project.title }]
    }
  };
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <Container className="py-14 md:py-20">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-brand-600 dark:hover:text-brand-300" data-cursor="Open">
        <ArrowLeft className="h-4 w-4" /> Back to projects
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.42fr]">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-600 dark:text-brand-300">{project.category}</p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">{project.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{project.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-line bg-white/70 p-6 shadow-soft backdrop-blur dark:bg-slate-950/50">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted">Project Links</p>
            <div className="mt-5 flex flex-col gap-3">
              <MagneticButton href={project.github} label="GitHub" icon={<Github className="h-4 w-4" />} variant="secondary" dataCursor="Open" />
              <MagneticButton href={project.live} label="Live Demo" icon={<ExternalLink className="h-4 w-4" />} dataCursor="Open" />
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-12 overflow-hidden rounded-[2rem] border border-line bg-white/65 p-3 shadow-soft dark:bg-slate-950/50">
          <Image src={project.image} alt={project.title} width={1400} height={850} priority className="rounded-[1.5rem] object-cover" />
        </div>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <Reveal>
          <div className="rounded-3xl border border-line bg-white/65 p-7 shadow-sm backdrop-blur dark:bg-slate-950/45">
            <h2 className="font-display text-2xl font-semibold">Tech Stack</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-line bg-paper px-3 py-1 text-sm text-muted">{tech}</span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-3xl border border-line bg-white/65 p-7 shadow-sm backdrop-blur dark:bg-slate-950/45">
            <h2 className="font-display text-2xl font-semibold">What this project shows</h2>
            <ul className="mt-5 space-y-4 text-muted">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 leading-7">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brand-600 dark:bg-brand-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Container>
  );
}
