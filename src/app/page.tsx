import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import AboutSection from "@/components/AboutSection/AboutSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import KeynotesSection from "@/components/KeynotesSection/KeynotesSection";
import ContactSection from "@/components/ContactSection/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 pt-20 md:p-20">
      <div className="w-full max-w-3xl">
        <div className="flex flex-col items-start gap-20 md:flex-row md:gap-20 md:pt-20">
          <ProfileHeader />
          <AboutSection />
        </div>
      </div>
      <ExperienceSection />
      <KeynotesSection />
      <ContactSection />
    </main>
  );
}
