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
  newsletter: {
    title: string;
    description: string;
    buttonText: string;
  };
  officeLocations: Array<{
    country: string;
    cities: string[];
    href: string;
  }>;
  companyInfo: {
    name: string;
    orgNumber: string;
    vatNumber: string;
  };
  legalLinks: Array<{
    text: string;
    href: string;
  }>;
}

export function Footer({
  className,
  newsletter,
  officeLocations,
  companyInfo,
  legalLinks,
}: FooterProps) {
  return (
    <div id="footer-observer" className="relative">
      <footer
        className={cn(
          "fixed inset-0 bg-black text-white -z-10 min-h-[100dvh] bottom-0",
          "flex flex-col justify-end",
          "overflow-hidden transition-transform duration-400",
          className
        )}
      >
        <Section noPadding>
          <div className="relative w-full pt-[min(50px,7vw)] pb-[15px] md:pb-[20px] xl:pt-[40px] 2xl:pb-[40px]">
            <Newsletter
              title={newsletter.title}
              description={newsletter.description}
              buttonText={newsletter.buttonText}
              buttonHref="#"
            />

            <OfficeLocations offices={officeLocations} />

            <CompanyInfo
              companyName={companyInfo.name}
              orgNumber={companyInfo.orgNumber}
              vatNumber={companyInfo.vatNumber}
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
                        className="border-b border-current opacity-60 hover:opacity-90 transition-all duration-300 ease-in-out
                    font-monument-grotesk text-[1.3rem] uppercase tracking-[0.75px]"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <ul
                className="static mt-[min(50px,7vw)] md:mt-0 md:absolute right-[0px] flex gap-[13px]
            bottom-[15px] md:bottom-[20px] 2xl:bottom-[40px]
            "
              >
                {socialLinks.map((link) => (
                  <li key={link.platform}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex text-[30px] hover:text-[#666666] transition-all duration-300 ease-in-out"
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

const socialLinks = [
  {
    platform: "Instagram",
    href: "#",
    icon: <FaInstagram />,
  },
  {
    platform: "Facebook",
    href: "#",
    icon: <FaFacebookF />,
  },
  {
    platform: "LinkedIn",
    href: "#",
    icon: <FaLinkedinIn />,
  },
];
