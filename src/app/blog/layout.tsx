// Code-block theme (dark, looks good on both light and dark pages). Scoped to
// /blog routes so it only loads when reading the blog.
import "highlight.js/styles/github-dark.css";
import Link from "next/link";
import Nav from "@/components/blog/Nav";
import { getRequestDictionary } from "@/i18n/getLocale";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale, t } = getRequestDictionary();
  return (
    <>
      <Nav locale={locale} t={t} />
      {children}
      <footer className="mx-auto mt-10 max-w-2xl px-6 py-10 text-sm text-gray-500">
        <div className="flex items-center justify-between border-t border-black/10 pt-6 dark:border-white/10">
          <span className="font-mono">© Rodrigo Klosowski</span>
          <span className="flex gap-4 font-mono">
            <Link href="/blog" className="hover:text-cyan-500">
              {t.blog.footer.blog}
            </Link>
            <a href="/rss.xml" className="hover:text-cyan-500">
              {t.blog.footer.rss}
            </a>
            <a
              href="https://github.com/klosowsk"
              className="hover:text-cyan-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.blog.footer.github}
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
