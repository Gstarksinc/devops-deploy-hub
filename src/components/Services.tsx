import { Workflow, Globe, Boxes, Cloud, Activity, ShieldCheck, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    n: "01",
    icon: Workflow,
    title: "DevOps & CI/CD",
    desc: "Automate your software delivery process.",
    tags: ["Jenkins", "GitLab", "GitHub Actions", "Maven"],
  },
  {
    n: "02",
    icon: Globe,
    title: "Website Hosting",
    desc: "Fast, secure and professionally managed hosting.",
    tags: ["Nginx", "Linux", "SSL", "DNS"],
  },
  {
    n: "03",
    icon: Boxes,
    title: "Application Hosting",
    desc: "Deploy and operate production applications.",
    tags: ["Java", "Spring Boot", "Node.js", "Tomcat", "Docker"],
  },
  {
    n: "04",
    icon: Cloud,
    title: "Cloud & Server Management",
    desc: "Manage infrastructure without building a dedicated infrastructure team.",
    tags: ["Linux", "Cloud", "Docker", "Kubernetes"],
  },
  {
    n: "05",
    icon: Activity,
    title: "Monitoring & Observability",
    desc: "Monitor applications, servers and infrastructure.",
    tags: ["Prometheus", "Grafana", "Logs", "Alerts"],
  },
  {
    n: "06",
    icon: ShieldCheck,
    title: "Infrastructure Security",
    desc: "Build a secure and controlled production environment.",
    tags: ["SSL/TLS", "Firewall", "Reverse Proxy", "Access Management"],
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Technology Services That Keep Your Business Running"
          subtitle="From your first deployment to production-scale infrastructure, VXCTech provides the technical foundation your business needs."
        />

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal as="li" key={s.n} delay={(i % 3) * 80}>
              <article className="group glass-panel flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
                <div className="flex items-start justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-secondary transition-colors group-hover:bg-primary/15">
                    <s.icon className="size-5 text-primary" />
                  </span>
                  <span className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-border bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-cyan"
                >
                  Learn More
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
