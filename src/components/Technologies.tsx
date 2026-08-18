import { Workflow, Container, Server, LineChart, Boxes, Database } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const groups = [
  { icon: Workflow, category: "DevOps", items: ["Jenkins", "GitLab", "GitHub"] },
  { icon: Container, category: "Containers", items: ["Docker", "Kubernetes"] },
  { icon: Server, category: "Infrastructure", items: ["Linux", "Nginx", "HAProxy"] },
  { icon: LineChart, category: "Monitoring", items: ["Prometheus", "Grafana"] },
  { icon: Boxes, category: "Application", items: ["Java", "Spring Boot", "Node.js", "Tomcat"] },
  { icon: Database, category: "Database", items: ["MySQL", "Redis"] },
];

export function Technologies() {
  return (
    <section id="technology" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Technology" title="Built Around Modern Infrastructure" />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal as="li" key={g.category} delay={(i % 3) * 70}>
              <div className="h-full rounded-2xl border border-border bg-surface-2/40 p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40">
                <div className="flex items-center gap-2.5">
                  <g.icon className="size-4 text-muted-foreground" />
                  <h3 className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                    {g.category}
                  </h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <li
                      key={t}
                      className="rounded-lg border border-border bg-background/50 px-3 py-1.5 text-sm text-foreground/85"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
