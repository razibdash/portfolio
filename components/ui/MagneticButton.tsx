'use client';

import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { MouseEvent, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: ReactNode;
  dataCursor?: string;
  download?: boolean;
};

export function MagneticButton({ href, label, variant = 'primary', icon, dataCursor = 'Open', download }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.2 });

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span style={{ x: springX, y: springY }} className="inline-flex">
      <Link
        href={href}
        download={download}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        data-cursor={dataCursor}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition active:scale-95',
          variant === 'primary' && 'bg-brand-600 text-white shadow-glow hover:bg-brand-700',
          variant === 'secondary' && 'border border-line bg-white/70 text-ink shadow-sm hover:bg-brand-500/10 dark:bg-slate-950/50',
          variant === 'ghost' && 'text-muted hover:bg-brand-500/10 hover:text-ink'
        )}
      >
        {icon ?? null}
        {label}
        {!icon && <ArrowRight className="h-4 w-4" />}
      </Link>
    </motion.span>
  );
}
