import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { toolCardRowClass, toolCardRowLabelClass } from "@/lib/service-card-styles";

const tools = [
  { name: "HubSpot", slug: "hubspot", color: "ff7a59" },
  { name: "Zoho CRM", slug: "zoho", color: "e42527" },
  { name: "n8n", slug: "n8n", color: "ea4b71" },
  { name: "Zapier", slug: "zapier", color: "ff4a00" },
  { name: "Make", slug: "make", color: "6d00cc" },
  { name: "Power Automate", slug: "microsoftpowerautomate", color: "0066ff" },
  { name: "Pipedrive", slug: "pipedrive", color: "171a31" },
  { name: "Salesforce", slug: "salesforce", color: "00a1e0" },
  { name: "Airtable", slug: "airtable", color: "18bfff" },
  { name: "Notion", slug: "notion", color: "000000" },
  { name: "Monday", slug: "mondaydotcom", color: "ff3d57" },
  { name: "ClickUp", slug: "clickup", color: "7b68ee" },
  { name: "Twilio", slug: "twilio", color: "f22f46" },
  { name: "Vapi", slug: "vapi", color: "5b6cff" },
  { name: "Retell", slug: "retell", color: "2563eb" },
  { name: "Meta", slug: "meta", color: "0866ff" },
];

export function ToolsSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="slide-left" durationMs={1000}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            Stack-agnostic
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Tools & platforms we implement daily
          </h2>
          <p className="mt-4 max-w-2xl text-base text-slate-600">
            We meet you where you operate, then connect CRM, automation, project
            management, communication, and finance into one reliable system.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {tools.map((t, i) => (
            <Reveal
              key={t.slug}
              variant={i % 2 === 0 ? "slide-left" : "slide-right"}
              delayMs={i * 75}
              durationMs={900}
            >
              <div className={toolCardRowClass}>
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-white p-1.5 ring-1 ring-slate-200">
                  <Image
                    src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
                    alt=""
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <span className={`min-w-0 flex-1 ${toolCardRowLabelClass}`}>
                  {t.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
