/* eslint-disable react/no-unescaped-entities */
import Job from "@/components/Job/Job";
import Keynote from "@/components/Keynote/Keynote";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 pb-12 pt-12 md:p-24 md:pb-32 md:pt-32">
      <div className="w-full max-w-3xl">
        <div className="flex flex-col items-start gap-8 md:flex-row md:gap-20">
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
              <h1 className="mb-0 pb-0 text-4xl font-bold">
                Rodrigo Klosowski
              </h1>
              <p className="text-md mt-0 pt-0 font-mono text-gray-500">
                Software Engineer
              </p>
            </div>
          </section>
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
              <li>🏋️ Pumping iron</li>
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
                href="https://tyb.xyz"
                target="_blank"
              >
                @tyb
              </a>{" "}
              and tinkering with some side projects, including my personal
              website and a blog.
            </p>
            <div className="flex gap-4">
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
        </div>
      </div>
      <div className="mt-24 w-full max-w-3xl">
        <div className="flex flex-col space-y-4">
          <p className="text-5xl font-medium">tl;dr</p>
          <p className="pb-4">
            I currently give technical keynotes, work{" "}
            <a
              className="font-mono text-cyan-500"
              href="https://tyb.xyz"
              target="_blank"
            >
              @tyb
            </a>
            , and write about tech stuff. Some of my go-to stacks include React,
            React Native, TypeScript, Node.js, blockchain, AWS, Terraform,
            Ansible, k8s and all things DevOps. When I'm not doing that, I'm
            busy with my side projects.
          </p>
          <div className="space-y-4">
            <Job title="Software engineer" company="@tyb" date="2021-2024" />
            <Job title="Co-founder" company="@teleporting" date="2019-2021" />
            <Job
              title="Software architect"
              company="@brf s.a."
              date="2019-2020"
            />
            <Job
              title="Developer"
              company="@repairq, @dell tech direct"
              date="2018-2019"
            />
            <Job title="Developer" company="@frisia" date="2017-2018" />
            <Job title="Engineering" company="@utfpr" date="2012-2016" />
          </div>
        </div>
      </div>
      <div className="mt-24 w-full max-w-3xl">
        <div className="flex flex-col space-y-4">
          <p className="text-5xl font-medium">🎤 My keynotes</p>
          <p className="pb-4">
            Contact me if you'd like me to speak at your event!
          </p>
          <div className="space-y-4">
            <Keynote
              title="Modern CSS Styling Techniques and Design Systems"
              description="We'll explore Atomic Design principles, the benefits of design systems, and cutting-edge tools like Styled Components, CSS-in-JS, and Tailwind CSS. Learn how to enhance your web design workflow, ensure consistency, and improve scalability with these powerful approaches."
            />
            <Keynote
              title="The Future of Mobile: Expo and Native Integrations for Next-Gen Apps"
              description="Discover how Expo revolutionizes mobile app development with its ease of use and integration capabilities. Explore native integrations and best practices for building high-performance mobile applications."
            />
            <Keynote
              title="Blockchain Beyond Hype: Real-world Applications and EVM Integration"
              description="Gain insights into practical blockchain applications beyond cryptocurrency, focusing on real-world use cases and integrating with the Ethereum Virtual Machine (EVM) ecosystem for decentralized applications (dApps)."
            />
            <Keynote
              title="Unlocking Scalability: Building Clean Architectures with Nest and Kubernetes"
              description="Explore the principles of clean architecture using Nest.js and Kubernetes. Learn how to design scalable and maintainable applications that adapt to evolving business needs."
            />
          </div>
        </div>
      </div>
      <div className="mt-24 w-full max-w-3xl">
        <p>
          <a
            className="font-mono text-2xl text-cyan-500"
            href="mailto:klosowsk@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            📨 Contact me!!!
          </a>
        </p>
      </div>
    </main>
  );
}
