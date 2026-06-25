// Portuguese (pt-BR) dictionary. Typed as `Dictionary` so `tsc` enforces key
// parity with en.ts — a missing or renamed key fails the build.

import type { Dictionary } from "./en";

const pt: Dictionary = {
  nav: {
    home: "início",
    blog: "blog",
    rss: "rss",
    dataBolsa: "DataBolsa",
  },
  landing: {
    profile: {
      role: "Engenheiro de Software",
      blogCta: "📓 Meu blog ->",
    },
    about: {
      hello: "✋🏻, olá!!!",
      intro:
        "E aí! Eu sou o Rodrigo, engenheiro de software das terras ensolaradas do Brasil 🇧🇷.",
      listIntro: "Curto bastante:",
      items: [
        "👾 Criar softwares legais",
        "🏃 Correr como se não houvesse amanhã",
        "🪴 Cuidar das minhas plantinhas",
        "☕️ Tomar café",
        "🌎 Rodar o mundo",
        "🔧 Mexer no meu homelab feito um mago da tecnologia",
        "🚀 Criar startups",
      ],
      buildingPre: "Atualmente, estou construindo a",
      buildingPost:
        ", com soluções de IA para avaliar, treinar e preparar equipes fortes de segurança pública. Também mexo em alguns projetos paralelos, incluindo meu",
      blogWord: "blog",
      links: {
        blog: "Blog",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        github: "GitHub",
      },
    },
    projects: {
      heading: "🛠️ Projetos pessoais",
      intro: "Projetos paralelos que desenvolvo no meu tempo livre:",
      dataBolsa: {
        name: "DataBolsa",
        tagline: "Dados abertos da bolsa brasileira (B3).",
      },
    },
    experience: {
      heading: "tl;dr",
      summary:
        "Engenheiro de software especializado em IA, Blockchain, desenvolvimento full-stack e DevOps. Atualmente construindo soluções de IA responsável para equipes de segurança pública na @govworx. Com perfil empreendedor e forte senso de dono, levei projetos do zero até rodadas de investimento. Stack: React, React Native, Node.js, Python, IA/ML, blockchain, AWS, Terraform, k8s.",
      govworxLabel: "@govworx",
      jobs: [
        { title: "Engenheiro de software", company: "@govworx", date: "2025-presente" },
        { title: "Engenheiro de software", company: "@tyb", date: "2021-2025" },
        { title: "Co-fundador", company: "@teleporting", date: "2019-2021" },
        { title: "Arquiteto de software", company: "@brf s.a.", date: "2019-2020" },
        {
          title: "Desenvolvedor",
          company: "@repairq, @dell tech direct",
          date: "2018-2019",
        },
        { title: "Desenvolvedor", company: "@frisia", date: "2017-2018" },
        { title: "Engenharia", company: "@utfpr", date: "2012-2016" },
      ],
    },
    keynotes: {
      heading: "🎤 Minhas palestras",
      cta: "Me chame se quiser que eu palestre no seu evento!",
      items: [
        {
          title:
            "IA no Desenvolvimento Moderno de Software: da Teoria à Produção",
          description:
            "Explore como a IA está transformando os fluxos de desenvolvimento de software, da geração e teste de código ao deploy. Aprenda abordagens práticas para integrar ferramentas com IA, construir aplicações inteligentes e usar modelos de machine learning em produção. Descubra casos reais e boas práticas para um desenvolvimento orientado por IA.",
        },
        {
          title:
            "O Futuro do Mobile: Expo e Integrações Nativas para Apps de Nova Geração",
          description:
            "Descubra como o Expo revoluciona o desenvolvimento mobile com sua facilidade de uso e capacidade de integração. Explore integrações nativas e boas práticas para construir aplicações mobile de alta performance.",
        },
        {
          title:
            "Blockchain Além do Hype: Aplicações Reais e Integração com EVM",
          description:
            "Conheça aplicações práticas de blockchain além das criptomoedas, com foco em casos de uso reais e na integração com o ecossistema da Ethereum Virtual Machine (EVM) para aplicações descentralizadas (dApps).",
        },
        {
          title:
            "Destravando Escalabilidade: Arquiteturas Limpas com Nest e Kubernetes",
          description:
            "Explore os princípios de arquitetura limpa usando Nest.js e Kubernetes. Aprenda a projetar aplicações escaláveis e fáceis de manter, que se adaptam às necessidades do negócio.",
        },
      ],
    },
    contact: {
      cta: "📨 Fale comigo!!!",
    },
  },
  blog: {
    index: {
      name: "Rodrigo Klosowski",
      tagline:
        "E aí! Eu sou o Rodrigo, engenheiro de software das terras ensolaradas do Brasil 🇧🇷, escrevendo sobre os projetos, experimentos de homelab e ideias com que fico mexendo 💡",
      searchPlaceholder: "Buscar posts…",
      noPosts: "Nenhum post encontrado.",
      filterAll: "Todos",
      filterEn: "EN",
      filterPt: "PT",
      minRead: "min de leitura",
    },
    post: {
      allPosts: "<- todos os posts",
      publishedBy: "Publicado por Rodrigo Klosowski",
      minRead: "min de leitura",
      previous: "← Anterior",
      next: "Próximo →",
    },
    footer: {
      blog: "blog",
      rss: "rss",
      github: "github",
    },
  },
};

export default pt;
