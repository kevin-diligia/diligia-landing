export const homeContent = {
  metadata: {
    title:
      "Diligia — Australia's Transaction Management Platform for Commercial Property",
    description:
      "Diligia is Australia's first Transaction Management Platform purpose-built for commercial property. From campaign through post-settlement, in one intelligent workspace.",
  },
  hero: {
    eyebrow: "Now Onboarding Design Partners — Australian Commercial Property",
    title: "Australia's first",
    titleAccent: "Transaction Management Platform",
    titleSuffix: "for commercial property.",
    subtitle:
      "Built for agents, vendors, purchasers, and their advisors. One intelligent workspace — from campaign launch through to post-settlement.",
    primaryCta: { label: "Become a design partner", href: "#partner" },
    secondaryCta: { label: "Learn more", href: "/about" },
  },
  partner: {
    headline: "Apply to become an early design partner",
    title: "Run a live deal on Diligia. Free.",
    description:
      "We're testing with a small group of agencies on real transactions. Help shape the product and get founding partner status.",
    perks: [
      "One deal, no cost",
      "Direct input on the product",
      "Founding partner recognition",
      "Preferred pricing at launch",
    ],
    emailPlaceholder: "your@agency.com.au",
    submitLabel: "Apply now",
  },
  stats: [
    {
      countTo: 10000,
      suffix: "+",
      label: "Commercial deals in Australia each year",
    },
    {
      countTo: 850,
      prefix: "$",
      suffix: "B+",
      label: "In commercial property transacted yearly",
    },
    {
      text: "Zero",
      label: "Tools built for the full deal lifecycle",
    },
  ],
  audience: {
    label: "Built for",
    tags: [
      "Commercial Agents",
      "Vendors",
      "Purchasers",
      "Solicitors",
      "Accountants",
      "Financiers",
    ],
  },
  problems: {
    title: "Most commercial deals still run on email and spreadsheets.",
    body: "Nothing ties the full transaction together, especially from listing a property through to settlement and what comes after.",
    cards: [
      {
        title: "Lost in email",
        description:
          "Requests and replies sit in inboxes. No shared list of what's open, answered, or agreed.",
        icon: "document",
      },
      {
        title: "No shared view",
        description:
          "Each party tracks progress differently. Items get missed and deadlines slip without anyone noticing.",
        icon: "clock",
      },
      {
        title: "Settlement chaos",
        description:
          "Supplier transfers, licences, staff entitlements — tracked in separate docs with no shared checklist.",
        icon: "checklist",
      },
      {
        title: "Deals fall over late",
        description:
          "Problems surface when it's too late, because nobody had one place to see what was still outstanding.",
        icon: "star",
      },
    ],
  },
  phases: {
    title: "One workspace. Every stage of the deal.",
    body: "Every party and document in one place for listing, due diligence, settlement, and post-settlement.",
    items: [
      {
        phase: "01",
        title: "Listings & campaigns",
        description:
          "Create the listing, run the campaign, and manage enquiries and data room access.",
      },
      {
        phase: "02",
        title: "Due diligence",
        description:
          "DD checklist, request tracker, and a data room with access for each party.",
      },
      {
        phase: "03",
        title: "Settlement",
        description:
          "Track conditions, supplier contracts, staff transitions, and completion items.",
      },
      {
        phase: "04",
        title: "Post-settlement",
        description:
          "Adjustments, entitlements, book debts, and ongoing obligations after close.",
      },
    ],
  },
  bottomCta: {
    title: "Ready to run a deal on",
    titleAccent: "Diligia",
    titleSuffix: "?",
    body: "Join our founding group of agencies testing the platform on live transactions. Free to try. No lock-in.",
    cta: { label: "Apply as a design partner", href: "#partner" },
  },
} as const;
