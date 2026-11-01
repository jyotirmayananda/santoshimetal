import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  layout?: "horizontal" | "stacked" | "emblem";
  variant?: "dark" | "light";
  className?: string;
  imageClassName?: string;
  height?: number;
}

export default function Logo({
  layout = "horizontal",
  className,
  imageClassName,
  height,
}: LogoProps) {

  if (layout === "emblem") {
    const emblemHeight = height || 44;
    return (
      <Link
        href="/"
        className={cn(
          "group inline-flex items-center transition-transform duration-300 hover:scale-105 active:scale-95",
          className
        )}
        aria-label="Santoshi Metal Industries Homepage"
      >
        <Image
          src="/images/logo/logo-emblem.png"
          alt="Santoshi Metal Industries Official 3D Emblem"
          width={emblemHeight}
          height={emblemHeight}
          className={cn(
            "object-contain drop-shadow-[0_4px_12px_rgba(198,146,77,0.25)]",
            imageClassName
          )}
          priority
        />
      </Link>
    );
  }

  if (layout === "stacked") {
    const stackedHeight = height || 80;
    return (
      <Link
        href="/"
        className={cn(
          "group inline-flex flex-col items-start transition-opacity duration-300 hover:opacity-95",
          className
        )}
        aria-label="Santoshi Metal Industries Homepage"
      >
        <div className="relative">
          <Image
            src="/images/logo/logo-full.png"
            alt="Santoshi Metal Industries Official Logo"
            width={Math.round(stackedHeight * 1.5)}
            height={stackedHeight}
            style={{ height: `${stackedHeight}px`, width: "auto" }}
            className={cn(
              "object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]",
              imageClassName
            )}
            priority
          />
        </div>
      </Link>
    );
  }

  // Default: Horizontal brand lockup
  const defaultHeight = height || 44;
  const calculatedWidth = Math.round(defaultHeight * 4.53);

  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-3 transition-all duration-300 hover:opacity-95",
        className
      )}
      aria-label="Santoshi Metal Industries Homepage"
    >
      <div className="relative flex items-center">
        <Image
          src="/images/logo/logo-horizontal.png"
          alt="Santoshi Metal Industries Official Logo"
          width={calculatedWidth}
          height={defaultHeight}
          style={{ height: `${defaultHeight}px`, width: "auto" }}
          className={cn(
            "object-contain drop-shadow-[0_2px_10px_rgba(198,146,77,0.2)]",
            imageClassName
          )}
          priority
        />
      </div>
    </Link>
  );
}
