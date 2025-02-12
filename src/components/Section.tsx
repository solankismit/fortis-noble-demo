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
}: SectionProps) {
  return (
    <section
      className={cn("relative", !noPadding && "py-16 md:py-24", className)}
    >
      {container ? (
        <div
          className={cn(
            "container mx-auto px-[min(50px,7vw)] 2xl:px-[100px] max-w-[1920px]",
            borderTop && "border-t",
            borderBottom && "border-b"
          )}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
