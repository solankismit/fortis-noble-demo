"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { IoClose } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { Section } from "./Section";

interface NavItem {
  text: string;
  href: string;
}

interface LanguageItem {
  code: string;
  active: boolean;
}

interface HeaderProps {
  onMenuToggle: (isOpen: boolean) => void;
}

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const popularSearchTerms = [
    {
      groupSize: 2,
      items: [
        { text: "Practice groups", href: "/?s=Practice+groups" },
        { text: "Industry sectors", href: "/?s=Industry+sectors" },
      ],
    },
    {
      groupSize: 3,
      items: [
        { text: "Student", href: "/?s=Student" },
        { text: "Vacancies", href: "/?s=Vacancies" },
        { text: "Expertise", href: "/?s=Expertise" },
      ],
    },
    {
      groupSize: 2,
      items: [
        { text: "News", href: "/?s=News" },
        { text: "About us", href: "/?s=About" },
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
                placeholder="Search"
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
              <button className="sr-only">Search</button>
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
            Popular search terms
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

const menuItems: NavItem[] = [
  { text: "About", href: "/about1" },
  { text: "Services", href: "/services1" },
  { text: "Contact", href: "/contact1" },
  { text: "About", href: "/about2" },
  { text: "Services", href: "/services2" },
  { text: "Contact", href: "/contact2" },
  { text: "About", href: "/about3" },
  { text: "Services", href: "/services3" },
  { text: "Contact", href: "/contact3" },
];

const navItems: NavItem[] = [
  { text: "About", href: "/about" },
  { text: "Services", href: "/services" },
  { text: "Contact", href: "/contact" },
];

const languages: LanguageItem[] = [
  { code: "English", active: true },
  { code: "Svenska", active: false },
];

export default function Header({ onMenuToggle }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
      if (isOpen) {
        setIsScrollingUp(true);
        return;
      }
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      setIsScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

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

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          isScrollingUp || isOpen || isFooterVisible
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
                {navItems.map((item) => (
                  <Link
                    key={item.href}
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
                  className={cn(
                    "text-[1.6rem] font-monument-grotesk transition-colors duration-300",
                    isOpen
                      ? "text-white opacity-60 hover:opacity-100"
                      : `${textColorClass} opacity-60 hover:opacity-100`
                  )}
                  onClick={() => setIsSearchOpen(true)}
                >
                  Search
                </button>
                <button
                  className={cn(
                    "text-[1.6rem] font-monument-grotesk transition-colors duration-300",
                    isOpen
                      ? "text-white opacity-60 hover:opacity-100"
                      : `${textColorClass} opacity-60 hover:opacity-100`
                  )}
                >
                  {languages.find((lang) => lang.active)?.code}
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
            <nav className="flex flex-col justify-center h-full">
              <div className="relative px-[min(50px,7vw)] xl:px-32">
                {/* Vertical line that only covers the buttons */}
                <div className="hidden xl:block absolute left-16 top-0 w-[1px] h-full bg-white/70" />

                <div className="space-y-8 relative">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
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
