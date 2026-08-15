import { Workflow, Globe, Boxes, Cloud, Activity, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: Workflow,
    title: "DevOps & CI/CD",
    desc: "Automate builds, testing and deployments with reliable CI/CD pipelines.",
    items: [
      "Jenkins",
      "GitLab CI/CD",
      "GitHub Actions",
      "Automated deployments",
      "Build automation",
      "Release management",
    ],
  },
  {
    icon: Globe,
    title: "Website Hosting",
    desc: "Fast, secure and professionally managed hosting for business websites and web applications.",
    items: [
      "Linux hosting",
      "Nginx",
      "SSL",
      "Domain configuration",
      "DNS management",
      "Performance optimization",
    ],
  },
  {
    icon: Boxes,
    title: "Application Hosting",
    desc: "Deploy and manage production applications with reliable infrastructure and deployment processes.",
    items: ["Java / Spring Boot", "Node.js", "Angular", "React", "Docker", "Tomcat"],
  },
  {
    icon: Cloud,
    title: "Cloud & Server Management",
    desc: "Let VXCTech manage the infrastructure behind your applications.",
    items: [
      "Linux servers",
      "Cloud infrastructure",
      "Docker",
      "Kubernetes",
      "Load balancing",
      "Server configuration",
    ],
  },
  {
    icon: Activity,
    title: "Monitoring & Reliability",
    desc: "Know what's happening in your infrastructure before your customers do.",
    items: [
      "Prometheus",
      "Grafana",
      "Application monitoring",
      "Server monitoring",
      "Logs & alerts",
      "Performance monitoring",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security & Infrastructure",
    desc: "Build a safer production environment with properly configured infrastructure.",
    items: [
      "SSL/TLS",
      "Reverse proxies",
      "Firewall configuration",
      "Secure deployments",
      "Backup strategy",
      "Access management",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Everything You Need to Run Production"
          subtitle="From deployment pipelines to production infrastructure, VXCTech provides the technology and operational support required to keep your applications running."
        />

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 3) * 80}>
              <article className="group glass-panel h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
                <span className="grid size-11 place-items-center rounded-xl bg-secondary transition-colors group-hover:bg-primary/15">
                  <s.icon className="size-5 text-primary" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-surface-2/60 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
