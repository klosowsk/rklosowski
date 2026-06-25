import Link from "next/link";
import type { Post } from "@/lib/posts";

// Prev/next navigation at the foot of a post. `newer` is emphasised as the
// natural "next" read.
export default function PostFooterNav({
  older,
  newer,
  previousLabel,
  nextLabel,
}: {
  older?: Post;
  newer?: Post;
  previousLabel: string;
  nextLabel: string;
}) {
  return (
    <nav className="mt-16 grid grid-cols-1 gap-3 border-t border-black/10 pt-8 dark:border-white/10 sm:grid-cols-2">
      {older ? (
        <Link
          href={`/blog/${older.slug}`}
          className="group flex flex-col rounded-lg border border-black/10 p-4 transition-colors hover:border-cyan-500 dark:border-white/10"
        >
          <span className="font-mono text-xs text-gray-500">{previousLabel}</span>
          <span className="mt-1 font-bold transition-colors group-hover:text-cyan-500">
            {older.title}
          </span>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}

      {newer ? (
        <Link
          href={`/blog/${newer.slug}`}
          className="group flex flex-col rounded-lg border border-black/10 p-4 text-right transition-colors hover:border-cyan-500 dark:border-white/10 sm:items-end"
        >
          <span className="font-mono text-xs text-gray-500">{nextLabel}</span>
          <span className="mt-1 font-bold transition-colors group-hover:text-cyan-500">
            {newer.title}
          </span>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}
    </nav>
  );
}
