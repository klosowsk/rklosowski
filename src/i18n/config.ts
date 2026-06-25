// i18n configuration shared by server and client. Intentionally free of any
// server-only imports (no next/headers) so it's safe to import anywhere —
// including src/lib/posts.ts and client components.

export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Cookie that persists the visitor's chosen locale. Seeded from Accept-Language
// by the middleware when absent; overridden by the LanguageToggle.
export const LOCALE_COOKIE = "locale";

// BCP-47 tags for Intl APIs (date formatting, etc.).
export const intlLocale: Record<Locale, string> = {
  en: "en-US",
  pt: "pt-BR",
};

// Value for the <html lang> attribute.
export const htmlLang: Record<Locale, string> = {
  en: "en-US",
  pt: "pt-BR",
};

export function isLocale(v: unknown): v is Locale {
  return typeof v === "string" && (locales as readonly string[]).includes(v);
}
