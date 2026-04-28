export type HeroSlide = {
  src: string;
  alt: string;
  eyebrow: string;
  titleBefore: string;
  titleHighlight: string;
  description: string;
};

/** Swap `src` / copy for your own slides. Each slide shows unique hero text with animation. */
export const heroSlides: HeroSlide[] = [
  {
    src: "/images/5.png",
    alt: "Team collaborating on strategy in a modern office",
    eyebrow: "Business systems & automation",
    titleBefore: "We design and automate business systems that",
    titleHighlight: "scale your operations",
    description:
      "From CRM setup to AI-powered workflows, we eliminate manual work and connect your tools into one efficient system.",
  },
  {
    src: "/images/4.png",
    alt: "Professionals meeting with laptops and documents",
    eyebrow: "AI assistants",
    titleBefore: "Chat and voice experiences that qualify leads",
    titleHighlight: "and route work automatically",
    description:
      "Guardrailed assistants that update your CRM, open tickets, and escalate to humans when confidence drops.",
  },
  {
    src: "/images/6.png",
    alt: "Consultant presenting a systems plan to a team",
    eyebrow: "Skills training",
    titleBefore: "Learn the automation skills your team needs",
    titleHighlight: "for workflows and project management",
    description:
      "Hands-on training sessions help your team master CRM setup, integrations, workflow automation, and project management with practical, real-world exercises.",
  },
];
