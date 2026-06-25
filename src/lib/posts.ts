import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import {
  defaultLocale,
  intlLocale,
  isLocale,
  type Locale,
} from "@/i18n/config";

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
  // Languages this post should appear under in the blog index. Declared via the
  // `lang` frontmatter (a string or an array); defaults to ["en"] when absent.
  languages: Locale[];
}

// Normalizes the `lang` frontmatter into a list of valid locales. Accepts
// `lang: pt`, `lang: [en, pt]` (shown in both lists), or nothing (-> ["en"]).
function normalizeLangs(value: unknown): Locale[] {
  const raw = Array.isArray(value) ? value : value != null ? [value] : [];
  const langs = raw.filter(isLocale);
  return langs.length ? langs : [defaultLocale];
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
    languages: normalizeLangs(data.lang),
  };
}

export function getAllPosts(): Post[] {
  return getPostSlugs()
    .map(getPostBySlug)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function formatDate(d: string, locale: Locale = defaultLocale): string {
  return new Date(`${d}T00:00:00`).toLocaleDateString(intlLocale[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
