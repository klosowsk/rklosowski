import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import rehypeGallery from "@/lib/rehypeGallery";
import Gallery from "./Gallery";
import ZoomableImage from "./ZoomableImage";

// Server component: renders post markdown to HTML at build time. Code blocks are
// highlighted via rehype-highlight (highlight.js, auto-detected since the Ghost
// export carries no language hints). rehype-raw runs first so inline HTML that
// survived the export is parsed; rehypeGallery groups consecutive images.
export default function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeRaw,
        rehypeGallery,
        [rehypeHighlight, { detect: true }],
      ]}
      components={{
        div({ node, children, ...props }: any) {
          const cls = node?.properties?.className;
          const isGallery = Array.isArray(cls)
            ? cls.includes("__gallery")
            : cls === "__gallery";
          if (isGallery) {
            const imgs = (node.children || [])
              .filter((c: any) => c.tagName === "img")
              .map((c: any) => ({
                src: String(c.properties?.src ?? ""),
                alt: String(c.properties?.alt ?? ""),
              }));
            return <Gallery images={imgs} />;
          }
          return <div {...props}>{children}</div>;
        },
        a({ href, children }) {
          const external = !!href && /^https?:\/\//.test(href);
          return (
            <a
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {children}
            </a>
          );
        },
        img({ src, alt }) {
          return <ZoomableImage src={src as string} alt={alt ?? ""} />;
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
