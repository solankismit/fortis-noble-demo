"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { IoClose } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { Section } from "./Section";
import { useLanguage } from "@/contexts/LanguageContext";
import { languageNames } from "@/i18n/config";

interface NavItem {
  text: string;
  href: string;
}

interface HeaderProps {
  onMenuToggle: (isOpen: boolean) => void;
}

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const { translations } = useLanguage();

  const popularSearchTerms = [
    {
      groupSize: 2,
      items: [
        {
          text: translations.search.terms.practiceGroups,
          href: "/?s=Practice+groups",
        },
        {
          text: translations.search.terms.industrySectors,
          href: "/?s=Industry+sectors",
        },
      ],
    },
    {
      groupSize: 3,
      items: [
        { text: translations.search.terms.student, href: "/?s=Student" },
        { text: translations.search.terms.vacancies, href: "/?s=Vacancies" },
        { text: translations.search.terms.expertise, href: "/?s=Expertise" },
      ],
    },
    {
      groupSize: 2,
      items: [
        { text: translations.search.terms.news, href: "/?s=News" },
        { text: translations.search.terms.aboutUs, href: "/?s=About" },
      ],
    },
  ];

  return (
    <div
      className={cn(
        "fixed inset-0 bg-[#cccccc] text-white z-[2000]",
        "transition-all duration-500",
        "pointer-events-none opacity-0 invisible",
        isOpen && "pointer-events-auto opacity-100 visible"
      )}
    >
      <div className="relative h-screen">
        <button
          type="button"
          onClick={onClose}
          className={cn(
            "absolute z-[2001]",
            "border-none text-white outline-none p-2",
            "top-[40px] right-[100px]",
            "xl:right-[50px] xl:top-[20px]",
            "md:top-[min(50px,7vw)] md:right-[min(50px,7vw)]",
            "hover:opacity-70 transition-opacity duration-300",
            "cursor-pointer"
          )}
        >
          <IoClose className="w-[30px] h-[30px]" />
          <span className="sr-only">Close</span>
        </button>
        <Section noPadding>
          <form
            action="/"
            method="get"
            className="pt-[115px] xl:pt-[98px] md:pt-[min(50px,7vw)]"
            role="search"
          >
            <div className="my-[min(50px,7vw)] md:my-[40px] md:mx-auto 2xl:my-[50px] 2xl:max-w-[83.3334%] relative border-b border-white">
              <input
                type="search"
                name="s"
                placeholder={translations.search.placeholder}
                className={cn(
                  "w-full bg-transparent",
                  "border-none border-b border-white",
                  "font-monument-grotesk text-[1.6rem] xl:text-[1.5rem]",
                  "text-white tracking-[0.5px]",
                  "py-[14.5px] px-[6px] pr-[40px]",
                  "placeholder:text-white",
                  "focus:border-white focus:outline-none"
                )}
              />
              <IoSearchOutline className="absolute right-[6px] top-1/2 -translate-y-1/2 w-[26px] h-[26px]" />
              <button className="sr-only">{translations.header.search}</button>
            </div>
          </form>

          <h3
            className={cn(
              "font-monument-grotesk text-[1.5rem] 2xl:text-[1.6rem]",
              "font-normal tracking-[0.75px] uppercase text-center",
              "sm:mt-[115px] mb-[20px]",
              "mt-[calc(min(50px,7vw)*3)]"
            )}
          >
            {translations.search.popularTerms}
          </h3>
          <ul className="flex flex-col items-center justify-center ">
            {popularSearchTerms.map((group, groupIndex) => (
              <li
                key={groupIndex}
                className={cn(
                  "flex flex-col flex-wrap text-[2.4rem]",
                  "2xl:text-[7.2rem]",
                  "xl:text-[6rem]",
                  "md:text-[4.2rem]",
                  "sm:flex-row sm:text-[3.4rem] sm:text-center",
                  "font-itc-caslon items-center justify-center"
                )}
              >
                {group.items.map((term, termIndex) => (
                  <span key={termIndex} className="flex items-center">
                    <Link
                      href={term.href}
                      className={cn(
                        "text-white leading-[1.3334] no-underline",
                        "transition-opacity duration-200 ease-in-out",
                        "hover:opacity-70"
                      )}
                    >
                      {term.text}
                    </Link>
                    {termIndex < group.items.length - 1 && (
                      <span className="mx-[0.334em] hidden sm:block text-white">
                        /
                      </span>
                    )}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}

export default function Header({ onMenuToggle }: HeaderProps) {
  const { locale, setLanguage, translations } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);
  const footerRef = useRef<Element>(null);
  const heroRef = useRef<Element>(null);

  const isFooterVisible = useIntersectionObserver(footerRef, {
    threshold: 0.1,
    rootMargin: "50px",
  });

  const isHeroIntersecting = useIntersectionObserver(heroRef, {
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen || isChangingLanguage) {
        setIsScrollingUp(true);
        return;
      }
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY <= 0 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen, isChangingLanguage]);

  useEffect(() => {
    // Find footer and hero elements
    const footerElement = document.querySelector("#footer-observer");
    const heroElement = document.querySelector("#hero-section");

    if (footerElement) footerRef.current = footerElement;
    if (heroElement) heroRef.current = heroElement;
  }, []);

  const textColorClass =
    isFooterVisible || isHeroIntersecting ? "text-white" : "text-black";
  const bgColorClass =
    isOpen || isFooterVisible || isHeroIntersecting ? "bg-white" : "bg-black";

  const toggleMenu = (state: boolean) => {
    setIsOpen(state);
    onMenuToggle(state);
  };

  const handleLanguageSwitch = () => {
    setIsChangingLanguage(true);
    const newLocale = locale === "en" ? "sv" : "en";
    setLanguage(newLocale);
    // Reset the language change state after animation completes
    setTimeout(() => {
      setIsChangingLanguage(false);
    }, 500);
  };

  const menuItems: NavItem[] = [
    { text: translations.header.menu.about, href: "#" },
    { text: translations.header.menu.services, href: "#" },
    { text: translations.header.menu.contact, href: "#" },
    { text: translations.header.menu.about, href: "#" },
    { text: translations.header.menu.services, href: "#" },
    { text: translations.header.menu.contact, href: "#" },
  ];
  const navItems: NavItem[] = [
    { text: translations.header.menu.about, href: "#" },
    { text: translations.header.menu.services, href: "#" },
    { text: translations.header.menu.contact, href: "#" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          isScrollingUp || isOpen || isFooterVisible || isChangingLanguage
            ? "translate-y-0"
            : "-translate-y-full",
          textColorClass
        )}
      >
        <div className="px-[min(50px,7vw)] 2xl:px-[100px] pt-[20px] 2xl:pt-[39px]">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="relative z-[2000]">
              <Link
                href="/"
                className={cn(
                  "font-bold text-2xl leading-[1.07] block text-[1.6rem] xl:text-[2rem] xl:leading-[1.07] 2xl:text-[2.5rem]",
                  "transition-colors duration-300",
                  isOpen ? "text-white" : textColorClass
                )}
              >
                FORTIS NOBLE
              </Link>
            </div>

            <div className="flex items-center">
              {/* Desktop Navigation */}
              <nav className="hidden xl:flex items-center gap-[20px]">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "hover:opacity-70 font-monument-grotesk text-2xl transition-colors duration-300",
                      isOpen ? "text-white" : textColorClass
                    )}
                  >
                    {item.text}
                  </Link>
                ))}
              </nav>

              {/* Language Switcher - Always visible */}
              <div className="hidden xl:flex items-center gap-[20px] ml-8 z-[2000]">
                <button
                  onClick={handleLanguageSwitch}
                  className={cn(
                    "text-[1.6rem] font-monument-grotesk transition-colors duration-300",
                    isOpen
                      ? "text-white opacity-60 hover:opacity-100"
                      : `${textColorClass} opacity-60 hover:opacity-100`
                  )}
                >
                  {languageNames[locale === "en" ? "sv" : "en"]}
                </button>
                <button
                  className={cn(
                    "text-[1.6rem] font-monument-grotesk transition-colors duration-300",
                    isOpen
                      ? "text-white opacity-60 hover:opacity-100"
                      : `${textColorClass} opacity-60 hover:opacity-100`
                  )}
                  onClick={() => setIsSearchOpen(true)}
                >
                  {translations.header.search}
                </button>
              </div>

              {/* Hamburger Button */}
              <button
                title="Menu"
                className={cn(
                  "relative z-[1000] ml-8",
                  "flex-1 min-w-[50px] max-w-[50px] h-[25px]",
                  "bg-transparent border-none cursor-pointer",
                  "hover:opacity-70 hover:bg-transparent",
                  "focus:outline-none focus:shadow-none",
                  "ml-[32px]"
                )}
                onClick={() => toggleMenu(!isOpen)}
              >
                <div
                  className={cn(
                    "relative overflow-hidden",
                    "h-[1.5rem] w-[3rem] ml-auto",
                    "xl:h-[2.5rem] xl:w-[5rem]",
                    "flex flex-row flex-wrap items-center"
                  )}
                >
                  <span
                    className={cn(
                      "absolute w-full h-[1px] ",
                      "transition-all duration-300 ease-in-out",
                      "top-0",
                      isOpen &&
                        "translate-y-[0.45em] xl:translate-y-[0.75em] rotate-45",
                      "lg:[.active&]:translate-y-[0.45em]",
                      bgColorClass
                    )}
                  />
                  <span
                    className={cn(
                      "absolute w-full h-[1px] ",
                      "transition-all duration-300 ease-in-out",
                      "top-[calc(50%-1px)]",
                      isOpen && "opacity-0",
                      bgColorClass
                    )}
                  />
                  <span
                    className={cn(
                      "absolute w-full h-[1px] ",
                      "transition-all duration-300 ease-in-out",
                      "bottom-0",
                      isOpen &&
                        "-translate-y-[0.45em] xl:-translate-y-[0.75em] -rotate-45",
                      "lg:[.active&]:-translate-y-[0.45em]",
                      bgColorClass
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed top-0 right-0 h-screen bg-black shadow-lg transition-all duration-300 transform",
            "",
            isOpen ? "translate-x-0" : "translate-x-full",
            "w-full xl:w-1/2 2xl:max-w-[960px]"
          )}
        >
          {/* Left border line */}
          <div className="hidden md:block absolute left-0 top-0 w-[1px] h-full bg-white/20" />

          <div className=" h-full relative">
            <nav className="flex flex-col justify-center h-full ">
              <div className="relative py-[25px] md:py-0 px-[min(50px,7vw)] xl:px-32 xl:ml-[25px] 2xl:px-0 2xl:ml-[170px]">
                {/* Vertical line that only covers the buttons */}
                <div className="hidden xl:block absolute left-16 top-0 w-[1px] h-full bg-white/70 2xl:-left-[25px]" />

                <div className="space-y-8 relative ">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className={cn(
                        "hover:text-gray-400 transition-colors text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl block leading-none text-white"
                      )}
                      onClick={() => toggleMenu(false)}
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
            {/* Language Switcher - Always visible */}
            <div className="absolute bottom-[min(50px,7vw)] w-full left-[min(50px,7vw)] xl:px-32 xl:hidden items-center flex gap-[20px] z-[2000]">
              <button
                onClick={handleLanguageSwitch}
                className={cn(
                  "text-[1.6rem] font-monument-grotesk transition-colors duration-300",
                  isOpen
                    ? "text-white opacity-60 hover:opacity-100"
                    : `${textColorClass} opacity-60 hover:opacity-100`
                )}
              >
                {languageNames[locale === "en" ? "sv" : "en"]}
              </button>
              <button
                className={cn(
                  "text-[1.6rem] font-monument-grotesk transition-colors duration-300",
                  isOpen
                    ? "text-white opacity-60 hover:opacity-100"
                    : `${textColorClass} opacity-60 hover:opacity-100`
                )}
                onClick={() => setIsSearchOpen(true)}
              >
                {translations.header.search}
              </button>
            </div>
          </div>
        </div>
      </header>

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
