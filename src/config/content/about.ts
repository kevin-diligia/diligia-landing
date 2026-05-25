export const aboutContent = {
  metadata: {
    title: "About — Diligia",
    description:
      "Diligia is Australia's first Transaction Management Platform purpose-built for commercial property. Built by someone who lived the problem.",
  },
  hero: {
    eyebrow: "About Diligia",
    title: "Built by someone who lived the problem.",
    intro:
      "Diligia wasn't conceived in a boardroom. It was conceived in the field — after a decade of leading transactions from every side of the table and asking the same question every time: why is this still so hard?",
  },
  founder: {
    initials: "SS",
    name: "Sean Saliba",
    role: "Founder & CEO",
    bio: "A decade on every side of commercial property — as vendor, buyer, agent, and operator. Diligia exists because someone who understood the problem deeply finally decided to solve it properly.",
  },
  platform: {
    eyebrow: "The platform",
    title: "One workspace for the entire transaction lifecycle.",
    body: "Diligia is a Transaction Management Platform purpose-built for Australian commercial property. It replaces the email chains, Word documents, and Excel spreadsheets that currently manage every deal — with a structured, multi-party workspace that every participant uses simultaneously.",
    layers: [
      {
        num: "Layer 01",
        title: "Client Base",
        description:
          "A purpose-built CRM for commercial property — vendors, buyers, solicitors, accountants, and financiers in one structured database that feeds directly into every transaction.",
        features: [
          "Contact profiles with asset class preferences and budget ranges",
          "Linked transaction history across every deal",
          "Last contacted tracking and activity log",
        ],
      },
      {
        num: "Layer 02",
        title: "Listings & Campaigns",
        description:
          "Campaign workspace from listing creation through to Heads of Agreement. EOI tracker, data room activity, and buyer engagement — all in one place.",
        features: [
          "Expression of interest tracking and comparison",
          "Data room with role-based access controls",
          "One-click conversion from campaign to transaction",
        ],
      },
      {
        num: "Layer 03 — Part A",
        title: "Due Diligence",
        description:
          "Structured DD checklist per property and transaction type. RFI tracker that replaces email. Every question, answer, and document logged, timestamped, and permanently auditable.",
        features: [
          "Pre-built checklists per asset class and transaction type",
          "RFI submission, assignment, and resolution tracking",
          "Phase-aware permissions — every party sees what they should",
        ],
      },
      {
        num: "Layer 03 — Part B",
        title: "Settlement & Post-Settlement",
        description:
          "The most significant differentiator. Conditions precedent tracker, supplier contracts register, employee transition manager, and post-settlement obligation tracking — in one structured module.",
        features: [
          "Going concern completion checklist — licences, social media, staff",
          "Supplier contract novation register",
          "Settlement adjustment and book debts tracking",
        ],
      },
    ],
  },
  values: {
    eyebrow: "What we believe",
    title: "The values behind the platform.",
    body: "Built on principles that come directly from the experience of doing deals — not from a product roadmap.",
    items: [
      {
        num: "01",
        title: "Transparency wins deals",
        description:
          "Every party deserves a real-time view of where a transaction stands. Hidden information kills deals. Clarity closes them.",
      },
      {
        num: "02",
        title: "Audit trails protect everyone",
        description:
          "What was disclosed, when, and by whom should never be in dispute. A permanent, immutable record is the foundation of a defensible transaction.",
      },
      {
        num: "03",
        title: "Structure reduces chaos",
        description:
          "A transaction managed in email is a transaction waiting to fail. The right structure, applied at the right time, turns complexity into clarity.",
      },
      {
        num: "04",
        title: "Simple enough for every party",
        description:
          "Agents, solicitors, accountants, and international buyers all use the same platform. If it's too complex for any of them, it doesn't work.",
      },
      {
        num: "05",
        title: "Built for Australia first",
        description:
          "Australian property law, Australian transaction norms, Australian regulatory requirements. Global ambition, local precision.",
      },
      {
        num: "06",
        title: "Data is the long game",
        description:
          "Every transaction generates intelligence the market has never had. DD timelines, checklist patterns, deal signals — a data asset that grows with every deal on the platform.",
      },
    ],
  },
  cta: {
    title: "Ready to run a transaction on Diligia?",
    body: "We're onboarding a select group of commercial property agencies as design partners — one free transaction to shape the platform before it launches.",
    buttonLabel: "Get in touch →",
    href: "/contact",
  },
} as const;
