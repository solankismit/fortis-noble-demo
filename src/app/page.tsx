"use client";
import { Footer } from "@/components/Footer/index";
import Header from "@/components/Header";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Hero } from "@/components/Hero";
import News from "@/components/News";
import Expertise from "@/components/Expertise";
import EmployeesSection from "@/components/EmployeeSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { translations } = useLanguage();
  return (
    <>
      <Header onMenuToggle={setIsMenuOpen} />
      <main
        className={cn(
          "transition-transform duration-300 ease-in-out bg-white text-black mb-[100vh]",
          isMenuOpen && "-translate-x-full xl:-translate-x-[min(50%,960px)]"
        )}
      >
        <Hero
          id="hero-section"
          videoSrc="video.mp4"
          title={translations.hero.title}
          button={{
            text: translations.hero.ctaButton,
            href: "/om-byran",
            target: "_self",
          }}
        />
        <Section title={translations.news.title}>
          <News
            data={translations.news.data}
            ctaButton={translations.news.ctaButton}
          />
        </Section>
        <Section title={translations.expertise.title} borderTop>
          <Expertise
            description={translations.expertise.description}
            ctaButton={translations.expertise.ctaButton}
          />
        </Section>
        <Section borderTop>
          <EmployeesSection
            title={translations.employees.title}
            description={translations.employees.description}
            ctaButton={translations.employees.ctaButton}
          />
        </Section>
        <Hero
          imageSrc="image.jpg"
          title={translations.hero2.title}
          description={translations.hero2.description}
          button={{
            text: translations.hero2.ctaButton,
            href: "/om-byran",
            target: "_self",
          }}
          noTopShadow
        />
      </main>
      <Footer
        className={cn(
          "transition-transform duration-300 ease-in-out",
          isMenuOpen && "-translate-x-full xl:-translate-x-[min(50%,960px)]"
        )}
        newsletter={translations.footer.newsletter}
        officeLocations={translations.footer.officeLocations}
        companyInfo={translations.footer.companyInfo}
        legalLinks={translations.footer.legal}
      />
    </>
  );
}
