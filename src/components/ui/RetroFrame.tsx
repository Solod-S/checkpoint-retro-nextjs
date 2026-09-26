import type { HTMLAttributes, ReactNode } from "react";
import { CornerBrackets } from "./CornerBrackets";

export interface RetroFrameProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  brackets?: boolean;
  bracketVariant?: "orange" | "lime" | "yellow" | "blue" | "muted" | "white";
  scanlines?: boolean;
  className?: string;
}

export function RetroFrame({
  children,
  brackets = false,
  bracketVariant = "orange",
  scanlines = false,
  className = "",
  ...props
}: RetroFrameProps) {
  return (
    <div
      {...props}
      className={`retro-frame ${scanlines ? "retro-frame--scanlines" : ""} ${className}`.trim()}
    >
      {brackets ? <CornerBrackets variant={bracketVariant} /> : null}
      {children}
    </div>
  );
}
