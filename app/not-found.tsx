import { Container } from '@/components/ui/Container';
import { MagneticButton } from '@/components/ui/MagneticButton';

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] items-center justify-center py-20 text-center">
      <div className="max-w-xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-brand-600 dark:text-brand-300">404</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">This page drifted off the grid.</h1>
        <p className="mx-auto mt-5 max-w-md text-muted">The route you requested does not exist, but the portfolio is still running smoothly.</p>
        <div className="mt-8 flex justify-center">
          <MagneticButton href="/" label="Go home" dataCursor="Open" />
        </div>
      </div>
    </Container>
  );
}
