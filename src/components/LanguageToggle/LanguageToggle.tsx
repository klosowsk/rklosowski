"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  htmlLang,
  locales,
  LOCALE_COOKIE,
  type Locale,
} from "@/i18n/config";

const LABELS: Record<Locale, string> = { en: "EN", pt: "PT" };

// Two-button PT/EN switch. Persists the choice in the `locale` cookie and
// re-renders the server tree via router.refresh() — no navigation, no URL
// change. <html lang> is updated immediately so it never lags the refresh.
export default function LanguageToggle({ locale }: { locale: Locale }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const set = (next: Locale) => {
    if (next === locale) return;
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = htmlLang[next];
    startTransition(() => router.refresh());
  };

  return (
    <div
      className="flex items-center gap-1 font-mono text-xs"
      role="group"
      aria-label="Language"
    >
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="px-1 text-gray-400">·</span>}
          <button
            type="button"
            onClick={() => set(l)}
            disabled={pending}
            aria-pressed={l === locale}
            className={
              l === locale
                ? "text-cyan-500"
                : "text-gray-500 transition-colors hover:text-cyan-500"
            }
          >
            {LABELS[l]}
          </button>
        </span>
      ))}
    </div>
  );
}
