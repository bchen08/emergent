import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section id="get-started" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-start gap-8 rounded-3xl bg-foreground px-8 py-14 text-background md:flex-row md:items-center md:justify-between md:px-14">
          <div className="max-w-lg">
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Ready to see what emerges?
            </h2>
            <p className="mt-3 leading-relaxed text-background/70">
              Start for free. No credit card required.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
          >
            Create your account
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
