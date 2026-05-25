import type { Metadata } from "next";
import { contactContent } from "@/config/content/contact";
import { ContactSection } from "@/components/sections/contact";
import { GradientDivider } from "@/components/ui/GradientDivider";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: contactContent.metadata.title,
  description: contactContent.metadata.description,
};

export default function ContactPage() {
  const { hero } = contactContent;

  return (
    <>
      <PageHero title={hero.title} intro={hero.intro} />
      <GradientDivider />
      <ContactSection />
    </>
  );
}
