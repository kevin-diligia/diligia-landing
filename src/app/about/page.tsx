import type { Metadata } from "next";
import { aboutContent } from "@/config/content/about";
import { AboutCta } from "@/components/sections/about/cta";
import { FounderSection } from "@/components/sections/about/founder";
import { WhatIsSection } from "@/components/sections/about/what-is";
import { GradientDivider } from "@/components/ui/GradientDivider";

export const metadata: Metadata = {
  title: aboutContent.metadata.title,
  description: aboutContent.metadata.description,
};

export default function AboutPage() {
  return (
    <>
      <WhatIsSection />
      <GradientDivider />
      <FounderSection />
      <GradientDivider />
      <AboutCta />
    </>
  );
}
