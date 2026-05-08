import type { Metadata } from 'next';
import { CertificatesClient } from '@/components/certificates/CertificatesClient';

export const metadata: Metadata = {
  title: 'Certificates',
  description: 'Certificate gallery with preview modal for Razib Dash.'
};

export default function CertificatesPage() {
  return <CertificatesClient />;
}
