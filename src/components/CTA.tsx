import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="glass-panel relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12">
            <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
            <div className="pointer-events-none absolute -top-28 left-1/2 size-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--violet)_18%,transparent),transparent_65%)] blur-3xl" />
            <div className="flow-line pointer-events-none absolute inset-x-0 top-0 h-px" />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
                Ready to Build a Better Production Environment?
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
                Tell us what you&apos;re building. We&apos;ll help you design, deploy and manage the
                infrastructure behind it.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_18px_40px_-18px_var(--primary)]"
                >
                  Talk to VXCTech
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-secondary/50 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary/40 hover:bg-secondary"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
