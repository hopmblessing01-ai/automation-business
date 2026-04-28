import { serviceSlugs, services, type ServiceSlug } from "@/lib/service-content";

export type ServiceCatalogEntry = {
  title: string;
  summary: string;
  href: string;
  image: string;
  imageAlt: string;
};

/** Listing rows for `/services` (implementation + consulting). */
export function getServiceCatalog(): ServiceCatalogEntry[] {
  const implementation: ServiceCatalogEntry[] = serviceSlugs.map(
    (slug: ServiceSlug) => {
      const s = services[slug];
      return {
        title: s.title,
        summary: s.summary,
        href: `/services/${slug}`,
        image: s.coverImage,
        imageAlt: s.coverImageAlt,
      };
    },
  );

  const consulting: ServiceCatalogEntry = {
    title: "Automation consulting",
    summary:
      "Discovery sessions, process mapping, and systems audits so you get a clear roadmap before any build. Optional advisory hours as you scale.",
    href: "/#contact",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Team collaborating on strategy in a workshop setting",
  };

  return [...implementation, consulting];
}
