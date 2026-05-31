import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface Post {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt?: string;
  coverImage?: string;
  coverImageAlt?: string;
  canonicalUrl: string;
  content: string;
  readingMinutes: number;
}

function readingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string | undefined,
    coverImage: data.coverImage as string | undefined,
    coverImageAlt: data.coverImageAlt as string | undefined,
    // The indexed canonical lives on the blog subdomain (same slug) — keeping it
    // there means the move to k8s loses no SEO.
    canonicalUrl:
      (data.canonicalUrl as string | undefined) ??
      `https://blog.rklosowski.com/${slug}`,
    content,
    readingMinutes: readingMinutes(content),
  };
}

export function getAllPosts(): Post[] {
  return getPostSlugs()
    .map(getPostBySlug)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function formatDate(d: string): string {
  return new Date(`${d}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
