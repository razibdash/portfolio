import type { Metadata } from 'next';
import { ProjectsClient } from '@/components/projects/ProjectsClient';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Projects & Case Studies',
  description:
    'Explore Razib Dash project case studies in clinic EMR software, AI chatbots, AI automation, business dashboards, browser extensions, RAG apps, and full-stack web development.',
  path: '/projects',
  keywords: ['Project case studies', 'AI portfolio projects', 'EMR software project'],
});

export default function ProjectsPage() {
  return <ProjectsClient />;
}
