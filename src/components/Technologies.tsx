import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const techs = [
  "Linux",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "GitLab",
  "GitHub",
  "Nginx",
  "HAProxy",
  "Prometheus",
  "Grafana",
  "Java",
  "Spring Boot",
  "Node.js",
  "MySQL",
  "Redis",
];

export function Technologies() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Technology" title="Built With the Tools Modern Infrastructure Demands" />
        <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
          {techs.map((t, i) => (
            <Reveal as="li" key={t} delay={i * 35}>
              <span className="inline-flex items-center rounded-full border border-border bg-surface-2/60 px-5 py-2.5 font-mono text-sm text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground">
                {t}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
