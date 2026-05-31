"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

interface Item {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  readingMinutes: number;
}

function fmt(d: string) {
  return new Date(`${d}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostSearch({ posts }: { posts: Item[] }) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return posts;
    return posts.filter((p) =>
      `${p.title} ${p.excerpt ?? ""}`.toLowerCase().includes(s),
    );
  }, [q, posts]);

  return (
    <div>
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search posts…"
        aria-label="Search posts"
        className="mb-2 w-full rounded-lg border border-black/10 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-gray-400 focus:border-cyan-500 dark:border-white/15"
      />

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-sm text-gray-500">
          No posts found.
        </p>
      ) : (
        <ul className="flex flex-col divide-y divide-black/10 dark:divide-white/10">
          {filtered.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex flex-col space-y-1.5 py-6"
              >
                <span className="font-mono text-xs text-gray-500">
                  {fmt(p.date)} · {p.readingMinutes} min read
                </span>
                <span className="text-lg font-bold transition-colors group-hover:text-cyan-500">
                  {p.title}
                </span>
                {p.excerpt && (
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {p.excerpt}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
