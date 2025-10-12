import Keynote from "@/components/Keynote/Keynote";

export default function KeynotesSection() {
  return (
    <div className="mt-24 w-full max-w-3xl">
      <div className="flex flex-col space-y-4">
        <p className="text-5xl font-medium">🎤 My keynotes</p>
        <p className="pb-4">Contact me if you&apos;d like me to speak at your event!</p>
        <div className="space-y-4">
          <Keynote
            title="AI in Modern Software Development: From Theory to Production"
            description="Explore how AI is transforming software development workflows, from code generation and testing to deployment. Learn practical approaches to integrating AI-powered tools, building intelligent applications, and leveraging machine learning models in production environments. Discover real-world use cases and best practices for AI-driven development."
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
  );
}
