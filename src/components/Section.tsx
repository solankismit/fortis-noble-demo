import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  container?: boolean;
  borderTop?: boolean;
  borderBottom?: boolean;
  noPadding?: boolean;
  title?: string;
}

export function Section({
  children,
  className,
  container = true,
  borderTop = false,
  borderBottom = false,
  noPadding = false,
  title,
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative",

        className
      )}
    >
      {container ? (
        <div
          className={cn(
            "container mx-auto px-[min(50px,7vw)] 2xl:px-[100px] max-w-[1920px]"
          )}
        >
          <div
            className={cn(
              " border-[#d8d8d8]",
              borderTop && "border-t",
              borderBottom && "border-b",
              !noPadding &&
                "py-[calc(min(50px,7vw)*2)] md:py-[98px] 2xl:py-[122px]"
            )}
          >
            {title && (
              <h2 className="text-center text-black mb-[calc(min(50px,7vw))] md:mb-[47px] 2xl:mb-[70px] mx-auto">
                {title}
              </h2>
            )}
            {children}
          </div>
        </div>
      ) : (
        children
      )}
    </section>
  );
}
