"use client";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Hero } from "@/components/Hero";

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
        <Section className="bg-red-500 h-[100vh]">
          <h1>Hello World</h1>
        </Section>
        <Section className="bg-red-500 h-[100vh]">
          <h1>Hello World</h1>
        </Section>
        <Hero
          imageSrc="image.jpg"
          title="Välkommen till Mannheimer Swartling"
          button={{
            text: "Om byrån",
            href: "/om-byran",
            target: "_self",
          }}
          className="mb-[100vh]"
        />
      </main>
      <Footer />
    </>
  );
}
