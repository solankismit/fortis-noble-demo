import { cn } from "@/lib/utils";
import { Banner } from "./Banner";

interface HeroProps {
  videoSrc?: string;
  imageSrc?: string;
  title: string;
  id?: string;
  description?: string;
  button?: {
    text: string;
    href: string;
    target?: string;
  };
  className?: string;
  noTopShadow?: boolean;
}

export function Hero({
  videoSrc,
  imageSrc,
  id,
  title,
  description,
  button,
  className,
  noTopShadow = false,
}: HeroProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative h-[100svh] w-full overflow-hidden will-change-transform",
        className
      )}
    >
      <div className="relative h-full transform-gpu">
        {/* Video or Image - Lower z-index */}
        <div className="absolute inset-0 z-0 transform-gpu">
          {videoSrc ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover transform-gpu"
            >
              <source src={videoSrc} type="video/mp4" />
              <p>Your browser does not support video playback.</p>
            </video>
          ) : imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className="absolute top-0 left-0 w-full h-full object-cover transform-gpu"
            />
          ) : null}
        </div>

        {/* Gradients - Middle z-index */}
        <div className="absolute inset-0 z-10 pointer-events-none transform-gpu">
          {/* Top gradient overlay */}
          {!noTopShadow && (
            <div className="absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
          )}

          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-black/90 to-transparent" />
        </div>

        {/* Banner Component - Highest z-index */}
        <Banner
          title={title}
          description={description}
          button={button}
          className="z-20 transform-gpu"
        />
      </div>
    </section>
  );
}
