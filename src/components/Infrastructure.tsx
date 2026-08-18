import { Users, Globe, Network, AppWindow, Container, Database, LineChart } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const layers = [
  { icon: Users, layer: "Users", tech: "Web • Mobile • API clients" },
  { icon: Globe, layer: "DNS", tech: "Domain routing • TLS records" },
  { icon: Network, layer: "Load Balancer / Reverse Proxy", tech: "Nginx • HAProxy" },
  { icon: AppWindow, layer: "Application Layer", tech: "Spring Boot • Node.js • Tomcat" },
  { icon: Container, layer: "Containers & Orchestration", tech: "Docker • Kubernetes" },
  { icon: Database, layer: "Database / Cache", tech: "MySQL • Redis" },
  { icon: LineChart, layer: "Monitoring & Logging", tech: "Prometheus • Grafana" },
];

const status = [
  { label: "Production", value: "Operational" },
  { label: "Monitoring", value: "Active" },
  { label: "Deployment", value: "Automated" },
];

export function Infrastructure() {
  return (
    <section
      id="infrastructure"
      className="relative scroll-mt-24 overflow-hidden border-y border-border bg-surface/30 py-24 lg:py-32"
    >
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Architecture"
          title="A Better Way to Run Production"
          subtitle="Every layer configured, automated and observable — from the first request to the metrics behind it."
        />

        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
          {status.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 70}>
              <div className="flex items-center justify-between rounded-xl border border-border bg-background/50 px-4 py-3">
                <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                  {s.label}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium">
                  <span className="size-1.5 rounded-full bg-cyan" />
                  {s.value}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>

        <ol className="mx-auto mt-10 max-w-3xl">
          {layers.map((l, i) => (
            <Reveal as="li" key={l.layer} delay={i * 60}>
              <div className="glass-panel flex items-center gap-4 rounded-xl px-4 py-4 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-glow)] sm:px-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-background/70">
                  <l.icon className="size-4.5 text-primary" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">{l.layer}</p>
                  <p className="truncate font-mono text-xs text-muted-foreground">{l.tech}</p>
                </div>
                <span className="ml-auto hidden font-mono text-[10px] tracking-widest text-muted-foreground uppercase sm:block">
                  layer {i + 1}
                </span>
              </div>
              {i < layers.length - 1 && (
                <div className="mx-auto h-5 w-px bg-gradient-to-b from-cyan/60 to-transparent" />
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
