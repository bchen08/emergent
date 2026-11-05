import { Blocks, Gauge, Network, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Blocks,
    title: "Composable by default",
    description: "Snap together small, focused pieces that each do one thing well.",
  },
  {
    icon: Network,
    title: "Connected everywhere",
    description: "Components share state and events without brittle wiring.",
  },
  {
    icon: Gauge,
    title: "Fast at any scale",
    description: "Edge-ready performance that stays quick as your product grows.",
  },
  {
    icon: ShieldCheck,
    title: "Secure foundations",
    description: "Sensible defaults and guardrails built in from day one.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-16 border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
            Features
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Everything you need, nothing you don&apos;t.
          </h2>
        </div>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {features.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex flex-col gap-4 bg-surface p-8">
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-medium">{title}</h3>
                <p className="mt-1.5 leading-relaxed text-muted">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
