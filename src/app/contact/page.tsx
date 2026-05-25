import type { Metadata } from "next";
import { contactContent } from "@/config/content/contact";
import { ContactSection } from "@/components/sections/contact/ContactSection";
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
      />
      <GradientDivider />
      <ContactSection />
    </>
  );
}
