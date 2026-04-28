import { Search, Map, PenTool, Cpu, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  serviceCardBodyClass,
  serviceCardClass,
  serviceCardProcessLayoutClass,
  serviceCardTitleClass,
} from "@/lib/service-card-styles";

const steps = [
  {
    title: "Understand your business",
    body: "We interview stakeholders, review tools, and align on outcomes—not vanity metrics.",
    icon: Search,
  },
  {
    title: "Map processes",
    body: "Current-state flows, exceptions, and ownership—so automation fits how work really happens.",
    icon: Map,
  },
  {
    title: "Design system architecture",
    body: "A pragmatic blueprint: triggers, data contracts, error handling, and rollback paths.",
    icon: PenTool,
  },
  {
    title: "Build & automate",
    body: "Iterative delivery with staging checks, logging, and documentation your team can follow.",
    icon: Cpu,
  },
  {
    title: "Deliver & train your team",
    body: "Handover sessions, playbooks, and optional ongoing support as you scale volume.",
    icon: GraduationCap,
  },
];

export function HowItWorksSection() {
  return (
    <section id="process" className="scroll-mt-[7.5rem] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="fade-scale" durationMs={1000}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            How it works
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            A disciplined process—without enterprise bloat
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[1.375rem] top-8 bottom-8 z-0 hidden w-0.5 rounded-full bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 sm:block"
          />
          <ol className="relative z-10 space-y-6">
            {steps.map((step, i) => (
              <Reveal
                key={step.title}
                variant={i % 2 === 0 ? "slide-left" : "slide-right"}
                delayMs={i * 85}
                durationMs={1000}
              >
                <li className={`${serviceCardClass} ${serviceCardProcessLayoutClass}`}>
                  <div className="relative flex shrink-0 items-center gap-4 sm:block sm:min-w-[4.5rem]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-xs font-bold text-white shadow-md ring-4 ring-slate-100 transition group-hover:scale-105 group-hover:ring-white/25 sm:absolute sm:left-3 sm:top-8">
                      {i + 1}
                    </div>
                    <span className="font-mono text-xs text-slate-500 transition group-hover:text-blue-50 sm:hidden">
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="relative flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:gap-8">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50/90 text-blue-700 ring-1 ring-blue-100/80 transition duration-300 group-hover:bg-white/15 group-hover:text-white group-hover:ring-white/25`}
                    >
                      <step.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <h3 className={`text-lg font-semibold ${serviceCardTitleClass}`}>
                        {step.title}
                      </h3>
                      <p className={`mt-2 max-w-2xl ${serviceCardBodyClass}`}>
                        {step.body}
                      </p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
