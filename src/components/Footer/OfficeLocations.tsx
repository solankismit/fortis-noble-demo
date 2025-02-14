import Link from "next/link";
import { cn } from "@/lib/utils";

interface Office {
  country: string;
  cities: string[];
  href: string;
}

interface OfficeLocationsProps {
  offices: Office[];
}

export function OfficeLocations({ offices }: OfficeLocationsProps) {
  return (
    <nav className={cn("company-offices hidden md:block", "xl:mt-[14vmin]")}>
      <ul
        className={cn(
          "grid grid-cols-6 list-none",
          "mt-[175px] gap-[min(50px,7vw)]",
          "2xl:mt-[94px]",
          "xl:mt-[60px]",
          "lg:grid-cols-6 lg:mt-[min(50px,7vw)] lg:gap-y-[calc(min(50px,7vw)*0.5)]",
          "md:grid-cols-2"
        )}
      >
        {offices.map((office, index) => (
          <li
            key={index}
            className={cn(
              "menu-item relative leading-[1.5] md:leading-[1.15]",
              "border-r border-[#d8d8d8]",
              "md:border-r-0",
              "lg:border-r-0",
              "md:[&:nth-child(1)]:border-r md:[&:nth-child(3)]:border-r",
              "lg:border-r lg:[&:nth-child(4)]:border-r-0  lg:[&:nth-child(5)]:border-r"
            )}
          >
            <Link
              href={office.href}
              className={cn(
                "block font-itc-caslon text-[4.2rem] no-underline",
                "hover:text-[#666666]",
                "xl:text-[3.6rem]",
                "lg:text-[2.6rem]"
              )}
            >
              {office.country}
            </Link>
            <ul className="sub-menu mt-[6px] list-none">
              {office.cities.map((city) => (
                <li key={city} className="menu-item">
                  <Link
                    href={office.href}
                    className={cn(
                      "font-monument-grotesk text-[1.6rem]",
                      "tracking-[0.5px] no-underline",
                      "hover:text-[#666666]",
                      "xl:text-[1.5rem]",
                      "sm:text-[1.2rem]"
                    )}
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
