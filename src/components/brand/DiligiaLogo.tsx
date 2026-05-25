import type { CSSProperties } from "react";

const LOGO_ASSETS = {
  icon: {
    src: "/logo/logo_icon.svg",
    aspectRatio: 651 / 652,
  },
  long: {
    src: "/logo/logo_long.svg",
    aspectRatio: 1425 / 750,
  },
} as const;

type DiligiaLogoProps = {
  variant?: keyof typeof LOGO_ASSETS;
  height?: number;
  className?: string;
  alt?: string;
  style?: CSSProperties;
};

export function DiligiaLogo({
  variant = "icon",
  height = 32,
  className,
  alt = "Diligia",
  style,
}: DiligiaLogoProps) {
  const { src, aspectRatio } = LOGO_ASSETS[variant];

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      style={{
        display: "block",
        height,
        width: height * aspectRatio,
        ...style,
      }}
    />
  );
}
