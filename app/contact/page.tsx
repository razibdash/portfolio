import type { Metadata } from 'next';
import { ContactClient } from '@/components/contact/ContactClient';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Razib Dash for software development, AI projects, collaboration, and hiring opportunities.'
};

export default function ContactPage() {
  return <ContactClient />;
}
