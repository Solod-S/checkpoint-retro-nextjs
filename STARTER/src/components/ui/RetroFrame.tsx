import type { HTMLAttributes, ReactNode } from "react";

export function RetroFrame({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div {...props} className={`retro-frame ${className}`.trim()}>
      {children}
    </div>
  );
}
