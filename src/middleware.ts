import { NextResponse, type NextRequest } from "next/server";

// Serve the blog on the legacy subdomain (blog.rklosowski.com/<slug>) with the
// exact same slugs Ghost used, so indexed URLs keep returning 200 (no SEO loss).
// Internally everything lives under /blog, so we rewrite the subdomain's paths
// onto it. The apex (rklosowski.com) is untouched and serves /blog directly.
export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") || "").toLowerCase();
  if (!host.startsWith("blog.")) return NextResponse.next();

  const url = req.nextUrl.clone();
  const p = url.pathname.replace(/\/+$/, ""); // tolerate Ghost-style trailing slash

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
