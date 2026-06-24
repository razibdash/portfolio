import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';
import { BlogCover } from '@/components/blog/BlogCover';
import { getAllPosts } from '@/lib/blog';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Blog on AI, Web Development & Automation',
  description:
    'Read client-focused articles by Razib Dash about AI chatbots, clinic EMR software, ecommerce websites, business dashboards, custom web apps, MVP development, and AI automation.',
  path: '/blog',
  keywords: ['AI chatbot blog', 'EMR software blog', 'business automation articles'],
});

export default function BlogPage() {
  const blogs = getAllPosts();

  return (
    <Container className="py-16 md:py-24">
      <SectionHeading eyebrow="Blog" title="Notes on software, AI, and building better products." description="Short technical writing that explains what I am learning, building, and improving." />
      <div className="mt-12 grid gap-6">
        {blogs.map((post, index) => (
          <Reveal key={post.slug} delay={index * 0.06}>
            <Link href={`/blog/${post.slug}`} className="group block rounded-[2rem] border border-line bg-white/70 p-7 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft dark:bg-slate-950/50" data-cursor="Read">
              <div className="grid gap-5 sm:grid-cols-[200px_1fr] sm:items-center">
                <BlogCover slug={post.slug} tag={post.tag} />
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                    <span className="rounded-full bg-brand-500/10 px-3 py-1 font-semibold text-brand-700 dark:text-brand-300">{post.tag}</span>
                    <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {post.date}</span>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-6">
                    <div>
                      <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{post.title}</h2>
                      <p className="mt-3 max-w-3xl leading-7 text-muted">{post.excerpt}</p>
                    </div>
                    <ArrowRight className="mt-2 h-5 w-5 shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-brand-600 dark:group-hover:text-brand-300" />
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
