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
        "Hey there! I'm Rodrigo, a software engineer hailing from the sunny lands of Brazil 🇧🇷.",
      listIntro: "I'm all about:",
      items: [
        "👾 Crafting cool software",
        "🏃 Running like there's no tomorrow",
        "🪴 Nurturing my plant babies",
        "☕️ Drinking coffee",
        "🌎 Jet-setting around the globe",
        "🔧 Tinkering with my homelab like a tech wizard",
        "🚀 Creating startups",
      ],
      buildingPre: "Right now, I'm building",
      buildingPost:
        ", with AI solutions to evaluate, coach, and prepare strong public safety teams. I'm also tinkering with some side projects, including my",
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
      intro: "Side projects I tinker with on my own time:",
      dataBolsa: {
        name: "DataBolsa",
        tagline: "Open data for the Brazilian stock market (B3).",
      },
    },
    experience: {
      heading: "tl;dr",
      summary:
        "Software engineer specializing in AI, Blockchain, full-stack development, and DevOps. Currently building responsible AI solutions for public safety teams at @govworx. With entrepreneurial expertise and a strong sense of ownership, I've taken projects from the ground up through investment rounds. Tech stack: React, React Native, Node.js, Python, AI/ML, blockchain, AWS, Terraform, k8s.",
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
        {
          title:
            "Unlocking Scalability: Building Clean Architectures with Nest and Kubernetes",
          description:
            "Explore the principles of clean architecture using Nest.js and Kubernetes. Learn how to design scalable and maintainable applications that adapt to evolving business needs.",
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
