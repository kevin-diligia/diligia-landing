import type { Metadata } from "next";
import { thankYouContent } from "@/config/content/contact";
import { ThankYouSection } from "@/components/sections/thank-you/ThankYouSection";

export const metadata: Metadata = {
  title: thankYouContent.metadata.title,
  description: thankYouContent.metadata.description,
};

export default function ThankYouPage() {
  return <ThankYouSection />;
}
