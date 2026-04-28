export type CaseStudy = {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "CRM Cleanup + Lead Routing",
    industry: "B2B services",
    challenge:
      "Leads were delayed because duplicate records and unclear ownership slowed first response.",
    solution:
      "We standardized lifecycle stages, deduplicated records, and automated assignment by region and segment.",
    outcome: "Faster response times and cleaner forecasting",
  },
  {
    title: "Ops Workflow Automation",
    industry: "Field operations",
    challenge:
      "Sales, onboarding, and delivery handoffs depended on manual status updates and follow-up messages.",
    solution:
      "We connected CRM updates to task creation, internal notifications, and client onboarding milestones.",
    outcome: "Fewer dropped handoffs across teams",
  },
  {
    title: "Unified Reporting Layer",
    industry: "SaaS support and success",
    challenge:
      "Leadership reporting took hours weekly because KPI data lived in separate systems.",
    solution:
      "We implemented a shared metric layer with scheduled syncs and role-specific dashboard views.",
    outcome: "Clear visibility into bottlenecks",
  },
  {
    title: "Invoice-to-Fulfillment Sync",
    industry: "Professional services",
    challenge:
      "Project kickoff lagged behind payment confirmation due to disconnected finance and delivery workflows.",
    solution:
      "We wired payment events to automated project setup, task routing, and delivery alerts.",
    outcome: "Shorter time from payment to project kickoff",
  },
];
