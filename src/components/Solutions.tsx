import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const solutions = [
  {
    title: "Startups",
    desc: "Launch faster without spending your early resources building infrastructure.",
    features: [
      "Application deployment",
      "Managed hosting",
      "CI/CD",
      "Monitoring",
      "Infrastructure consulting",
    ],
    cta: "For Startups",
  },
  {
    title: "Growing Businesses",
    desc: "Replace manual deployments and unmanaged servers with professional infrastructure.",
    features: [
      "CI/CD automation",
      "Server management",
      "Load balancing",
      "Monitoring",
      "Cloud migration",
    ],
    cta: "Scale With Us",
    featured: true,
  },
  {
    title: "SaaS & Technology Companies",
    desc: "Build a reliable foundation for continuously evolving applications.",
    features: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "High availability",
      "Monitoring",
      "Production management",
    ],
    cta: "Build Your Infrastructure",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-24 border-y border-border bg-surface/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Solutions" title="Infrastructure That Fits Your Business" />

        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 90}>
              <article
                className={`glass-panel flex h-full flex-col rounded-2xl p-7 transition-all hover:-translate-y-1 hover:border-primary/40 ${
                  s.featured ? "glow-ring" : ""
                }`}
              >
                {s.featured && (
                  <span className="mb-4 inline-flex w-fit rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-primary uppercase">
                    Most requested
                  </span>
                )}
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
                  className="group mt-auto inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-5 py-3 pt-3 text-sm font-semibold transition-colors hover:border-primary/40 hover:bg-secondary"
                  style={{ marginTop: "2rem" }}
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
