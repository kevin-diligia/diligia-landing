export const siteConfig = {
  name: "Diligia",
  tagline: "The truth behind every transaction.",
  description:
    "Australia's first Transaction Management Platform purpose-built for commercial property.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://diligia.com.au",
  formspreeEndpoint: "https://formspree.io/f/xjgjapja",
  formspreeFormId: "xjgjapja",
  email: "sean@diligia.com.au",
  company: {
    legalName: "Diligia Pty Ltd",
    acn: "696 841 844",
    abn: "46 696 841 844",
    location: "Fitzroy, Victoria, Australia",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Get in touch", href: "/contact" },
  ],
  footer: {
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  colors: {
    navy: "#071821",
    teal: "#1D9E75",
    tealLight: "#25b888",
    gray: "#637D8C",
  },
} as const;

export function getThankYouUrl() {
  return `${siteConfig.siteUrl}/thank-you`;
}
