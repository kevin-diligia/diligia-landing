export const contactContent = {
  metadata: {
    title: "Contact — Diligia",
    description:
      "Get in touch with Diligia. Apply to become a design partner or enquire about the platform.",
  },
  hero: {
    eyebrow: "Get in touch",
    title: "Let's start a conversation.",
    intro:
      "Whether you're a commercial agency, property solicitor, investor, or someone who's felt this problem firsthand — we'd love to hear from you.",
  },
  partnerCallout: {
    title: "Design partners",
    description:
      "Test Diligia on one live deal — free. Help shape the product before launch.",
    perks: [
      "One deal, no cost",
      "Direct input on the product",
      "Founding partner recognition",
      "Preferred pricing at launch",
    ],
  },
  form: {
    title: "Send a message",
    subtitle: "Tell us a bit about yourself. We reply within one business day.",
    submitLabel: "Send message",
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
  title: "Thank you for getting in touch.",
  body: "We've received your message and will be in touch shortly. We look forward to the conversation.",
  buttonLabel: "Back to home",
} as const;
