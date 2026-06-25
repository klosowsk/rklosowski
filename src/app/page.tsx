import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import AboutSection from "@/components/AboutSection/AboutSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import KeynotesSection from "@/components/KeynotesSection/KeynotesSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import LanguageToggle from "@/components/LanguageToggle/LanguageToggle";
import { getRequestDictionary } from "@/i18n/getLocale";

export default function Home() {
  const { locale, t } = getRequestDictionary();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 pt-20 md:p-20">
      <div className="fixed right-4 top-4 z-50">
        <LanguageToggle locale={locale} />
      </div>
      <div className="w-full max-w-3xl">
        <div className="flex flex-col items-start gap-20 md:flex-row md:gap-20 md:pt-20">
          <ProfileHeader t={t.landing.profile} />
          <AboutSection t={t.landing.about} />
        </div>
      </div>
      <ProjectsSection t={t.landing.projects} />
      <ExperienceSection t={t.landing.experience} />
      <KeynotesSection t={t.landing.keynotes} />
      <ContactSection t={t.landing.contact} />
    </main>
  );
}
