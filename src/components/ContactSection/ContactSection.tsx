import type { Dictionary } from "@/i18n/dictionaries";

export default function ContactSection({
  t,
}: {
  t: Dictionary["landing"]["contact"];
}) {
  return (
    <div className="mb-24 mt-24 w-full max-w-3xl">
      <p>
        <a
          className="font-mono text-2xl text-cyan-500"
          href="mailto:klosowsk@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.cta}
        </a>
      </p>
    </div>
  );
}
