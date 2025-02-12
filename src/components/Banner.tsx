import React from "react";
import { cn } from "../lib/utils";
import { Button } from "./Button";
import { Section } from "./Section";

interface BannerProps {
  title: string;
  description?: string;
  button?: {
    text: string;
    href: string;
    target?: string;
  };
  className?: string;
}

export function Banner({ title, description, button, className }: BannerProps) {
  return (
    <Section
      className={cn("absolute bottom-0 left-0 w-full", className)}
      noPadding
    >
      <div
        className={cn(
          "w-[calc(100%-min(50px,7vw)*2)]",
          "2xl:w-[50%]",
          "mb-[calc(min(50px,7vw)*2)] xl:mb-[50px] 2xl:mb-[100px]"
        )}
      >
        <h2
          className="text-[3.4rem] leading-[1.07] text-white
          2xl:text-[7.2rem]
          xl:text-[5.6rem]
          md:text-[4.2rem]
          "
        >
          {title}
        </h2>

        {description && (
          <p className="mt-[18px] font-monument-grotesk text-white">
            {description}
          </p>
        )}

        {button && (
          <div className="mt-[1.4em]">
            <Button href={button.href} target={button.target} variant="white">
              {button.text}
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}
