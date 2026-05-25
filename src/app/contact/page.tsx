import type { Metadata } from "next";
import { contactContent } from "@/config/content/contact";
import { ContactSection } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: contactContent.metadata.title,
  description: contactContent.metadata.description,
};

export default function ContactPage() {
  return <ContactSection />;
}
