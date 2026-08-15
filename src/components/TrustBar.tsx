import { Rocket, Server, Activity, ShieldCheck, Network } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Rocket, label: "Automated Deployments" },
  { icon: Server, label: "Production Hosting" },
  { icon: Activity, label: "Infrastructure Monitoring" },
  { icon: ShieldCheck, label: "Security & Backups" },
  { icon: Network, label: "Scalable Architecture" },
];

export function TrustBar() {
  return (
    <section aria-label="Capabilities" className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <Reveal>
          <p className="text-center font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Built for teams that need reliable infrastructure
          </p>
        </Reveal>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((item, i) => (
            <Reveal as="li" key={item.label} delay={i * 60}>
              <div className="flex h-full flex-col items-center gap-2.5 rounded-xl border border-border bg-surface-2/40 px-4 py-5 text-center transition-all hover:-translate-y-0.5 hover:border-primary/40">
                <item.icon className="size-5 text-cyan" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
