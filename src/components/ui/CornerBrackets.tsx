import type { CSSProperties } from "react";

interface CornerBracketsProps {
  variant?: "orange" | "lime" | "yellow" | "blue" | "muted" | "white";
  size?: number;
  strokeWidth?: number;
  offset?: number;
  className?: string;
}

export function CornerBrackets({
  variant = "orange",
  size = 8,
  strokeWidth = 2,
  offset = -1,
  className = "",
}: CornerBracketsProps) {
  const colorMap = {
    orange: "var(--color-orange)",
    lime: "var(--color-lime)",
    yellow: "var(--color-yellow)",
    blue: "var(--color-blue)",
    muted: "var(--color-border)",
    white: "var(--color-text)",
  };

  const color = colorMap[variant] ?? colorMap.orange;

  const style: CSSProperties = {
    position: "absolute",
    pointerEvents: "none",
    width: `${size}px`,
    height: `${size}px`,
    borderColor: color,
  };

  return (
    <div
      className={`corner-brackets corner-brackets--${variant} ${className}`.trim()}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 2,
      }}
    >
      {/* Top Left */}
      <span
        style={{
          ...style,
          top: `${offset}px`,
          left: `${offset}px`,
          borderTop: `${strokeWidth}px solid ${color}`,
          borderLeft: `${strokeWidth}px solid ${color}`,
        }}
      />
      {/* Top Right */}
      <span
        style={{
          ...style,
          top: `${offset}px`,
          right: `${offset}px`,
          borderTop: `${strokeWidth}px solid ${color}`,
          borderRight: `${strokeWidth}px solid ${color}`,
        }}
      />
      {/* Bottom Left */}
      <span
        style={{
          ...style,
          bottom: `${offset}px`,
          left: `${offset}px`,
          borderBottom: `${strokeWidth}px solid ${color}`,
          borderLeft: `${strokeWidth}px solid ${color}`,
        }}
      />
      {/* Bottom Right */}
      <span
        style={{
          ...style,
          bottom: `${offset}px`,
          right: `${offset}px`,
          borderBottom: `${strokeWidth}px solid ${color}`,
          borderRight: `${strokeWidth}px solid ${color}`,
        }}
      />
    </div>
  );
}
