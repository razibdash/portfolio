'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'loading' | 'success' | 'error';

const socials = [
  { label: 'GitHub', href: 'https://github.com/', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: Linkedin },
  { label: 'Email', href: 'mailto:razibdash@example.com', icon: Mail }
];

export function ContactClient() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setError('');

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      message: String(formData.get('message') || '').trim()
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus('error');
      setError('Please fill in every field before sending.');
      return;
    }

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      setStatus('error');
      setError(data?.error ?? 'Something went wrong. Please try again.');
      return;
    }

    setStatus('success');
    event.currentTarget.reset();
  }

  return (
    <Container className="py-16 md:py-24">
      <SectionHeading eyebrow="Contact" title="Let’s build something sharp, useful, and production-ready." description="Use the form for project ideas, hiring conversations, collaboration, or general questions." />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="rounded-[2rem] border border-line bg-white/70 p-7 shadow-soft backdrop-blur dark:bg-slate-950/50">
            <h2 className="font-display text-2xl font-semibold">Social links</h2>
            <p className="mt-3 leading-7 text-muted">Reach out directly or explore my work across professional platforms.</p>
            <div className="mt-6 grid gap-3">
              {socials.map((item) => (
                <Link key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} className="flex items-center gap-3 rounded-2xl border border-line bg-paper/70 p-4 text-muted transition hover:-translate-y-1 hover:text-brand-600 dark:hover:text-brand-300" data-cursor="Open">
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-line bg-white/70 p-7 shadow-soft backdrop-blur dark:bg-slate-950/50">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">
                Name
                <input name="name" className="rounded-2xl border border-line bg-paper px-4 py-3 font-normal outline-none transition focus:border-brand-500" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Email
                <input name="email" type="email" className="rounded-2xl border border-line bg-paper px-4 py-3 font-normal outline-none transition focus:border-brand-500" placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-semibold">
              Message
              <textarea name="message" rows={7} className="resize-none rounded-2xl border border-line bg-paper px-4 py-3 font-normal outline-none transition focus:border-brand-500" placeholder="Tell me about your project or opportunity." />
            </label>

            {error && <p className="mt-4 rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-300">{error}</p>}
            {status === 'success' && <p className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-700 dark:text-emerald-300">Message validated successfully. Connect the API route to Resend, Nodemailer, or your preferred email service for production.</p>}

            <button disabled={status === 'loading'} className={cn('mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70')} data-cursor="Send">
              <Send className="h-4 w-4" />
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </Reveal>
      </div>
    </Container>
  );
}
