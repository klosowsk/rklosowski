import { cookies, headers } from "next/headers";
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from "./config";
import { getDictionary } from "./dictionaries";

// Resolves the active locale for the current request: the `locale` cookie wins,
// falling back to the browser's Accept-Language. Calling this opts the route
// into dynamic rendering (cookies()/headers() are request-scoped) — intended,
// so the same URL can serve either language without a locale path segment.
export function getLocale(): Locale {
  const cookieLocale = cookies().get(LOCALE_COOKIE)?.value;
  if (isLocale(cookieLocale)) return cookieLocale;

  const accept = (headers().get("accept-language") ?? "").toLowerCase();
  return accept.startsWith("pt") ? "pt" : defaultLocale;
}

export function getRequestDictionary() {
  const locale = getLocale();
  return { locale, t: getDictionary(locale) };
}
