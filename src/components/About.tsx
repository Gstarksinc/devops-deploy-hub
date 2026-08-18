import { Workflow, Server, Activity } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const pillars = [
  { icon: Workflow, title: "DevOps", desc: "Automation & CI/CD" },
  { icon: Server, title: "Infrastructure", desc: "Cloud & Server Management" },
  { icon: Activity, title: "Operations", desc: "Monitoring & Reliability" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-border bg-surface/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About VXCTech"
              title="Technology Infrastructure Without the Complexity"
              subtitle="VXCTech helps businesses simplify the technology behind their products. We combine DevOps practices, cloud infrastructure, hosting and automation to create reliable environments where applications can be deployed and operated with confidence."
            />
          </div>

          <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80}>
                <div className="glass-panel flex h-full items-center gap-4 rounded-2xl p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary">
                    <p.icon className="size-5 text-primary" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
