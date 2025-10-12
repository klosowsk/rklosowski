/* eslint-disable react/no-unescaped-entities */

export default function AboutSection() {
  return (
    <section className="flex flex-col space-y-4">
      <p className="text-3xl font-medium">✋🏻, hello!!!</p>
      <p>
        Hey there! I'm Rodrigo, a software engineer hailing from the sunny
        lands of Brazil 🇧🇷.
      </p>
      <p>I'm all about:</p>
      <ul className="list-disc pl-8">
        <li>👾 Crafting cool software</li>
        <li>🏃 Running like there's no tomorrow</li>
        <li>🪴 Nurturing my plant babies</li>
        <li>☕️ Drinking coffee</li>
        <li>🌎 Jet-setting around the globe</li>
        <li>🔧 Tinkering with my homelab like a tech wizard</li>
        <li>🚀 Creating startups</li>
      </ul>
      <p>
        Right now, I'm building{" "}
        <a
          className="font-mono text-cyan-500"
          href="https://www.govworx.ai/"
          target="_blank"
        >
          @govworx
        </a>
        , with AI solutions to evaluate, coach, and prepare
        strong public safety teams. I'm also tinkering with some side projects,
        including my&nbsp;
        <a
          className="font-mono text-cyan-500"
          href="https://blog.rklosowski.com"
          target="_blank"
        >
          blog
        </a>
        .
      </p>
      <div className="flex gap-4">
        <a
          className="font-mono text-sm text-cyan-500"
          href="https://blog.rklosowski.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        <a
          className="font-mono text-sm text-cyan-500"
          href="https://www.linkedin.com/in/rodrigo-klosowski/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="font-mono text-sm text-cyan-500"
          href="https://www.instagram.com/rodrigo.klosowski/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="font-mono text-sm text-cyan-500"
          href="https://github.com/klosowsk"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
