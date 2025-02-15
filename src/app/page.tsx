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

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Header onMenuToggle={setIsMenuOpen} />
      <main
        className={cn(
          "transition-transform duration-300 ease-in-out bg-white text-black",
          isMenuOpen && "-translate-x-full xl:-translate-x-[min(50%,960px)]"
        )}
      >
        <Hero
          id="hero-section"
          videoSrc="video.mp4"
          title="Welcome to Fortis Noble"
          button={{
            text: "Om byrån",
            href: "/om-byran",
            target: "_self",
          }}
        />
        <Section title="News">
          <News />
        </Section>
        <Section title="Expertise" borderTop>
          <Expertise />
        </Section>
        <Section borderTop>
          <EmployeesSection />
        </Section>
        <Hero
          imageSrc="image.jpg"
          title="International"
          description="Fortis Noble is a leading international law firm with a strong focus on the Nordic region. We are a full-service law firm with a strong focus on the Nordic region."
          button={{
            text: "Om byrån",
            href: "/om-byran",
            target: "_self",
          }}
          noTopShadow
          className="mb-[100vh]"
        />
      </main>
      <Footer
        className={cn(
          "transition-transform duration-300 ease-in-out",
          isMenuOpen && "-translate-x-full xl:-translate-x-[min(50%,960px)]"
        )}
      />
    </>
  );
}
