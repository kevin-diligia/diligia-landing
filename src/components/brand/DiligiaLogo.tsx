import { siteConfig } from "@/config/site";

type DiligiaLogoProps = {
  size?: number;
};

export function DiligiaLogo({ size = 32 }: DiligiaLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden>
      <circle cx="10" cy="20" r="7" fill={siteConfig.colors.teal} />
      <circle
        cx="32"
        cy="8"
        r="4.5"
        fill={siteConfig.colors.teal}
        opacity="0.55"
      />
      <circle
        cx="32"
        cy="32"
        r="4.5"
        fill={siteConfig.colors.teal}
        opacity="0.55"
      />
      <line
        x1="17"
        y1="16"
        x2="28"
        y2="10"
        stroke={siteConfig.colors.teal}
        strokeWidth="2"
        opacity="0.5"
      />
      <line
        x1="17"
        y1="24"
        x2="28"
        y2="30"
        stroke={siteConfig.colors.teal}
        strokeWidth="2"
        opacity="0.5"
      />
    </svg>
  );
}

export function DiligiaWordmark({ size = "md" }: { size?: "sm" | "md" }) {
  const fontSize = size === "sm" ? 18 : 22;
  const supSize = size === "sm" ? 9 : 10;

  return (
    <span
      style={{
        fontFamily: "var(--font-playfair), Playfair Display, serif",
        fontSize,
        color: "#ffffff",
      }}
    >
      Diligia
      <sup
        style={{
          fontSize: supSize,
          color: siteConfig.colors.teal,
        }}
      >
        ™
      </sup>
    </span>
  );
}
