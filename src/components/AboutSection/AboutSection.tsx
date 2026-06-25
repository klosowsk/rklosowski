import type { Dictionary } from "@/i18n/dictionaries";

export default function AboutSection({
  t,
}: {
  t: Dictionary["landing"]["about"];
}) {
  return (
    <section className="flex flex-col space-y-4">
      <p className="text-3xl font-medium">{t.hello}</p>
      <p>{t.intro}</p>
      <p>{t.listIntro}</p>
      <ul className="list-disc pl-8">
        {t.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>
        {t.buildingPre}{" "}
        <a
          className="font-mono text-cyan-500"
          href="https://www.govworx.ai/"
          target="_blank"
        >
          @govworx
        </a>
        {t.buildingPost}&nbsp;
        <a className="font-mono text-cyan-500" href="/blog">
          {t.blogWord}
        </a>
        .
      </p>
      <div className="flex flex-wrap gap-4">
        <a className="font-mono text-sm text-cyan-500" href="/blog">
          {t.links.blog}
        </a>
        <a
          className="font-mono text-sm text-cyan-500"
          href="https://databolsa.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          DataBolsa
        </a>
        <a
          className="font-mono text-sm text-cyan-500"
          href="https://www.linkedin.com/in/rodrigo-klosowski/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.links.linkedin}
        </a>
        <a
          className="font-mono text-sm text-cyan-500"
          href="https://www.instagram.com/rodrigo.klosowski/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.links.instagram}
        </a>
        <a
          className="font-mono text-sm text-cyan-500"
          href="https://github.com/klosowsk"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.links.github}
        </a>
      </div>
    </section>
  );
}
