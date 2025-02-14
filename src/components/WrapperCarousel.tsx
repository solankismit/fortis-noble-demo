import { useState, useEffect, useCallback, useMemo } from "react";
import { TempCarousel } from "./TempCarousel";
import Image from "next/image";

// Image optimization parameters
const imageParams = "?auto=format&w=800&q=75";

// Carousel data with optimized image URLs
const carouselData = [
  // First carousel - Nature theme
  [
    {
      id: 1,
      src:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb" +
        imageParams,
      blurHash: "LKF$R+?wt7M{_4%MRjRj~qxuIURj", // Pre-generated blur hash
      description: "Yosemite Valley Landscape",
    },
    {
      id: 2,
      src:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e" +
        imageParams,
      blurHash: "L8B:Af.8.8Rj~qRPRjRj-pxuRjRj", // Pre-generated blur hash
      description: "Autumn Forest Path",
    },
    {
      id: 3,
      src:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b" +
        imageParams,
      blurHash: "L6B:Af.8.8Rj~qRPRjRj-pxuRjRj", // Pre-generated blur hash
      description: "Mountain Lake Reflection",
    },
    {
      id: 4,
      src:
        "https://images.unsplash.com/photo-1426604966848-d7adac402bff" +
        imageParams,
      blurHash: "L8B:Af.8.8Rj~qRPRjRj-pxuRjRj", // Pre-generated blur hash
      description: "Misty Mountain Forest",
    },
    {
      id: 5,
      src:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e" +
        imageParams,
      blurHash: "L8B:Af.8.8Rj~qRPRjRj-pxuRjRj", // Pre-generated blur hash
      description: "Green Valley Panorama",
    },
    {
      id: 6,
      src:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" +
        imageParams,
      blurHash: "L8B:Af.8.8Rj~qRPRjRj-pxuRjRj", // Pre-generated blur hash
      description: "Sunset Mountain Range",
    },
    {
      id: 7,
      src:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e" +
        imageParams,
      blurHash: "L8B:Af.8.8Rj~qRPRjRj-pxuRjRj", // Pre-generated blur hash
      description: "Forest Sunlight",
    },
  ],
  // Second carousel - Urban theme
  [
    {
      id: 8,
      src:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000" +
        imageParams,
      blurHash: "L8B:Af.8.8Rj~qRPRjRj-pxuRjRj", // Pre-generated blur hash
      description: "City Skyline Night",
    },
    {
      id: 9,
      src:
        "https://images.unsplash.com/photo-1444723121867-7a241cacace9" +
        imageParams,
      blurHash: "L8B:Af.8.8Rj~qRPRjRj-pxuRjRj", // Pre-generated blur hash
      description: "City Architecture",
    },
    {
      id: 10,
      src:
        "https://images.unsplash.com/photo-1460472178825-e5240623afd5" +
        imageParams,
      blurHash: "L8B:Af.8.8Rj~qRPRjRj-pxuRjRj", // Pre-generated blur hash
      description: "Urban Street Life",
    },
    {
      id: 11,
      src:
        "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb" +
        imageParams,
      blurHash: "L8B:Af.8.8Rj~qRPRjRj-pxuRjRj", // Pre-generated blur hash
      description: "Modern Architecture",
    },
    {
      id: 12,
      src:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b" +
        imageParams,
      blurHash: "L8B:Af.8.8Rj~qRPRjRj-pxuRjRj", // Pre-generated blur hash
      description: "City Bridge at Night",
    },
    {
      id: 13,
      src:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e" +
        imageParams,
      blurHash: "L8B:Af.8.8Rj~qRPRjRj-pxuRjRj", // Pre-generated blur hash
      description: "Downtown District",
    },
    {
      id: 14,
      src:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df" +
        imageParams,
      blurHash: "L8B:Af.8.8Rj~qRPRjRj-pxuRjRj", // Pre-generated blur hash
      description: "Urban Sunset",
    },
  ],
  // Third carousel - Ocean theme
  [
    {
      id: 15,
      src:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" +
        imageParams,
      blurHash: "L6B:Af.8.8Rj~qRPRjRj-pxuRjRj", // Pre-generated blur hash
      description: "Tropical Beach",
    },
    {
      id: 16,
      src:
        "https://images.unsplash.com/photo-1495954484750-af469f2f9be5" +
        imageParams,
      blurHash: "L8B:Af.8.8Rj~qRPRjRj-pxuRjRj", // Pre-generated blur hash
      description: "Ocean Waves",
    },
    {
      id: 17,
      src:
        "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a" +
        imageParams,
      blurHash: "L8B:Af.8.8Rj~qRPRjRj-pxuRjRj", // Pre-generated blur hash
      description: "Underwater Scene",
    },
    {
      id: 18,
      src:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b" +
        imageParams,
      blurHash: "L8B:Af.8.8Rj~qRPRjRj-pxuRjRj", // Pre-generated blur hash
      description: "Coral Reef",
    },
    {
      id: 19,
      src:
        "https://images.unsplash.com/photo-1514999037859-b486988734f1" +
        imageParams,
      blurHash: "L8B:Af.8.8Rj~qRPRjRj-pxuRjRj", // Pre-generated blur hash
      description: "Beach Sunset",
    },
    {
      id: 20,
      src:
        "https://images.unsplash.com/photo-1505118380757-91f5f5632de0" +
        imageParams,
      blurHash: "L8B:Af.8.8Rj~qRPRjRj-pxuRjRj", // Pre-generated blur hash
      description: "Coastal Rocks",
    },
    {
      id: 21,
      src:
        "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8" +
        imageParams,
      blurHash: "L8B:Af.8.8Rj~qRPRjRj-pxuRjRj", // Pre-generated blur hash
      description: "Tropical Paradise",
    },
  ],
];

