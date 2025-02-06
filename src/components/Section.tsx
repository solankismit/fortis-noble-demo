import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  container?: boolean
  borderTop?: boolean
  borderBottom?: boolean
  noPadding?: boolean
}

export function Section({ 
  children, 
  className,
  container = true,
  borderTop = false,
  borderBottom = false,
  noPadding = false
}: SectionProps) {
  return (
    <section className={cn(
      "relative",
      !noPadding && "py-16 md:py-24",
      className
    )}>
      {container ? (
        <div className={cn(
          "container mx-auto px-[34px] md:px-[50px] max-w-[1920px]",
          borderTop && "border-t",
          borderBottom && "border-b"
        )}>
          {children}
        </div>
      ) : children}
    </section>
  )
} 