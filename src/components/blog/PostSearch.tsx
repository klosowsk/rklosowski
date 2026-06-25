"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { intlLocale, type Locale } from "@/i18n/config";

interface Item {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  readingMinutes: number;
  languages: Locale[];
}

interface Labels {
  searchPlaceholder: string;
  noPosts: string;
  filterAll: string;
  filterEn: string;
  filterPt: string;
  minRead: string;
}

type LangFilter = "all" | Locale;

export default function PostSearch({
  posts,
  initialLocale,
  labels,
}: {
  posts: Item[];
  initialLocale: Locale;
  labels: Labels;
}) {
  const [q, setQ] = useState("");
  // Default to the active site language; the user can widen to "all" or switch.
  const [langFilter, setLangFilter] = useState<LangFilter>(initialLocale);

  const fmt = (d: string) =>
    new Date(`${d}T00:00:00`).toLocaleDateString(intlLocale[initialLocale], {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return posts.filter(
      (p) =>
        (langFilter === "all" || p.languages.includes(langFilter)) &&
        (!s || `${p.title} ${p.excerpt ?? ""}`.toLowerCase().includes(s)),
    );
  }, [q, langFilter, posts]);

  const filterOptions: { value: LangFilter; label: string }[] = [
    { value: "all", label: labels.filterAll },
    { value: "en", label: labels.filterEn },
    { value: "pt", label: labels.filterPt },
  ];

  return (
    <div>
      <div className="mb-2 flex items-center gap-1 font-mono text-xs">
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => setLangFilter(opt.value)}
            aria-pressed={langFilter === opt.value}
            className={`rounded-md px-2.5 py-1 transition-colors ${
              langFilter === opt.value
                ? "bg-cyan-500 text-white"
                : "text-gray-500 hover:text-cyan-500"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={labels.searchPlaceholder}
        aria-label={labels.searchPlaceholder}
        className="mb-2 w-full rounded-lg border border-black/10 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-gray-400 focus:border-cyan-500 dark:border-white/15"
      />

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-sm text-gray-500">
          {labels.noPosts}
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
                  {fmt(p.date)} · {p.readingMinutes} {labels.minRead}
                  {p.languages.length === 1 ? ` · ${p.languages[0].toUpperCase()}` : ""}
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
