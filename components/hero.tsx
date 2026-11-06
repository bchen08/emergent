import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="dot-grid absolute inset-0" />
      <div aria-hidden="true" className="hero-glow absolute inset-0" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-24 text-center md:pt-32">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
          <span className="size-1.5 rounded-full bg-accent" />
          Now in public beta
        </span>
        <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
          Simple parts. <span className="text-accent">Remarkable</span> systems.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
          Emergent helps teams compose small, reliable building blocks into
          products that grow on their own — without the complexity.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#get-started"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Start building
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium transition-colors hover:bg-background"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
