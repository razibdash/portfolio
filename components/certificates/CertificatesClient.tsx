'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StaggerGroup } from '@/components/motion/StaggerGroup';
import { certificates, type Certificate } from '@/data/certificates';

export function CertificatesClient() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <Container className="py-16 md:py-24">
      <SectionHeading eyebrow="Certificates" title="Proof of continuous learning and focused technical development." description="Click any certificate card to preview it in a clean modal lightbox." />

      <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <button key={certificate.id} onClick={() => setSelected(certificate)} className="group rounded-[2rem] border border-line bg-white/70 p-4 text-left shadow-sm backdrop-blur transition hover:-translate-y-2 hover:shadow-soft dark:bg-slate-950/50" data-cursor="View">
            <Image src={certificate.image} alt={certificate.title} width={720} height={480} className="rounded-2xl transition duration-500 group-hover:scale-[1.02]" />
            <div className="p-3">
              <h2 className="font-display text-xl font-semibold">{certificate.title}</h2>
              <p className="mt-1 text-sm text-muted">{certificate.issuer} · {certificate.year}</p>
            </div>
          </button>
        ))}
      </StaggerGroup>

      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-[90] grid place-items-center bg-slate-950/70 p-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div className="relative w-full max-w-4xl rounded-[2rem] border border-white/10 bg-paper p-4 shadow-soft" initial={{ scale: 0.92, y: 24 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92, y: 24 }} onClick={(event) => event.stopPropagation()}>
              <button onClick={() => setSelected(null)} className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-950/80 text-white" aria-label="Close certificate preview" data-cursor="Close">
                <X className="h-5 w-5" />
              </button>
              <Image src={selected.image} alt={selected.title} width={1200} height={800} className="rounded-[1.5rem]" />
              <div className="p-4">
                <h3 className="font-display text-2xl font-semibold">{selected.title}</h3>
                <p className="mt-1 text-muted">{selected.issuer} · {selected.year}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
}
