import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { HeroVisual } from "./HeroVisual";

const trust = [
  "Production Ready",
  "Automated Deployment",
  "Infrastructure Monitoring",
  "Secure Hosting",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-48 left-1/2 size-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_65%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.22em] text-muted-foreground uppercase sm:text-[11px]">
                DevOps • Cloud • Managed Infrastructure
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-[2.15rem] leading-[1.06] font-bold tracking-tight sm:text-5xl lg:text-[3.65rem]">
                Build Your Product.
                <br />
                We&apos;ll Run the <span className="text-gradient">Infrastructure.</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                From websites and APIs to production applications and cloud infrastructure, VXCTech
                helps businesses deploy, host, monitor and manage technology with confidence.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_18px_40px_-18px_var(--primary)]"
                >
                  Get Started
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/40 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary/40 hover:bg-secondary"
                >
                  View Services
                </a>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <p className="mt-7 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                Deploy faster • Host reliably • Monitor continuously
              </p>
            </Reveal>

            <Reveal delay={300}>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {trust.map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Check className="size-4 shrink-0 text-cyan" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
