import type { Metadata } from "next";
import { aboutContent } from "@/config/content/about";
import { AboutCta } from "@/components/sections/about/cta";
import { FounderStrip } from "@/components/sections/about/founder-strip";
import { ProductGrid } from "@/components/sections/about/product";
import { ValuesGrid } from "@/components/sections/about/values";
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
      <PageHero title={hero.title} intro={hero.intro}>
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
