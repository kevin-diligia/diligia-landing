import type { Metadata } from "next";
import { aboutContent } from "@/config/content/about";
import { AboutCta } from "@/components/sections/about/AboutCta";
import { FounderStrip } from "@/components/sections/about/FounderStrip";
import { ProductGrid } from "@/components/sections/about/ProductGrid";
import { ValuesGrid } from "@/components/sections/about/ValuesGrid";
import { GradientDivider } from "@/components/ui/GradientDivider";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: aboutContent.metadata.title,
  description: aboutContent.metadata.description,
};

export default function AboutPage() {
  const { hero } = aboutContent;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={
          <>
            {hero.title}
            <br />
            <span className="italic-accent">{hero.titleAccent}</span>
          </>
        }
        intro={hero.intro}
      >
        <FounderStrip />
      </PageHero>
      <GradientDivider />
      <ProductGrid />
      <GradientDivider />
      <ValuesGrid />
      <GradientDivider />
      <AboutCta />
    </>
  );
}
