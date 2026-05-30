import type { Metadata } from 'next';
import { ProjectsClient } from '@/components/projects/ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Filtered project gallery of full-stack, AI, healthcare, backend, browser extension, and RAG projects by Razib Dash.'
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
