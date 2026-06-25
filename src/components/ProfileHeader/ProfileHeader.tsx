import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";

export default function ProfileHeader({
  t,
}: {
  t: Dictionary["landing"]["profile"];
}) {
  return (
    <section className="flex flex-col space-y-4">
      <div className="relative h-64 w-64">
        <Image
          className="h-64 w-64 rounded-full object-cover"
          src="/assets/images/me.jpg"
          alt="Rodrigo Klosowski"
          width={512}
          height={512}
          priority
        />
      </div>
      <div className="space-y-2">
        <h1 className="mb-0 pb-0 text-4xl font-bold">Rodrigo Klosowski</h1>
        <p className="text-md mt-0 pt-0 font-mono text-gray-500">{t.role}</p>
        <div className="pt-0">
          <Link className="text-md font-bold" href="/blog">
            {t.blogCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