export function WrapperCarousel() {
  const [position, setPosition] = useState(0);
  const [isHovering, setIsHovering] = useState<"left" | "right" | null>(null);
  const maxScroll = -200; // Maximum scroll for three carousels

  // Memoize the animation function to prevent unnecessary recreations
  const animate = useCallback(
    (direction: "left" | "right") => {
      const moveSpeed = 0.8; // Slightly increased speed for smoother movement
      if (direction === "left") {
        setPosition((prev) => Math.min(0, prev + moveSpeed));
      } else {
        setPosition((prev) => Math.max(maxScroll, prev - moveSpeed));
      }
    },
    [maxScroll]
  );

  // Optimize animation frame handling
  useEffect(() => {
    if (!isHovering) return;

    let animationFrame: number;
    const handleAnimation = () => {
      animate(isHovering);
      animationFrame = requestAnimationFrame(handleAnimation);
    };

    animationFrame = requestAnimationFrame(handleAnimation);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovering, animate]);

  // Memoize event handlers
  const handleMouseEnter = useCallback((direction: "left" | "right") => {
    setIsHovering(direction);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(null);
  }, []);

  // Memoize hover areas to prevent unnecessary re-renders
  const hoverAreas = useMemo(
    () => ({
      left: position < 0 && (
        <div
          className="absolute left-0 top-0 w-[20%] h-full z-50 bg-gradient-to-r from-black/10 to-transparent"
          onMouseEnter={() => handleMouseEnter("left")}
          onMouseLeave={handleMouseLeave}
        />
      ),
      right: position > maxScroll && (
        <div
          className="absolute right-0 top-0 w-[20%] h-full z-50 bg-gradient-to-l from-black/10 to-transparent"
          onMouseEnter={() => handleMouseEnter("right")}
          onMouseLeave={handleMouseLeave}
        />
      ),
    }),
    [position, maxScroll, handleMouseEnter, handleMouseLeave]
  );

  // Calculate progress percentage
  const progressPercentage = useMemo(
    () => ((position - maxScroll) / -maxScroll) * 100,
    [position, maxScroll]
  );

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hover areas */}
      {hoverAreas.left}
      {hoverAreas.right}

      {/* Carousel container with smooth transition */}
      <div className="relative w-full">
        <div
          className="flex transition-transform duration-100 ease-linear will-change-transform"
          style={{
            transform: `translateX(${position}%)`,
            width: "300%", // Container width for three carousels
          }}
        >
          {carouselData.map((images, index) => (
            <div
              key={index}
              className="w-1/3 flex-shrink-0" // Each carousel takes 1/3 of the container width
              style={{
                opacity: 1,
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <TempCarousel images={images} />
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[200px] h-1 bg-white/30 rounded-full overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-100 ease-linear rounded-full will-change-[width]"
          style={{
            width: `${progressPercentage}%`,
          }}
        />
      </div>
    </div>
  );
}
