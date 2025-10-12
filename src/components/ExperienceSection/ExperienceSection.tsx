import Job from "@/components/Job/Job";

export default function ExperienceSection() {
  return (
    <div className="mt-24 w-full max-w-3xl">
      <div className="flex flex-col space-y-4">
        <p className="text-5xl font-medium">tl;dr</p>
        <p className="pb-4">
          Software engineer specializing in AI, Blockchain, full-stack
          development, and DevOps. Currently building responsible AI solutions
          for public safety teams at{" "}
          <a
            className="font-mono text-cyan-500"
            href="https://www.govworx.ai/"
            target="_blank"
          >
            @govworx
          </a>
          . With entrepreneurial expertise and a strong sense of ownership, I&apos;ve
          taken projects from the ground up through investment rounds. Tech
          stack: React, React Native, Node.js, Python, AI/ML, blockchain, AWS,
          Terraform, k8s.
        </p>
        <div className="space-y-4">
          <Job title="Software engineer" company="@govworx" date="2025-present" />
          <Job title="Software engineer" company="@tyb" date="2021-2025" />
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
  );
}
