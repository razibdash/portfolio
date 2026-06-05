import type { Metadata } from 'next';
import { BriefcaseBusiness } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Software engineering experience timeline of Razib Dash, CSE graduate from Metropolitan University Bangladesh.'
};

const timeline = [
  {
    role: 'Software Engineer',
    company: 'Professional Development Track',
    period: 'Current',
    details: [
      'Apply CSE fundamentals from Metropolitan University Bangladesh to practical software engineering work.',
      'Build and maintain responsive web interfaces with clean component architecture.',
      'Work with APIs, form validation, reusable UI patterns, and data-driven layouts.',
      'Explore AI-assisted features, automation workflows, and practical product improvements.',
      'Focus on writing maintainable TypeScript and improving application performance.'
    ]
  }
];

export default function ExperiencePage() {
  return (
    <Container className="py-16 md:py-24">
      <SectionHeading eyebrow="Experience" title="Focused growth as a Software Engineer." description="A concise professional timeline that highlights my CSE background, practical responsibilities, engineering habits, and direction." />

      <div className="mt-14 border-l border-line pl-6 md:pl-10">
        {timeline.map((item, index) => (
          <Reveal key={item.role} delay={index * 0.08}>
            <div className="relative pb-10">
              <div className="absolute -left-[2.55rem] top-0 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper shadow-sm md:-left-[3.75rem]">
                <BriefcaseBusiness className="h-5 w-5 text-brand-600 dark:text-brand-300" />
              </div>
              <div className="rounded-[2rem] border border-line bg-white/70 p-7 shadow-soft backdrop-blur dark:bg-slate-950/50">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl font-semibold">{item.role}</h2>
                    <p className="mt-1 text-muted">{item.company}</p>
                  </div>
                  <span className="rounded-full bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-700 dark:text-brand-300">{item.period}</span>
                </div>
                <ul className="mt-6 grid gap-3 text-muted md:grid-cols-2">
                  {item.details.map((detail) => (
                    <li key={detail} className="rounded-2xl border border-line bg-paper/70 p-4 leading-7">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
