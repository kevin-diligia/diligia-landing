import type { Metadata } from "next";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { DiligiaMantineProvider } from "@/components/providers/MantineProvider";
import { siteConfig } from "@/config/site";
import "@mantine/core/styles.css";
import "@/styles/globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      {...mantineHtmlProps}
      data-mantine-color-scheme="dark"
      className={`${dmSans.variable} ${playfair.variable}`}
    >
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          paddingTop: 80,
        }}
      >
        <DiligiaMantineProvider>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </DiligiaMantineProvider>
      </body>
    </html>
  );
}
