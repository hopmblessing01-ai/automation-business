export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
};

/** Placeholder team - swap names, roles, and images for your real roster. */
export const teamMembers: TeamMember[] = [
  {
    name: "Jordan Ellis",
    role: "Founder & Lead Systems Architect",
    bio: "Former ops lead turned integrator - focuses on CRM, revenue systems, and pragmatic AI guardrails.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait of Jordan Ellis",
  },
  {
    name: "Sam Rivera",
    role: "Senior Automation Engineer",
    bio: "Ships production n8n and API middleware with observability your on-call will actually read.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait of Sam Rivera",
  },
  {
    name: "Priya Shah",
    role: "Solutions Consultant",
    bio: "Runs discovery workshops and process maps so build phases start with shared language and metrics.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait of Priya Shah",
  },
  {
    name: "Morgan Chen",
    role: "Integrations & Data",
    bio: "Connects billing, support, and product data with contracts, retries, and documentation for the next engineer.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait of Morgan Chen",
  },
];
