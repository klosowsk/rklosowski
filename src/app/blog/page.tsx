import Image from "next/image";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import PostSearch from "@/components/blog/PostSearch";
import { getRequestDictionary } from "@/i18n/getLocale";

export const metadata: Metadata = {
  title: "Blog — Rodrigo Klosowski",
  description: "Writing on software, homelabs, AI, and building things.",
  alternates: { canonical: "https://blog.rklosowski.com/" },
};

export default function BlogIndex() {
  const { locale, t } = getRequestDictionary();
  const posts = getAllPosts();
  return (
    <main className="flex min-h-screen flex-col items-center px-6 pb-16 pt-16 md:pt-24">
      <div className="w-full max-w-2xl">
        <header className="mb-14 flex flex-col items-center text-center">
          <Image
            src="/assets/images/me.jpg"
            alt="Rodrigo Klosowski"
            width={96}
            height={96}
            priority
            className="h-24 w-24 rounded-full object-cover"
          />
          <h1 className="mt-5 text-2xl font-bold">{t.blog.index.name}</h1>
          <p className="mt-2 max-w-md text-balance text-sm text-gray-600 dark:text-gray-400">
            {t.blog.index.tagline}
          </p>
        </header>

        <PostSearch
          initialLocale={locale}
          labels={t.blog.index}
          posts={posts.map((p) => ({
            slug: p.slug,
            title: p.title,
            date: p.date,
            excerpt: p.excerpt,
            readingMinutes: p.readingMinutes,
            languages: p.languages,
          }))}
        />
      </div>
    </main>
  );
}
