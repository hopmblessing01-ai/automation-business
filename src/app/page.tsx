import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AboutTeaserSection } from "@/components/sections/about-teaser";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { ProblemSection } from "@/components/sections/problem";
import { ServicesTeaserSection } from "@/components/sections/services-teaser";
import { ToolsSection } from "@/components/sections/tools";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSection />
        <ServicesTeaserSection />
        <HowItWorksSection />
        <CaseStudiesSection />
        <ToolsSection />
        <AboutTeaserSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
