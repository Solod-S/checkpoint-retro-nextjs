import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type RetroButtonVariant = "primary" | "secondary" | "active" | "icon";
export type RetroButtonSize = "sm" | "md" | "lg";

interface CommonProps {
  variant?: RetroButtonVariant;
  size?: RetroButtonSize;
  isLoading?: boolean;
  children: ReactNode;
  className?: string;
}

type ButtonAsButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLinkProps = CommonProps & {
  href: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
};

export type RetroButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function RetroButton({
  variant = "primary",
  size = "md",
  isLoading = false,
  children,
  className = "",
  ...rest
}: RetroButtonProps) {
  const baseClasses = `retro-btn retro-btn--${variant} retro-btn--${size} ${
    isLoading ? "retro-btn--loading" : ""
  } ${className}`.trim();

  if ("href" in rest && rest.href) {
    const { href, target, rel, onClick } = rest as ButtonAsLinkProps;
    return (
      <Link href={href} target={target} rel={rel} onClick={onClick} className={baseClasses}>
        {isLoading ? <span className="retro-btn__spinner" aria-hidden="true" /> : null}
        <span className="retro-btn__content">{children}</span>
      </Link>
    );
  }

  const { disabled, type = "button", ...buttonProps } = rest as ButtonAsButtonProps;

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={baseClasses}
      {...buttonProps}
    >
      {isLoading ? <span className="retro-btn__spinner" aria-hidden="true" /> : null}
      <span className="retro-btn__content">{children}</span>
    </button>
  );
}
