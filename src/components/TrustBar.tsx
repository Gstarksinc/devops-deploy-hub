import { Rocket, Server, Activity, ShieldCheck, Network } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Rocket,
    title: "Reliable Deployment",
    desc: "Automated and repeatable deployment processes.",
  },
  {
    icon: Server,
    title: "Managed Hosting",
    desc: "Professional website and application hosting.",
  },
  {
    icon: Activity,
    title: "Production Monitoring",
    desc: "Know the health of your infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    desc: "Secure configuration, SSL and controlled access.",
  },
  {
    icon: Network,
    title: "Scalable Infrastructure",
    desc: "Infrastructure that grows with your business.",
  },
];

export function TrustBar() {
  return (
    <section aria-labelledby="trust-heading" className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
        <Reveal>
          <h2 id="trust-heading" className="text-center text-xl font-semibold sm:text-2xl">
            Infrastructure Built for Real Businesses
          </h2>
        </Reveal>
        <ul className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 60}>
              <div className="h-full rounded-xl border border-border bg-surface-2/40 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-2/70">
                <item.icon className="size-5 text-cyan" />
                <h3 className="mt-3.5 text-sm font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
