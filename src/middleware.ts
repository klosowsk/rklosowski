import { NextResponse, type NextRequest } from "next/server";

// Slugs that changed since the Ghost migration -> permanent redirect to the new
// slug so the old indexed URLs keep working.
const SLUG_REDIRECTS: Record<string, string> = {
  "an-updated-guide-to-installing-react-native-without-android-studio-2":
    "replace-redux-with-context-api-and-hooks",
};

// Serve the blog on the legacy subdomain (blog.rklosowski.com/<slug>) with the
// exact same slugs Ghost used, so indexed URLs keep returning 200 (no SEO loss).
// Internally everything lives under /blog, so we rewrite the subdomain's paths
// onto it. The apex (rklosowski.com) serves /blog directly.
export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") || "").toLowerCase();
  const isBlogHost = host.startsWith("blog.");
  const url = req.nextUrl.clone();
  const p = url.pathname.replace(/\/+$/, ""); // tolerate Ghost-style trailing slash

  // Old-slug -> new-slug 301s, on both the subdomain (/<slug>) and apex
  // (/blog/<slug>).
  const bareSlug = isBlogHost
    ? p.replace(/^\/(?:blog\/)?/, "")
    : p.startsWith("/blog/")
      ? p.slice("/blog/".length)
      : "";
  if (bareSlug && SLUG_REDIRECTS[bareSlug]) {
    const target = SLUG_REDIRECTS[bareSlug];
    url.pathname = isBlogHost ? `/${target}` : `/blog/${target}`;
    return NextResponse.redirect(url, 301);
  }

  if (!isBlogHost) return NextResponse.next();

  if (p === "" || p === "/blog") {
    url.pathname = "/blog";
  } else if (p.startsWith("/blog/")) {
    url.pathname = p;
  } else {
    url.pathname = `/blog${p}`;
  }
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip static assets and feeds so they pass straight through on the subdomain.
  matcher: [
    "/((?!_next/|assets/|blog/images/|favicon|robots.txt|sitemap.xml|rss.xml).*)",
  ],
};
