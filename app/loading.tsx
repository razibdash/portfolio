import { Container } from '@/components/ui/Container';
import { SkeletonCard } from '@/components/ui/SkeletonCard';

export default function Loading() {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-3xl text-center">
        <div className="skeleton mx-auto mb-5 h-6 w-32 rounded-full" />
        <div className="skeleton mx-auto mb-4 h-12 w-3/4 rounded-2xl" />
        <div className="skeleton mx-auto h-5 w-2/3 rounded-full" />
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </Container>
  );
}
