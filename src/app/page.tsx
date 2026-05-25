import type { Metadata } from "next";
import { homeContent } from "@/config/content/home";
import { AudienceStrip } from "@/components/sections/home/AudienceStrip";
import { BottomCtaSection } from "@/components/sections/home/BottomCtaSection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { PhasesSection } from "@/components/sections/home/PhasesSection";
import { ProblemsSection } from "@/components/sections/home/ProblemsSection";
import { GradientDivider } from "@/components/ui/GradientDivider";

export const metadata: Metadata = {
  title: homeContent.metadata.title,
  description: homeContent.metadata.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GradientDivider />
      <AudienceStrip />
      <GradientDivider />
      <ProblemsSection />
      <GradientDivider />
      <PhasesSection />
      <GradientDivider />
      <BottomCtaSection />
    </>
  );
}
