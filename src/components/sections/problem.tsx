import { AlertTriangle, Bot, Link2Off, Inbox } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  serviceCardBodyClass,
  serviceCardClass,
  serviceCardIconClass,
  serviceCardTitleClass,
} from "@/lib/service-card-styles";

const pains = [
  {
    title: "Manual repetitive tasks",
    body: "Your team re-enters the same data, chases updates, and burns hours on work software should handle.",
    icon: AlertTriangle,
  },
  {
    title: "Disconnected tools",
    body: "HubSpot doesn’t talk to finance. Slack isn’t tied to fulfillment. Every handoff is another delay.",
    icon: Link2Off,
  },
  {
    title: "Missed leads",
    body: "Slow follow-ups and leaky handoffs quietly cost revenue—especially when volume spikes.",
    icon: Inbox,
  },
  {
    title: "No chatbot or voice agent coverage",
    body: "When calls and chats are missed, leads go cold. AI chatbots and voice agents can qualify, answer, and route inquiries instantly.",
    icon: Bot,
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="scroll-mt-[7.5rem] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="fade-scale" durationMs={1000}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            The real cost of “busy”
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            When operations depend on heroics, growth becomes fragile
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            We help founders and operators replace fragile manual processes with
            dependable systems—so your business runs even when you step away.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {pains.map((item, i) => (
            <Reveal
              key={item.title}
              variant={i % 2 === 0 ? "slide-left" : "slide-right"}
              delayMs={i * 110}
              durationMs={1000}
            >
              <article className={serviceCardClass}>
                <div className={serviceCardIconClass}>
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className={`mt-5 text-lg font-semibold ${serviceCardTitleClass}`}>
                  {item.title}
                </h3>
                <p className={`mt-2 flex-1 ${serviceCardBodyClass}`}>{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
