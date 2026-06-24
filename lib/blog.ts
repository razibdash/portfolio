import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  summary: string;
  excerpt: string;
  date: string;
  publishedAt: string;
  tag: string;
  category: string;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function readPost(fileName: string): BlogPost {
  const slug = fileName.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    seoTitle: data.seoTitle,
    metaDescription: data.metaDescription,
    summary: data.summary,
    excerpt: data.excerpt,
    date: data.date,
    publishedAt: data.publishedAt,
    tag: data.tag,
    category: data.category,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map(readPost)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const fileName = `${slug}.mdx`;
  if (!fs.existsSync(path.join(BLOG_DIR, fileName))) return undefined;
  return readPost(fileName);
}
