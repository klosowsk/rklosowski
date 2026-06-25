import type { Dictionary } from "@/i18n/dictionaries";

interface ProjectLink {
  name: string;
  tagline: string;
  href: string;
}

export default function ProjectsSection({
  t,
}: {
  t: Dictionary["landing"]["projects"];
}) {
  // One entry per personal project. Add more here as they're ready to surface.
  const projects: ProjectLink[] = [
    { ...t.dataBolsa, href: "https://databolsa.com" },
  ];

  return (
    <div className="mt-24 w-full max-w-3xl">
      <div className="flex flex-col space-y-4">
        <p className="text-5xl font-medium">{t.heading}</p>
        <p className="pb-4">{t.intro}</p>
        <div className="space-y-4">
          {projects.map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-lg border border-black/10 p-4 transition-colors hover:border-cyan-500 dark:border-white/10"
            >
              <span className="font-mono font-bold text-cyan-500">
                {p.name} ↗
              </span>
              <span className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {p.tagline}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
