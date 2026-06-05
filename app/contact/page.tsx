import type { Metadata } from 'next';
import { ContactClient } from '@/components/contact/ContactClient';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Send a project request to Razib Dash for websites, web apps, dashboards, AI chatbots, automation tools, ecommerce, and clinic EMR systems.'
};

export default function ContactPage() {
  return <ContactClient />;
}
