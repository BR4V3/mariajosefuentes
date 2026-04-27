/**
 * María José Fuentes - Adventure Tourism Portfolio
 * 
 * A professional single-page portfolio website for an Adventure Tourism student
 * Built with Next.js, React, and TailwindCSS
 * 
 * Sections:
 * 1. Hero - Welcome section with name, title, and CTA
 * 2. About - Professional description and key skills
 * 3. Field Experience - Academic fieldwork organized by semester
 * 4. Work Experience - Professional work history
 * 5. Education - Academic background and certifications
 * 6. Landmarks - Tourist destinations in Chile and Argentina
 * 7. Portfolio - Multimedia gallery for images and videos
 * 8. CV - Curriculum vitae download section
 * 9. Contact - Contact information and social media links
 */

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { FieldExperienceSection } from "@/components/sections/field-experience";
import { WorkExperienceSection } from "@/components/sections/work-experience";
import { EducationSection } from "@/components/sections/education";
import { LandmarksSection } from "@/components/sections/landmarks";
import { PortfolioSection } from "@/components/sections/portfolio";
import { CVSection } from "@/components/sections/cv-section";
import { SwotAnalysisSection } from "@/components/sections/swot-analysis";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        {/* Navigation Bar - Sticky header with smooth scroll links */}
        <Navigation />

        {/* Section 1: Hero - Full-screen welcome section */}
        <HeroSection />

        {/* Section 2: About Me - Professional profile and skills */}
        <AboutSection />

        {/* Section 3: Field Experience - Academic fieldwork by semester */}
        <FieldExperienceSection />

        {/* Section 4: Work Experience - Professional work history */}
        <WorkExperienceSection />

        {/* Section 5: Education & Certifications */}
        <EducationSection />

        {/* Section 6: Tourist Landmarks - Chile and Argentina destinations */}
        <LandmarksSection />

        {/* Section 7: Multimedia Portfolio - Image and video gallery */}
        <PortfolioSection />

        {/* Section 8: CV - Download section */}
        <CVSection />

        {/* Section 9: SWOT Analysis - Personal assessment */}
        <SwotAnalysisSection />

        {/* Section 10: Contact Information */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </main>
    </LanguageProvider>
  );
}
