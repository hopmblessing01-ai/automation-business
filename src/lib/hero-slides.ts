export type HeroSlide = {
  src: string;
  alt: string;
  eyebrow: string;
  titleBefore: string;
  titleHighlight: string;
  description: string;
  statLeftLabel: string;
  statLeftValue: string;
  statRightLabel: string;
  statRightValue: string;
};

/** Swap `src` / copy for your own slides. Each slide shows unique hero text with animation. */
export const heroSlides: HeroSlide[] = [
  {
    src: "/images/hero-1.png",
    alt: "Team collaborating on strategy in a modern office",
    eyebrow: "Business systems & automation",
    titleBefore: "We design and automate business systems that",
    titleHighlight: "scale your operations",
    description:
      "From CRM setup to AI-powered workflows, we eliminate manual work and connect your tools into one efficient system.",
    statLeftLabel: "Delivery focus",
    statLeftValue: "End-to-end implementation",
    statRightLabel: "Built for",
    statRightValue: "SMBs & growing teams",
  },
  {
    src: "/images/hero5.png",
    alt: "Business discussion in a bright workspace",
    eyebrow: "Workflows & integrations",
    titleBefore: "Connect billing, support, marketing, and ops",
    titleHighlight: "without the copy-paste tax",
    description:
      "Production automations in n8n, Zapier, and Make—plus APIs when native connectors are not enough.",
    statLeftLabel: "What ships",
    statLeftValue: "Monitored flows & clear runbooks",
    statRightLabel: "Stack",
    statRightValue: "Slack, Stripe, Airtable, Workspace",
  },
  {
    src: "/images/hero-11.png",
    alt: "Professionals meeting with laptops and documents",
    eyebrow: "AI assistants",
    titleBefore: "Chat and voice experiences that qualify leads",
    titleHighlight: "and route work automatically",
    description:
      "Guardrailed assistants that update your CRM, open tickets, and escalate to humans when confidence drops.",
    statLeftLabel: "Outcomes",
    statLeftValue: "Faster triage & fewer dropped balls",
    statRightLabel: "Channels",
    statRightValue: "Web chat, SMS, voice, Slack",
  },
  {
    src: "/images/hero2.png",
    alt: "Consultant presenting a systems plan to a team",
    eyebrow: "Automation consulting",
    titleBefore: "Get expert guidance before you build",
    titleHighlight: "with a practical consulting roadmap",
    description:
      "We audit your current processes, identify fast wins, and define a phased implementation plan your team can execute confidently.",
    statLeftLabel: "Engagement",
    statLeftValue: "Strategy + execution guidance",
    statRightLabel: "Best for",
    statRightValue: "Teams planning automation projects",
  },
];
