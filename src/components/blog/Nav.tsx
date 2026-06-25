import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle/LanguageToggle";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

// Minimalist sticky navbar for the blog. The brand links to the blog home; the
// "home" link on the right goes to the personal site.
export default function Nav({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[rgb(var(--background-rgb))]/80 backdrop-blur dark:border-white/10">
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-6">
        <Link href="/blog" className="group font-bold">
          <span className="transition-colors group-hover:text-cyan-500">
            {"rklosowski's blog"}
          </span>
        </Link>
        <nav className="flex items-center gap-5 font-mono text-sm">
          <a
            href="https://rklosowski.com"
            className="text-gray-500 transition-colors hover:text-cyan-500"
          >
            {t.nav.home}
          </a>
          <Link
            href="/blog"
            className="text-gray-500 transition-colors hover:text-cyan-500"
          >
            {t.nav.blog}
          </Link>
          <a
            href="https://databolsa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-gray-500 transition-colors hover:text-cyan-500 sm:inline"
          >
            {t.nav.dataBolsa}
          </a>
          <a
            href="/rss.xml"
            className="text-gray-500 transition-colors hover:text-cyan-500"
          >
            {t.nav.rss}
          </a>
          <LanguageToggle locale={locale} />
        </nav>
      </div>
    </header>
  );
}
