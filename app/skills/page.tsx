import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';
import { skills } from '@/data/skills';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Frontend, backend, AI, and tooling skill categories of Razib Dash.'
};

export default function SkillsPage() {
  return (
    <Container className="py-16 md:py-24">
      <SectionHeading eyebrow="Skills" title="A balanced technical toolkit for modern product engineering." description="Grouped skills make it easy for recruiters and collaborators to understand where I can contribute immediately and where I am growing next." />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skills.map((group, index) => (
          <Reveal key={group.category} delay={index * 0.05}>
            <div className="h-full rounded-[2rem] border border-line bg-white/70 p-7 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft dark:bg-slate-950/50" data-cursor="View">
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-display text-2xl font-semibold">{group.category}</h2>
                <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300">{group.items.length} skills</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">{group.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-full border border-line bg-paper px-3 py-1.5 text-sm text-muted">{skill}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
