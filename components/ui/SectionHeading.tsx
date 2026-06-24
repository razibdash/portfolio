import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  level = 'h2',
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  level?: 'h1' | 'h2';
}) {
  const Heading = level;

  return (
    <div className={cn('max-w-3xl', centered && 'mx-auto text-center')}>
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600 dark:text-brand-300">{eyebrow}</p>
      <Heading className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{title}</Heading>
      {description && <p className="mt-5 text-lg leading-8 text-muted">{description}</p>}
    </div>
  );
}
