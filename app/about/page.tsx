import type { Metadata } from 'next';
import { BrainCircuit, Code2, Rocket, Target } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'About',
  description: 'Professional summary, journey, skills, and goals of Razib Dash.'
};

const cards = [
  { title: 'Developer mindset', icon: Code2, copy: 'I care about readable code, clean architecture, fast interfaces, and user journeys that feel obvious without needing extra explanation.' },
  { title: 'AI curiosity', icon: BrainCircuit, copy: 'I enjoy turning AI concepts into useful tools, from intelligent dashboards to small automation systems that reduce repetitive work.' },
  { title: 'Product thinking', icon: Target, copy: 'I look beyond features and think about the problem, the user, the business value, and the simplest version that can be shipped well.' },
  { title: 'Growth direction', icon: Rocket, copy: 'My goal is to grow into a strong full-stack engineer who can build production-grade AI-powered applications end to end.' }
];

export default function AboutPage() {
  return (
    <Container className="py-16 md:py-24">
      <SectionHeading eyebrow="About" title="A developer focused on useful software, calm design, and practical AI." description="I build digital products that are clear, fast, and maintainable. My focus is not only writing code, but shaping complete experiences that feel reliable from the first click." />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="sticky top-28 rounded-[2rem] border border-line bg-white/70 p-8 shadow-soft backdrop-blur dark:bg-slate-950/50">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600 dark:text-brand-300">Professional Summary</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">Razib Dash</h2>
            <p className="mt-5 leading-8 text-muted">
              I am a Software Developer and AI enthusiast with a strong interest in building modern web applications, full-stack platforms, and intelligent systems. I enjoy working where clean interface design meets strong engineering logic.
            </p>
            <p className="mt-4 leading-8 text-muted">
              My current direction is to strengthen my skills in production-level frontend engineering, backend APIs, database design, authentication, deployment, and AI-powered product development.
            </p>
          </div>
        </Reveal>

        <div className="space-y-6">
          {cards.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="rounded-3xl border border-line bg-white/65 p-7 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft dark:bg-slate-950/45" data-cursor="View">
                <item.icon className="h-6 w-6 text-brand-600 dark:text-brand-300" />
                <h3 className="mt-4 font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted">{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="mt-10 rounded-[2rem] border border-line bg-gradient-to-br from-brand-600 to-slate-950 p-8 text-white shadow-soft md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">Journey</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">From learning fundamentals to building polished applications.</h2>
          <p className="mt-5 max-w-4xl leading-8 text-blue-50">
            My journey is built around consistent practice: learning core programming concepts, building real interfaces, connecting APIs, improving project structure, and exploring how AI can make software more useful. I prefer steady improvement over shortcuts, and I aim to build work that can be understood, maintained, and trusted.
          </p>
        </div>
      </Reveal>
    </Container>
  );
}
