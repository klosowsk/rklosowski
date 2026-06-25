import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostSlugs, formatDate } from "@/lib/posts";
import Markdown from "@/components/blog/Markdown";
import PostFooterNav from "@/components/blog/PostFooterNav";
import { getRequestDictionary } from "@/i18n/getLocale";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

function neighbours(slug: string) {
  const all = getAllPosts(); // newest -> oldest
  const idx = all.findIndex((p) => p.slug === slug);
  if (idx === -1) return { post: null, newer: undefined, older: undefined };
  return { post: all[idx], newer: all[idx - 1], older: all[idx + 1] };
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const { post } = neighbours(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Rodrigo Klosowski`,
    description: post.excerpt,
    alternates: { canonical: post.canonicalUrl },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: post.canonicalUrl,
      publishedTime: post.date,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const { locale, t } = getRequestDictionary();
  const { post, newer, older } = neighbours(params.slug);
  if (!post) notFound();

  return (
    <main className="flex min-h-screen flex-col items-center px-6 pb-16 pt-12 md:pt-16">
      <article className="w-full max-w-2xl">
        <Link href="/blog" className="text-sm font-bold text-cyan-500">
          {t.blog.post.allPosts}
        </Link>

        <header className="mb-8 mt-5 flex flex-col space-y-5">
          <h1 className="text-balance text-4xl font-bold leading-tight md:text-[2.75rem]">
            {post.title}
          </h1>
          <div className="flex items-center gap-3">
            <Image
              src="/assets/images/me.jpg"
              alt="Rodrigo Klosowski"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-medium">
                {t.blog.post.publishedBy}
              </span>
              <span className="font-mono text-xs text-gray-500">
                {formatDate(post.date, locale)} · {post.readingMinutes}{" "}
                {t.blog.post.minRead}
              </span>
            </div>
          </div>
        </header>

        {post.coverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.coverImage}
            alt={post.coverImageAlt ?? ""}
            className="mb-10 w-full rounded-lg border border-black/10 dark:border-white/10"
          />
        )}

        <div
          className="prose prose-neutral max-w-none dark:prose-invert
            prose-headings:font-bold
            prose-a:font-mono prose-a:text-cyan-500 prose-a:no-underline hover:prose-a:underline
            prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
            prose-img:rounded-lg prose-img:border prose-img:border-black/10 dark:prose-img:border-white/10
            prose-blockquote:border-l-cyan-500"
        >
          <Markdown content={post.content} />
        </div>

        <PostFooterNav
          older={older}
          newer={newer}
          previousLabel={t.blog.post.previous}
          nextLabel={t.blog.post.next}
        />
      </article>
    </main>
  );
}
