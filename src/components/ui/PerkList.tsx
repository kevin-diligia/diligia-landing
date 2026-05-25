import { CircleCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

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
          <CircleCheck
            size={14}
            color={siteConfig.colors.teal}
            aria-hidden
            style={{ flexShrink: 0 }}
          />
          {perk}
        </span>
      ))}
    </>
  );
}
