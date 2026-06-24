import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { ArrowLeft, ArrowRight, CalendarDays } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/motion/Reveal';
import { BlogCover } from '@/components/blog/BlogCover';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
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

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
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
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const otherPosts = getAllPosts()
    .filter((item) => item.slug !== post.slug)
    .slice(0, 5);

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

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_320px]">
        <Reveal>
          <article>
            <div className="rounded-[2rem] border border-line bg-white/70 p-7 shadow-soft backdrop-blur dark:bg-slate-950/50 md:p-10">
              <BlogCover slug={post.slug} tag={post.tag} size="lg" />
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted">
                <span className="rounded-full bg-brand-500/10 px-3 py-1 font-semibold text-brand-700 dark:text-brand-300">{post.tag}</span>
                <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {post.date}</span>
              </div>
              <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-6xl">{post.title}</h1>
              <p className="mt-5 text-lg leading-8 text-muted">{post.summary}</p>
            </div>

            <div className="prose-custom mt-10 rounded-[2rem] border border-line bg-white/75 p-7 shadow-sm backdrop-blur dark:bg-slate-950/50 md:p-10">
              <MDXRemote
                source={post.content}
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                      [rehypePrettyCode, { theme: "github-dark" }],
                    ],
                  },
                }}
              />
            </div>
          </article>
        </Reveal>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[2rem] border border-line bg-white/70 p-6 shadow-sm backdrop-blur dark:bg-slate-950/50">
            <h2 className="font-display text-lg font-semibold tracking-tight">
              More posts
            </h2>
            <div className="mt-5 grid gap-4">
              {otherPosts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group block rounded-2xl border border-line bg-paper/70 p-3 transition hover:border-brand-500/40 hover:bg-brand-500/10"
                  data-cursor="Read"
                >
                  <BlogCover slug={item.slug} tag={item.tag} />
                  <h3 className="mt-3 font-display text-sm font-semibold leading-5">
                    {item.title}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-700 dark:text-brand-300">
                    Read post{" "}
                    <ArrowRight className="h-3 w-3 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </Container>
  );
}
