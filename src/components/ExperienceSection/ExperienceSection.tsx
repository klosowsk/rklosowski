import Job from "@/components/Job/Job";
import type { Dictionary } from "@/i18n/dictionaries";

export default function ExperienceSection({
  t,
}: {
  t: Dictionary["landing"]["experience"];
}) {
  // Keep the @govworx handle clickable inside the translated summary.
  const [before, after] = t.summary.split(t.govworxLabel);

  return (
    <div className="mt-24 w-full max-w-3xl">
      <div className="flex flex-col space-y-4">
        <p className="text-5xl font-medium">{t.heading}</p>
        <p className="pb-4">
          {before}
          <a
            className="font-mono text-cyan-500"
            href="https://www.govworx.ai/"
            target="_blank"
          >
            {t.govworxLabel}
          </a>
          {after}
        </p>
        <div className="space-y-4">
          {t.jobs.map((job, i) => (
            <Job
              key={`${job.company}-${i}`}
              title={job.title}
              company={job.company}
              date={job.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
