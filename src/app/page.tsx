"use client";
import { Footer } from "@/components/Footer";
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
          "transition-transform duration-300 ease-in-out",
          isMenuOpen && "-translate-x-full xl:-translate-x-[min(50%,960px)]"
        )}
      >
        <Hero
          videoSrc="video.mp4"
          title="Välkommen till Mannheimer Swartling"
          button={{
            text: "Om byrån",
            href: "/om-byran",
            target: "_self",
          }}
        />

        <div className='pt-24'>
          <hr />
        </div>
        <Section title='News'>
          <News />
        </Section>
        <div className='pt-24'>
          <hr />
        </div>
        <Section title='Expertise'>
          <Expertise />
        </Section>
        <div>
          <hr />
        </div>
        <Section title='Employee'>
          <EmployeesSection />
        </Section>

      </main>
      <Footer />
    </>
  );
}
