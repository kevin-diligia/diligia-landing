export const contactContent = {
  metadata: {
    title: "Contact — Diligia",
    description:
      "Get in touch with Diligia. Apply to become a design partner or enquire about the platform.",
  },
  hero: {
    eyebrow: "Get in touch",
    title: "Let's start a",
    titleAccent: "conversation.",
    intro:
      "Whether you're a commercial agency, property solicitor, investor, or someone who's felt this problem firsthand — we'd love to hear from you.",
  },
  partnerCallout: {
    title: "Design Partner Program",
    description:
      "We're inviting a select group of commercial property agencies to test Diligia on one live transaction — completely free. Shape the product before it launches.",
    perks: [
      "One transaction, completely free",
      "Direct input into the product",
      "Founding partner recognition",
      "Preferred pricing at launch",
    ],
  },
  form: {
    title: "Send us a message",
    subtitle:
      "Tell us a bit about yourself and what you're looking for. We'll be in touch within one business day.",
    submitLabel: "Send message →",
    note: "We respond to every enquiry within one business day. Your details will never be shared with third parties.",
    roleOptions: [
      { value: "", label: "Select your role" },
      { value: "agency_principal", label: "Agency Principal" },
      { value: "commercial_agent", label: "Commercial Real Estate Agent" },
      { value: "solicitor", label: "Property Solicitor" },
      { value: "accountant", label: "Property Accountant" },
      { value: "investor", label: "Investor" },
      { value: "buyer", label: "Buyer / Acquirer" },
      { value: "other", label: "Other" },
    ],
  },
} as const;

export const thankYouContent = {
  metadata: {
    title: "Thank You — Diligia",
    description: "Thank you for contacting Diligia.",
  },
  eyebrow: "Message received",
  title: "Thank you for",
  titleAccent: "getting in touch.",
  body: "We've received your message and will be in touch shortly. We look forward to the conversation.",
  buttonLabel: "Back to home",
} as const;
