import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { caseStudies } from "@/lib/case-studies-content";
import {
  serviceCardBodyClass,
  serviceCardClass,
  serviceCardTitleClass,
} from "@/lib/service-card-styles";

export function CaseStudiesSection() {
  return (
    <section
      id="results"
      className="scroll-mt-[7.5rem] border-y border-slate-200/80 bg-gradient-to-b from-blue-50/70 via-white to-blue-50/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="slide-right" durationMs={1000}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            Selected outcomes
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Systems delivered for growing teams
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Practical delivery focused on reliability, adoption, and measurable
            business impact.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {caseStudies.slice(0, 3).map((item, i) => (
            <Reveal
              key={item.title}
              variant={i % 2 === 0 ? "slide-left" : "slide-right"}
              delayMs={i * 100}
              durationMs={950}
            >
              <article
                className={`${serviceCardClass} h-full border-slate-200/80 bg-white/85 shadow-[0_16px_40px_-22px_rgba(15,23,42,0.35)] backdrop-blur-sm`}
              >
                <h3 className={`text-lg font-semibold ${serviceCardTitleClass}`}>
                  {item.title}
                </h3>
                <p className={`mt-3 ${serviceCardBodyClass}`}>{item.solution}</p>
                <p className="mt-4 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 transition group-hover:bg-white/10 group-hover:text-blue-100">
                  {item.outcome}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade-up" delayMs={220} durationMs={900}>
          <div className="mt-10">
            <Link
              href="/case-studies"
              className="btn-shine inline-flex h-12 items-center justify-center rounded-lg bg-blue-700 px-8 text-sm font-semibold text-white shadow-md transition hover:bg-blue-800"
            >
              View full case studies
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
