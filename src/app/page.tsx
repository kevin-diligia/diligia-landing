import type { Metadata } from "next";
import { homeContent } from "@/config/content/home";
import HomeSection from "@/components/sections/home";

export const metadata: Metadata = {
  title: homeContent.metadata.title,
  description: homeContent.metadata.description,
};

export default function HomePage() {
  return (
    <HomeSection />
  );
}
