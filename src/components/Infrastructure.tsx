import { GitBranch, Workflow, Hammer, Container, Boxes, Network, Activity } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const layers = [
  { icon: GitBranch, layer: "Source Control", tech: "GitLab • GitHub" },
  { icon: Workflow, layer: "CI/CD", tech: "Jenkins • GitLab CI/CD" },
  { icon: Hammer, layer: "Build", tech: "Maven • Node.js" },
  { icon: Container, layer: "Containers", tech: "Docker" },
  { icon: Boxes, layer: "Orchestration", tech: "Kubernetes" },
  { icon: Network, layer: "Traffic", tech: "Nginx • HAProxy" },
  { icon: Activity, layer: "Monitoring", tech: "Prometheus • Grafana" },
];

export function Infrastructure() {
  return (
    <section
      id="infrastructure"
      className="relative scroll-mt-24 overflow-hidden border-y border-border bg-surface/30 py-24 lg:py-32"
    >
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Architecture"
          title="Your Infrastructure. Properly Engineered."
          subtitle="Every layer configured, automated and observable — from the first commit to live production traffic."
        />

        <ol className="mx-auto mt-14 max-w-3xl">
          {layers.map((l, i) => (
            <Reveal as="li" key={l.layer} delay={i * 70}>
              <div className="glass-panel flex items-center gap-4 rounded-xl px-5 py-4 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-background/70">
                  <l.icon className="size-4.5 text-primary" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">{l.layer}</p>
                  <p className="font-mono text-xs text-muted-foreground">{l.tech}</p>
                </div>
                <span className="ml-auto font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  layer {i + 1}
                </span>
              </div>
              {i < layers.length - 1 && (
                <div className="mx-auto h-6 w-px bg-gradient-to-b from-cyan/60 to-transparent" />
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
