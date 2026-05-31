import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

const SITE = "https://blog.rklosowski.com";

function esc(s: string): string {
  return s.replace(
    /[<>&'"]/g,
    (c) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "'": "&apos;",
        '"': "&quot;",
      })[c] as string,
  );
}

export function GET() {
  const posts = getAllPosts();
  const items = posts
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE}/${p.slug}</link>
      <guid isPermaLink="true">${SITE}/${p.slug}</guid>
      <pubDate>${new Date(`${p.date}T00:00:00Z`).toUTCString()}</pubDate>${
        p.excerpt ? `\n      <description>${esc(p.excerpt)}</description>` : ""
      }
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Rodrigo Klosowski — Blog</title>
    <link>${SITE}</link>
    <description>Software, homelabs, AI, and building things.</description>
    <language>en</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
