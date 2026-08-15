import { Code2, UploadCloud, Server, Activity } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { n: "01", icon: Code2, title: "Build", desc: "Your developers build the application." },
  {
    n: "02",
    icon: UploadCloud,
    title: "Deploy",
    desc: "VXCTech automates the build and deployment process.",
  },
  {
    n: "03",
    icon: Server,
    title: "Host",
    desc: "Applications run on properly configured production infrastructure.",
  },
  {
    n: "04",
    icon: Activity,
    title: "Monitor",
    desc: "VXCTech monitors infrastructure and application health.",
  },
];

export function HowItWorks() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-border bg-surface/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="How it works" title="From Development to Production" />

        <ol className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 90}>
              <div className="glass-panel relative h-full rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                <span className="font-mono text-3xl font-bold text-primary/25">{s.n}</span>
                <s.icon className="mt-4 size-5 text-cyan" />
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <p className="mt-12 text-center text-lg font-medium">
            You focus on your product.{" "}
            <span className="text-gradient">We focus on keeping it running.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
