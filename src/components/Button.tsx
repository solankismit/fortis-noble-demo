import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "white" | "black" | "default";
  href?: string;
  target?: string;
  circular?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "default",
  href,
  target,
  circular = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center",
    "bg-transparent border border-[#999999]",
    "min-w-[246px] px-8 py-4",
    "leading-none tracking-[0.5px] text-center",
    "font-monument-grotesk",
    "transition-all duration-300 ease-in-out",
    "hover:bg-black hover:border-black hover:text-white",
    "xl:text-[1.5rem]",
    "min-w-[160px] text-[1.4rem]",
    "xl:min-w-[246px] xl:text-[1.5rem]",
    "2xl:min-w-[246px] 2xl:text-[1.6rem]",
    circular &&
      "rounded-full max-w-[370px] min-w-[160px] w-full py-6 uppercase sm:min-w-[280px] px-[1.5em] py-[1.3em] sm:py-[1.5em] sm:px-[2em]"
  );

  const variants = {
    default: "text-black dark:text-white dark:hover:text-black",
    white:
      "border-[#d8d8d8] text-white hover:bg-white hover:border-white hover:text-black",
    black: "text-black hover:text-white",
  };

  const buttonClass = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} target={target} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}
