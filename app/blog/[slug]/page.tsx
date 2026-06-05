import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ArrowLeft, CalendarDays } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/motion/Reveal';
import { blogs } from '@/data/blogs';
import { mdxComponents } from '@/mdx-components';
import {
  absoluteUrl,
  breadcrumbJsonLd,
  createPageMetadata,
  JsonLd,
} from '@/lib/seo';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);
  if (!post) return { title: 'Blog Not Found' };

  return createPageMetadata({
    title: post.seoTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    type: 'article',
    keywords: [post.category, post.tag],
  });
}

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);

  if (!post) notFound();

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: {
      '@type': 'Person',
      name: 'Razib Dash',
      url: absoluteUrl('/'),
    },
    publisher: {
      '@type': 'Person',
      name: 'Razib Dash',
      url: absoluteUrl('/'),
    },
    image: absoluteUrl('/og-image.png'),
    articleSection: post.category,
  };

  return (
    <Container className="py-14 md:py-20">
      <JsonLd
        data={[
          blogPostingJsonLd,
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-brand-600 dark:hover:text-brand-300" data-cursor="Open">
        <ArrowLeft className="h-4 w-4" /> Back to blog
      </Link>
      <Reveal>
        <article className="mx-auto mt-8 max-w-4xl">
          <div className="rounded-[2rem] border border-line bg-white/70 p-7 shadow-soft backdrop-blur dark:bg-slate-950/50 md:p-10">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
              <span className="rounded-full bg-brand-500/10 px-3 py-1 font-semibold text-brand-700 dark:text-brand-300">{post.tag}</span>
              <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {post.date}</span>
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-6xl">{post.title}</h1>
            <p className="mt-5 text-lg leading-8 text-muted">{post.summary}</p>
          </div>

          <div className="prose-custom mt-10 rounded-[2rem] border border-line bg-white/75 p-7 shadow-sm backdrop-blur dark:bg-slate-950/50 md:p-10">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </article>
      </Reveal>
    </Container>
  );
}
