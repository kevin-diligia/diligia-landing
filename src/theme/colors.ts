import { siteConfig } from "@/config/site";

function hexToRgb(hex: string): [number, number, number] {
  const normalized = hex.replace("#", "");
  return [
    Number.parseInt(normalized.slice(0, 2), 16),
    Number.parseInt(normalized.slice(2, 4), 16),
    Number.parseInt(normalized.slice(4, 6), 16),
  ];
}

function withAlpha(hex: string, alpha: number): string {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** Derived palette — base colors live in siteConfig.colors */
export const themeColors = {
  ...siteConfig.colors,
  white: "#ffffff",
  tealDim: withAlpha(siteConfig.colors.teal, 0.12),
} as const;

export function getThemeCssVariables(): Record<string, string> {
  const { navy, teal, tealLight, gray } = siteConfig.colors;
  const navyRgb = hexToRgb(navy).join(", ");
  const tealRgb = hexToRgb(teal).join(", ");

  return {
    "--navy": navy,
    "--navy-rgb": navyRgb,
    "--teal": teal,
    "--teal-rgb": tealRgb,
    "--teal-light": tealLight,
    "--teal-dim": themeColors.tealDim,
    "--gray": gray,
    "--white": themeColors.white,
    "--header-bg": `rgba(${navyRgb}, 0.92)`,
  };
}

export function themeCssText(): string {
  const variables = Object.entries(getThemeCssVariables())
    .map(([name, value]) => `${name}: ${value}`)
    .join("; ");

  return `:root { ${variables}; }`;
}
