"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItem {
  text: string;
  href: string;
}

interface HeaderProps {
  onMenuToggle: (isOpen: boolean) => void;
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

export default function Header({ onMenuToggle }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled
      setIsScrolled(currentScrollY > 20);

      // Determine scroll direction
      setIsScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = (state: boolean) => {
    setIsOpen(state);
    onMenuToggle(state);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent",
        isScrolled && "",
        isScrollingUp ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="px-[min(50px,7vw)] 2xl:px-[100px] pt-5 2xl:pt-[39px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="z-10">
            <Link href="/" className="font-bold text-2xl text-white z-10">
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
                  className="hover:text-gray-600 text-white text-2xl"
                >
                  {item.text}
                </Link>
              ))}
            </nav>

            {/* Hamburger Button */}
            <button
              title="Menu"
              className="flex flex-col gap-[4px] ml-8 p-2 z-50"
              onClick={() => toggleMenu(!isOpen)}
            >
              <span
                className={cn(
                  "w-8 h-[1px] bg-white transition-transform duration-300 origin-center",
                  isOpen && "rotate-45 translate-y-[5px]"
                )}
              />
              <span
                className={cn(
                  "w-8 h-[1px] bg-white transition-opacity duration-300",
                  isOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "w-8 h-[1px] bg-white transition-transform duration-300 origin-center",
                  isOpen && "-rotate-45 -translate-y-[5px]"
                )}
              />
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
                    className="text-white hover:text-gray-400 transition-colors  text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl block  leading-none"
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
  );
}
