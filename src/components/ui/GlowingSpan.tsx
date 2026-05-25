import type { ComponentPropsWithoutRef } from "react";

type GlowingSpanProps = ComponentPropsWithoutRef<"span">;

export function GlowingSpan({
  children,
  className,
  ...props
}: GlowingSpanProps) {
  return (
    <span
      className={["glare-text", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}
