import {
  Code2,
  GitBranch,
  Workflow,
  Container,
  Server,
  AppWindow,
  Activity,
  Hammer,
  Rocket,
  Network,
  LineChart,
} from "lucide-react";

const pipeline = [
  { icon: Code2, label: "Developer", meta: "Commit & review" },
  { icon: GitBranch, label: "Git Repository", meta: "GitLab • GitHub" },
  { icon: Workflow, label: "CI/CD Pipeline", meta: "Jenkins • Actions" },
  { icon: Container, label: "Docker", meta: "Immutable image" },
  { icon: Server, label: "Production Infrastructure", meta: "Linux • Cloud" },
  { icon: AppWindow, label: "Application", meta: "Live traffic" },
  { icon: Activity, label: "Monitoring", meta: "Metrics & alerts" },
];

const cards = [
  { icon: Hammer, title: "BUILD", meta: "Maven / Node.js" },
  { icon: Rocket, title: "DEPLOY", meta: "Docker / Kubernetes" },
  { icon: Network, title: "SERVE", meta: "Nginx / HAProxy" },
  { icon: LineChart, title: "MONITOR", meta: "Prometheus / Grafana" },
];

export function HeroVisual() {
  return (
    <div className="glass-panel relative rounded-2xl p-4 shadow-[var(--shadow-card)] sm:p-6">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase sm:text-[11px]">
          Delivery pipeline
        </p>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground uppercase">
          <span className="size-1.5 animate-pulse rounded-full bg-cyan" />
          operational
        </span>
      </div>

      <ol className="mt-4 space-y-1.5">
        {pipeline.map((step, i) => (
          <li key={step.label}>
            <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-surface-2/50 p-3 transition-colors hover:border-primary/40">
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-background/70">
                <step.icon className="size-4 text-primary" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-[13px] font-semibold">{step.label}</p>
                <p className="truncate font-mono text-[11px] text-muted-foreground">{step.meta}</p>
              </div>
              <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                0{i + 1}
              </span>
            </div>
            {i < pipeline.length - 1 && (
              <div className="ml-[1.75rem] h-2.5 w-px bg-gradient-to-b from-primary/50 to-transparent" />
            )}
          </li>
        ))}
      </ol>

      <div className="flow-line mt-4 h-px w-full" />

      <ul className="mt-4 grid grid-cols-2 gap-2">
        {cards.map((c) => (
          <li
            key={c.title}
            className="rounded-xl border border-border/70 bg-background/50 p-3 transition-colors hover:border-cyan/40"
          >
            <c.icon className="size-4 text-cyan" />
            <p className="mt-2 font-mono text-[10px] tracking-[0.16em] text-foreground uppercase">
              {c.title}
            </p>
            <p className="mt-0.5 truncate text-[11px] text-muted-foreground">{c.meta}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
