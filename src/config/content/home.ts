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
    badge: "Design Partner Program",
    availability: "Limited places available",
    title: "Test Diligia on a live transaction. Free.",
    description:
      "We're inviting a select group of commercial property agencies to run one transaction through Diligia at no cost. Shape the product before it launches and be recognised as a founding partner.",
    perks: [
      "One transaction, completely free",
      "Direct input into the product",
      "Founding partner recognition",
      "Preferred pricing at launch",
    ],
    emailPlaceholder: "your@agency.com.au",
    submitLabel: "Apply to partner →",
  },
  stats: [
    {
      value: "10,000+",
      label: "Commercial transactions per year in Australia",
    },
    {
      value: "$850B+",
      label: "Total value of Australian commercial property transacted annually",
    },
    {
      value: "Zero",
      label:
        "Platforms purpose-built for Australian commercial property transactions end-to-end",
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
    eyebrow: "Why Diligia exists",
    title: "Commercial property transactions",
    titleAccent: "fundamentally broken.",
    body: "Every commercial property transaction in Australia is currently managed across email chains, Word documents, and Excel spreadsheets. There is no platform purpose-built to manage the full lifecycle — from campaign through to post-settlement — until now.",
    cards: [
      {
        title: "Communication breakdown",
        description:
          "Information requests flow through unstructured email chains with no central tracking, no accountability, and no permanent record of what was asked, answered, or agreed.",
        icon: "document",
      },
      {
        title: "No shared visibility",
        description:
          "Every party — agent, vendor, buyer, solicitor — maintains a different view of progress. Without a single source of truth, critical items go unresolved and timelines slip without warning.",
        icon: "clock",
      },
      {
        title: "Completion chaos",
        description:
          "Settlement obligations — supplier novations, licence transfers, employee entitlements, social media handovers — are tracked in Word documents with no audit trail and no shared accountability.",
        icon: "checklist",
      },
      {
        title: "Deals fall over",
        description:
          "Transactions collapse at critical moments because outstanding items were never visible to all parties simultaneously. The damage is done before anyone knows there's a problem.",
        icon: "star",
      },
    ],
  },
  phases: {
    eyebrow: "The platform",
    title: "One workspace.",
    titleAccent: "Every phase.",
    body: "Diligia follows the transaction from the moment a listing is created through to post-settlement obligations. Every party. Every document. Every action. In one place.",
    items: [
      {
        phase: "Phase 01",
        title: "Listings & Campaigns",
        description:
          "Create the listing, launch the campaign, manage expressions of interest, and track data room activity across all prospective buyers.",
      },
      {
        phase: "Phase 02",
        title: "Exclusive Due Diligence",
        description:
          "DD checklist, structured RFI tracker, data room with role-based access, and real-time visibility for every party simultaneously.",
      },
      {
        phase: "Phase 03",
        title: "Settlement",
        description:
          "Conditions precedent tracker, supplier contracts register, employee transition manager, and a structured completion checklist.",
      },
      {
        phase: "Phase 04",
        title: "Post-Settlement",
        description:
          "Settlement adjustment reconciliation, employee entitlement recalculations, book debts, and long-term obligation tracking.",
      },
    ],
  },
  bottomCta: {
    title: "Ready to run your first",
    titleAccent: "transaction on Diligia?",
    body: "We're working with a founding group of commercial property agencies to test the platform on live transactions before launch. No cost. No commitment. Just a better way to manage a deal.",
    cta: { label: "Apply to become a design partner", href: "#partner" },
  },
} as const;
