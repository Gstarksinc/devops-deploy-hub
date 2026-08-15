import { Cpu, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const values = [
  {
    icon: Cpu,
    title: "Engineering First",
    desc: "We approach hosting and deployment as an engineering problem — not simply a server rental.",
  },
  {
    icon: Zap,
    title: "Automation",
    desc: "Reduce manual work through automated builds, deployments and infrastructure processes.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    desc: "Production systems need monitoring, backups, security and predictable deployments.",
  },
  {
    icon: TrendingUp,
    title: "Scalable",
    desc: "Start small and evolve your infrastructure as your application and customer base grow.",
  },
];

export function WhyVxctech() {
  return (
    <section id="why" className="scroll-mt-24 border-y border-border bg-surface/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Why VXCTech" title="Why Businesses Choose VXCTech" />
        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 80}>
              <article className="glass-panel h-full rounded-2xl p-8 transition-all hover:-translate-y-1 hover:border-primary/40">
                <span className="grid size-12 place-items-center rounded-xl bg-secondary">
                  <v.icon className="size-5.5 text-primary" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{v.desc}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
