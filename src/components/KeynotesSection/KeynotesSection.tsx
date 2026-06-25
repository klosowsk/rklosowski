import Keynote from "@/components/Keynote/Keynote";
import type { Dictionary } from "@/i18n/dictionaries";

export default function KeynotesSection({
  t,
}: {
  t: Dictionary["landing"]["keynotes"];
}) {
  return (
    <div className="mt-24 w-full max-w-3xl">
      <div className="flex flex-col space-y-4">
        <p className="text-5xl font-medium">{t.heading}</p>
        <p className="pb-4">{t.cta}</p>
        <div className="space-y-4">
          {t.items.map((item) => (
            <Keynote
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
