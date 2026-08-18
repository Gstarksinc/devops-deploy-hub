import { ClipboardList, Hammer, UploadCloud, Activity, Settings2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Plan",
    desc: "Understand your application and infrastructure requirements.",
  },
  {
    n: "02",
    icon: Hammer,
    title: "Build",
    desc: "Configure environments, deployment pipelines and infrastructure.",
  },
  {
    n: "03",
    icon: UploadCloud,
    title: "Deploy",
    desc: "Automate and release applications into production.",
  },
  {
    n: "04",
    icon: Activity,
    title: "Monitor",
    desc: "Monitor infrastructure, applications and system health.",
  },
  {
    n: "05",
    icon: Settings2,
    title: "Manage",
    desc: "Continuously maintain, optimize and improve your environment.",
  },
];

export function HowItWorks() {
  return (
    <section id="process" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="How we work" title="From Code to Production" />

        <div className="relative mt-14">
          <div className="pointer-events-none absolute inset-x-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 90}>
                <div className="glass-panel relative h-full rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex items-center justify-between">
                    <span className="grid size-10 place-items-center rounded-lg bg-secondary">
                      <s.icon className="size-4.5 text-primary" />
                    </span>
                    <span className="font-mono text-2xl font-bold text-primary/20">{s.n}</span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{s.desc}</p>
                  <span className="mt-5 block h-px w-full overflow-hidden rounded bg-border">
                    <span
                      className="block h-px bg-gradient-to-r from-primary to-cyan"
                      style={{ width: `${((i + 1) / steps.length) * 100}%` }}
                    />
                  </span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
