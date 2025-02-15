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
    <nav className={cn("company-offices hidden sm:block", "xl:mt-[14vmin]")}>
      <ul
        className={cn(
          "grid grid-cols-6 list-none",
          "gap-[min(50px,7vw)]",
          "sm:grid-cols-2",
          "mt-[14vmin] 2xl:mt-[94px] min-[1920px]:mt-[175px]",
          "lg:grid-cols-6 lg:mt-[min(50px,7vw)] lg:gap-y-[calc(min(50px,7vw)*0.5)]",
          "md:grid-cols-2"
        )}
      >
        {offices.map((office, index) => (
          <li
            key={index}
            className={cn(
              " relative leading-[1.5] md:leading-[1.15]",
              "border-r-0",
              " border-[#d8d8d8]",
              "md:[&:nth-child(1)]:border-r md:[&:nth-child(3)]:border-r",
              "lg:border-r lg:[&:nth-child(4)]:border-r-0  lg:[&:nth-child(5)]:border-r"
            )}
          >
            <Link
              href={office.href}
              className={cn(
                "block font-itc-caslon  no-underline",
                "hover:text-[#666666]",
                "lg:text-[3.6rem]",
                "text-[2.6rem]",
                "2xl:text-[4.2rem]",
                "leading-none"
              )}
            >
              {office.country}
            </Link>
            <ul className="sub-menu mt-[6px] list-none">
              {office.cities.map((city) => (
                <li key={city} className=" leading-[1.5]">
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
