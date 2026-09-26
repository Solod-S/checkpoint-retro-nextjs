import type { ReactNode } from "react";
import type { PlatformKey } from "@/types/content";

interface PlatformBadgeProps {
  platform: PlatformKey | string;
  children?: ReactNode;
  className?: string;
  size?: "sm" | "md";
}

export function PlatformBadge({
  platform,
  children,
  className = "",
  size = "md",
}: PlatformBadgeProps) {
  const norm = platform.toLowerCase();

  const platformKey = norm.includes("nintendo")
    ? "nintendo"
    : norm.includes("playstation") || norm === "ps"
      ? "playstation"
      : norm.includes("sega")
        ? "sega"
        : norm.includes("pc")
          ? "pc"
          : norm.includes("аркад") || norm.includes("arcade")
            ? "arcade"
            : norm.includes("dreamcast")
              ? "dreamcast"
              : "default";

  const defaultLabel = children ?? platform.toUpperCase();

  return (
    <span
      className={`platform-badge platform-badge--${platformKey} platform-badge--${size} ${className}`.trim()}
    >
      {defaultLabel}
    </span>
  );
}
