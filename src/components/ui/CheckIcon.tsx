import { siteConfig } from "@/config/site";

export function CheckIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      style={{ flexShrink: 0 }}
    >
      <circle cx="7" cy="7" r="6" fill={siteConfig.colors.teal} />
      <path
        d="M4 7l2 2 4-4"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PerkList({ perks }: { perks: readonly string[] }) {
  return (
    <>
      {perks.map((perk) => (
        <span
          key={perk}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 13,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.4,
          }}
        >
          <CheckIcon />
          {perk}
        </span>
      ))}
    </>
  );
}
