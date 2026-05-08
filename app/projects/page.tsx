import type { Metadata } from 'next';
import { ProjectsClient } from '@/components/projects/ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Filtered project gallery of AI, web, and full-stack projects by Razib Dash.'
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
