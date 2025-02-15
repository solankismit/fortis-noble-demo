import { Newsletter } from "./Newsletter";
import { OfficeLocations } from "./OfficeLocations";
import { CompanyInfo } from "./CompanyInfo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Section } from "../Section";

interface FooterProps {
  className?: string;
  isOffcanvasActive?: boolean;
}

export function Footer({ className }: FooterProps) {
  return (
    <div id="footer-observer">
      <footer
        className={cn(
          "fixed inset-0 bg-black text-white -z-10",
          "flex flex-col justify-end",
          "overflow-hidden transition-transform duration-400",

          className
        )}
      >
        <Section noPadding>
          <div className="relative w-full py-[40px] xl:pb-[20px] md:pt-[min(50px,7vw)] md:pb-[15px]">
            <Newsletter
              title="More Fortis Noble?"
              description="Keep up to date with our newsletters."
              buttonText="Subscribe"
              buttonHref="/newsletter"
            />

            <OfficeLocations offices={officeLocations} />

            <CompanyInfo
              companyName="2008–2025 © Fortis Noble Advokatbyrå AB with registered office in Stockholm"
              orgNumber="Organisation number: 556399–4499"
              vatNumber="Momsnummer (VAT no): SE556399449901"
            />
            <div className="flex flex-col md:flex-row justify-center items-center">
              <nav className="mt-[calc(min(1em,7vw))]">
                <ul className="flex flex-wrap justify-center">
                  {legalLinks.map((link) => (
                    <li
                      key={link.text}
                      className="[&:not(:first-child)]:ml-[0.8em]"
                    >
                      <Link
                        href={link.href}
                        className="border-b border-current opacity-70 hover:opacity-90
                    font-monument-grotesk text-[1.3rem] uppercase tracking-[0.75px]"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <ul
                className="absolute bottom-[40px] right-[0px] flex gap-[10px]
            xl:bottom-[20px]  md:bottom-[15px]
            "
              >
                {socialLinks.map((link) => (
                  <li key={link.platform}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex text-[2em] hover:text-[#666666]"
                      title={link.platform}
                    >
                      {link.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </footer>
    </div>
  );
}

const officeLocations = [
  {
    country: "Sweden",
    cities: ["Stockholm", "Gothenburg", "Malmö"],
    href: "/contact/sweden",
  },
  {
    country: "Belgium",
    cities: ["Brussels"],
    href: "/contact/brussels",
  },
  {
    country: "Singapore",
    cities: ["Singapore"],
    href: "/contact/singapore",
  },
  {
    country: "USA",
    cities: ["New York"],
    href: "/contact/usa",
  },
];

const legalLinks = [
  { text: "Contact us", href: "/contact" },
  { text: "Terms and conditions", href: "/terms" },
  { text: "Disclaimer", href: "/disclaimer" },
  { text: "Privacy Notice", href: "/privacy" },
  { text: "Cookie policy", href: "/cookies" },
];

const socialLinks = [
  {
    platform: "Instagram",
    href: "https://www.instagram.com/mannheimer_swartling/",
    icon: <FaInstagram />,
  },
  {
    platform: "Facebook",
    href: "https://www.facebook.com/mannheimerswartling",
    icon: <FaFacebookF />,
  },
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/company/mannheimer-swartling",
    icon: <FaLinkedinIn />,
  },
];
