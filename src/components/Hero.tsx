import {
  GitBranch,
  Workflow,
  Container,
  Cloud,
  AppWindow,
  Activity,
  ArrowRight,
  ShieldCheck,
  Gauge,
  Server,
  Rocket,
} from "lucide-react";
import { Reveal } from "./Reveal";

const flow = [
  { icon: GitBranch, label: "Git", meta: "Source control" },
  { icon: Workflow, label: "CI/CD", meta: "Automated pipeline" },
  { icon: Container, label: "Docker", meta: "Containerized build" },
  { icon: Cloud, label: "Cloud / Server", meta: "Production infra" },
  { icon: AppWindow, label: "Application", meta: "Live traffic" },
  { icon: Activity, label: "Monitoring", meta: "Metrics & alerts" },
];

const trust = [
  { icon: Rocket, label: "Deployment Automation" },
  { icon: Gauge, label: "24/7 Infrastructure Monitoring" },
  { icon: Server, label: "Cloud & Server Management" },
  { icon: ShieldCheck, label: "Secure Application Hosting" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_28%,transparent),transparent_65%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                DevOps • Cloud • Hosting • Infrastructure
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl leading-[1.08] font-bold sm:text-5xl lg:text-6xl">
                From Code to Production.{" "}
                <span className="text-gradient">We Handle the Infrastructure.</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                VXCTech helps businesses deploy, host, monitor and manage websites, applications
                and cloud infrastructure — so your team can focus on building your product.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_18px_40px_-16px_var(--primary)]"
                >
                  Get Started
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  Explore Services
                </a>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {trust.map((t) => (
                  <li key={t.label} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <t.icon className="size-4 shrink-0 text-primary" />
                    {t.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="glass-panel relative rounded-2xl p-5 shadow-[var(--shadow-card)] sm:p-7">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                  Delivery pipeline
                </p>
                <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <span className="size-1.5 animate-pulse rounded-full bg-cyan" />
                  healthy
                </span>
              </div>

              <ol className="mt-5 space-y-2.5">
                {flow.map((step, i) => (
                  <li key={step.label}>
                    <div className="flex items-center gap-3 rounded-xl border border-border bg-surface-2/60 p-3.5 transition-colors hover:border-primary/40">
                      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-background/70">
                        <step.icon className="size-4.5 text-primary" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold">{step.label}</p>
                        <p className="truncate text-xs text-muted-foreground">{step.meta}</p>
                      </div>
                      <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                        0{i + 1}
                      </span>
                    </div>
                    {i < flow.length - 1 && (
                      <div className="ml-[2.05rem] h-4 w-px bg-gradient-to-b from-primary/50 to-transparent" />
                    )}
                  </li>
                ))}
              </ol>

              <div className="flow-line mt-5 h-px w-full" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
