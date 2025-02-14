"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
    [
      { text: "Practice groups", href: "/?s=Practice+groups" },
      { text: "Industry sectors", href: "/?s=Industry+sectors" },
    ],
    [
      { text: "Student", href: "/?s=Student" },
      { text: "Vacancies", href: "/?s=Vacancies" },
      { text: "Expertise", href: "/?s=Expertise" },
    ],
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
      <div className="wrapper relative">
        <button
          onClick={onClose}
          className={cn(
            "absolute bg-[url('/cross-white.svg')] bg-center bg-no-repeat bg-cover",
            "border-none text-white outline-none p-0 m-0",
            "top-[40px] right-[100px] h-[18px] w-[18px] min-w-0",
            "xl:right-[50px] xl:top-[20px]",
            "md:top-[min(50px,7vw)] md:right-[min(50px,7vw)]",
            "hover:bg-transparent hover:opacity-70",
            "after:content-[''] after:block after:w-[50px] after:h-[50px]",
            "after:absolute after:top-1/2 after:left-1/2",
            "after:-translate-x-1/2 after:-translate-y-1/2"
          )}
        >
          <span className="indent-[-9000px]">Close</span>
        </button>

        <form
          action="/"
          method="get"
          className="pt-[115px] xl:pt-[98px] md:pt-[min(50px,7vw)]"
          role="search"
        >
          <div className="search-input-container">
            <input
              type="search"
              name="s"
              placeholder="Search"
              className={cn(
                "w-full bg-transparent",
                "border-none border-b border-white",
                "font-monument-grotesk text-[1.6rem] xl:text-[1.5rem]",
                "text-white tracking-[0.5px]",
                "py-[14.5px] px-[6px] pr-[26px]",
                "placeholder:text-white",
                "focus:border-white focus:outline-none",
                "bg-[url('/search-icon-white.svg')] bg-no-repeat",
                "bg-right bg-[length:26px_26px]"
              )}
            />
            <button className="opacity-0 p-0 absolute right-0 top-0 min-w-[26px] w-[26px] h-full">
              Search
            </button>
          </div>
        </form>

        <div className="search-overlay_helpers">
          <h3
            className={cn(
              "font-monument-grotesk text-[1.6rem] xl:text-[1.5rem]",
              "font-normal tracking-[0.75px] uppercase text-center",
              "my-[115px] mb-[20px]",
              "sm:mt-[calc(min(50px,7vw)*3)]"
            )}
          >
            Popular search terms
          </h3>
          <ul className="flex flex-col items-center justify-center">
            {popularSearchTerms.map((row, rowIndex) => (
              <li
                key={rowIndex}
                className={cn(
                  "flex flex-row flex-wrap text-[7.2rem]",
                  "xl:text-[6rem]",
                  "lg:text-[4.2rem]",
                  "md:text-[3.4rem]",
                  "sm:flex-col sm:text-[2.4rem] sm:text-center",
                  "font-itc-caslon"
                )}
              >
                {row.map((term, termIndex) => (
                  <span key={termIndex}>
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
                    {termIndex < row.length - 1 && (
                      <span className="mx-[0.334em] sm:hidden">/</span>
                    )}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </div>
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent",
          isScrolled && "",
          isScrollingUp || isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="px-[min(50px,7vw)] 2xl:px-[100px] pt-[20px] 2xl:pt-[39px]">
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
                    className="hover:text-gray-600 font-monument-grotesk text-white text-2xl"
                  >
                    {item.text}
                  </Link>
                ))}
              </nav>

              {/* Language Switcher - Always visible */}
              <div className="flex items-center gap-[20px] ml-8 z-[1000]">
                <button
                  className={cn(
                    "text-[1.6rem] font-monument-grotesk transition-colors",
                    "text-white/60 hover:text-white"
                  )}
                  onClick={() => setIsSearchOpen(true)}
                >
                  Search
                </button>
                <button
                  className={cn(
                    "text-[1.6rem] font-monument-grotesk transition-colors",
                    "text-white/60 hover:text-white"
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
                  "after:content-[''] after:absolute after:top-1/2 after:left-1/2",
                  "after:w-[50px] after:h-[50px] after:-translate-x-1/2 after:-translate-y-1/2"
                )}
                onClick={() => toggleMenu(!isOpen)}
              >
                <div
                  className={cn(
                    "relative overflow-hidden",
                    "h-[2.5rem] w-[5rem] ml-auto",
                    "xl:h-[2.5rem] xl:w-[5rem]",
                    "flex flex-row flex-wrap items-center",
                    "lg:h-[1.5rem] lg:w-[3rem]"
                  )}
                >
                  <span
                    className={cn(
                      "absolute w-full h-[1px] bg-white",
                      "transition-all duration-300 ease-in-out",
                      "top-0",
                      isOpen && "translate-y-[0.75em] rotate-45",
                      "lg:[.active&]:translate-y-[0.45em]"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute w-full h-[1px] bg-white",
                      "transition-all duration-300 ease-in-out",
                      "top-[calc(50%-1px)]",
                      isOpen && "opacity-0"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute w-full h-[1px] bg-white",
                      "transition-all duration-300 ease-in-out",
                      "bottom-0",
                      isOpen && "-translate-y-[0.75em] -rotate-45",
                      "lg:[.active&]:-translate-y-[0.45em]"
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

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
