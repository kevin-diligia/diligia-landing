import type { Metadata } from "next";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { DiligiaMantineProvider } from "@/components/providers/MantineProvider";
import { siteConfig } from "@/config/site";
import { themeCssText } from "@/theme/colors";
import "@mantine/core/styles.css";
import "@/styles/globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-jakarta",
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
      className={`${dmSans.variable} ${jakarta.variable}`}
    >
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
        <style dangerouslySetInnerHTML={{ __html: themeCssText() }} />
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
          <main style={{ flex: 1, margin: 0, padding: 0 }}>{children}</main>
          <Footer />
        </DiligiaMantineProvider>
      </body>
    </html>
  );
}
