// English dictionary — the SOURCE OF TRUTH for translation keys. The `Dictionary`
// type is derived from this object; pt.ts is typed against it so any missing or
// renamed key is a compile error.
//
// Note: do NOT add `as const` here. It would narrow every value to a string
// literal and make pt.ts's (string-valued) translations fail to typecheck.

const en = {
  nav: {
    home: "home",
    blog: "blog",
    rss: "rss",
    dataBolsa: "DataBolsa",
  },
  landing: {
    profile: {
      role: "Software Engineer",
      blogCta: "📓 My blog ->",
    },
    about: {
      hello: "✋🏻, hello!!!",
      intro:
        "Hi, I'm Rodrigo. I'm a Brazilian software engineer, and I like building tools for real problems.",
      listIntro: "Away from the keyboard:",
      items: [
        "🏃 I run",
        "☕️ I drink too much coffee",
        "🌎 I travel when I can",
        "🔧 I tinker with my homelab",
        "🪴 I take care of my plants",
      ],
      buildingPre: "During the day, I work at",
      buildingPost:
        ". Outside of that, I keep working on personal projects, open source, and a few ideas that eventually become posts on my",
      blogWord: "blog",
      links: {
        blog: "Blog",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        github: "GitHub",
      },
    },
    projects: {
      heading: "🛠️ Personal projects",
      intro: "Things I'm building outside of work:",
      dataBolsa: {
        name: "DataBolsa",
        tagline: "Brazilian financial data for APIs, scripts, and agents.",
      },
      supabaseHa: {
        name: "Supabase HA",
        tagline: "A self-hosted Supabase experiment with HA PostgreSQL on Kubernetes.",
      },
      tmuxscout: {
        name: "tmuxscout",
        tagline: "A tmux navigator for keeping track of coding agents across sessions.",
      },
    },
    experience: {
      heading: "tl;dr",
      summary:
        "I've worked in software for a while, usually close to development, product, infrastructure, and startups. I've worked across web, mobile, blockchain, DevOps, and AI. I like taking ideas from zero to product, then pushing them until they can become an investment, a business, or an exit. I had an exit with Teleporting. These days, I'm especially interested in agents, tools for builders, and data that's easier to use.",
      // Linked company handle inside the summary (kept clickable around the text).
      govworxLabel: "@govworx",
      jobs: [
        { title: "Software engineer", company: "@govworx", date: "2025-present" },
        { title: "Software engineer", company: "@tyb", date: "2021-2025" },
        { title: "Co-founder", company: "@teleporting", date: "2019-2021" },
        { title: "Software architect", company: "@brf s.a.", date: "2019-2020" },
        {
          title: "Developer",
          company: "@repairq, @dell tech direct",
          date: "2018-2019",
        },
        { title: "Developer", company: "@frisia", date: "2017-2018" },
        { title: "Engineering", company: "@utfpr", date: "2012-2016" },
      ],
    },
    keynotes: {
      heading: "🎤 My keynotes",
      cta: "Contact me if you'd like me to speak at your event!",
      items: [
        {
          title:
            "AI in Modern Software Development: From Theory to Production",
          description:
            "Explore how AI is transforming software development workflows, from code generation and testing to deployment. Learn practical approaches to integrating AI-powered tools, building intelligent applications, and leveraging machine learning models in production environments. Discover real-world use cases and best practices for AI-driven development.",
        },
        {
          title:
            "The Future of Mobile: Expo and Native Integrations for Next-Gen Apps",
          description:
            "Discover how Expo revolutionizes mobile app development with its ease of use and integration capabilities. Explore native integrations and best practices for building high-performance mobile applications.",
        },
        {
          title:
            "Blockchain Beyond Hype: Real-world Applications and EVM Integration",
          description:
            "Gain insights into practical blockchain applications beyond cryptocurrency, focusing on real-world use cases and integrating with the Ethereum Virtual Machine (EVM) ecosystem for decentralized applications (dApps).",
        },
      ],
    },
    contact: {
      cta: "📨 Contact me!!!",
    },
  },
  blog: {
    index: {
      name: "Rodrigo Klosowski",
      tagline:
        "Hey there! I'm Rodrigo, a software engineer from the sunny lands of Brazil 🇧🇷, writing about the projects, homelab experiments, and ideas I tinker with 💡",
      searchPlaceholder: "Search posts…",
      noPosts: "No posts found.",
      filterAll: "All",
      filterEn: "EN",
      filterPt: "PT",
      minRead: "min read",
    },
    post: {
      allPosts: "<- all posts",
      publishedBy: "Published by Rodrigo Klosowski",
      minRead: "min read",
      previous: "← Previous",
      next: "Next →",
    },
    footer: {
      blog: "blog",
      rss: "rss",
      github: "github",
    },
  },
} satisfies Record<string, unknown>;

export type Dictionary = typeof en;
export default en;
