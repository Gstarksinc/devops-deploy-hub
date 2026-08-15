import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const solutions = [
  {
    title: "Startups",
    desc: "Launch your product without building an infrastructure team from day one.",
    features: [
      "Cost-efficient infrastructure",
      "CI/CD",
      "Application hosting",
      "Monitoring",
      "Scalable architecture",
    ],
    cta: "Build Your Startup",
  },
  {
    title: "Growing Businesses",
    desc: "Upgrade from manual deployments and unmanaged servers to professional infrastructure.",
    features: [
      "Automated deployments",
      "Cloud migration",
      "Load balancing",
      "Monitoring",
      "Infrastructure management",
    ],
    cta: "Scale Your Infrastructure",
    featured: true,
  },
  {
    title: "SaaS Companies",
    desc: "Reliable infrastructure for applications that need continuous deployment and scalability.",
    features: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "High availability",
      "Observability",
      "Production management",
    ],
    cta: "Build Your SaaS",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Solutions" title="Infrastructure for Every Stage of Your Business" />

        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 90}>
              <article
                className={`glass-panel flex h-full flex-col rounded-2xl p-7 transition-all hover:-translate-y-1 hover:border-primary/40 ${
                  s.featured ? "glow-ring" : ""
                }`}
              >
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-cyan" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="group mt-8 inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  {s.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
