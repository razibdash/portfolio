import type { Metadata } from 'next';
import { CertificatesClient } from '@/components/certificates/CertificatesClient';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Certificates',
  description: 'Certificate gallery with preview modal for Razib Dash.',
  path: '/certificates',
});

export default function CertificatesPage() {
  return <CertificatesClient />;
}
