import type { Metadata } from 'next';
import { ContactClient } from '@/components/contact/ContactClient';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact for Web Development & AI Projects',
  description:
    'Contact Razib Dash to discuss ecommerce website development, travel websites, clinic / EMR software, AI chatbots, business dashboards, custom web apps, and AI automation projects.',
  path: '/contact',
});

export default function ContactPage() {
  return <ContactClient />;
}
