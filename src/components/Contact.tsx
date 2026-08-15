import { useState, type FormEvent } from "react";
import { Mail, Globe, Check, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const topics = [
  "Website Hosting",
  "Application Hosting",
  "DevOps / CI/CD",
  "Cloud Infrastructure",
  "Server Management",
  "Monitoring",
  "Other",
];

const fieldClass =
  "w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-ring focus:outline-none";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border bg-surface/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Contact"
              title="Let's Build Your Infrastructure"
              subtitle="Tell us what you're running and what you need managed. We'll respond with a concrete infrastructure plan."
            />
            <Reveal delay={160}>
              <ul className="mt-8 space-y-3">
                <li>
                  <a
                    href="https://vxctech.com"
                    className="glass-panel flex items-center gap-3 rounded-xl px-5 py-4 text-sm transition-colors hover:border-primary/40"
                  >
                    <Globe className="size-4 text-primary" />
                    vxctech.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@vxctech.com"
                    className="glass-panel flex items-center gap-3 rounded-xl px-5 py-4 text-sm transition-colors hover:border-primary/40"
                  >
                    <Mail className="size-4 text-primary" />
                    hello@vxctech.com
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              {sent ? (
                <div className="flex min-h-72 flex-col items-center justify-center text-center">
                  <span className="grid size-12 place-items-center rounded-full bg-primary/15">
                    <Check className="size-6 text-primary" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">Thanks — message received</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    An infrastructure engineer at VXCTech will get back to you at the email you
                    provided.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-medium text-muted-foreground">
                      Name
                    </label>
                    <input id="name" name="name" required autoComplete="name" className={fieldClass} placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-2 block text-xs font-medium text-muted-foreground">
                      Company
                    </label>
                    <input id="company" name="company" autoComplete="organization" className={fieldClass} placeholder="Acme Inc." />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-medium text-muted-foreground">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@company.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-xs font-medium text-muted-foreground">
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} placeholder="Optional" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="topic" className="mb-2 block text-xs font-medium text-muted-foreground">
                      What do you need help with?
                    </label>
                    <select id="topic" name="topic" defaultValue={topics[0]} className={fieldClass}>
                      {topics.map((t) => (
                        <option key={t} value={t} className="bg-background">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-2 block text-xs font-medium text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className={fieldClass}
                      placeholder="Tell us about your stack, hosting setup and what you'd like managed."
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_18px_40px_-16px_var(--primary)] sm:col-span-2"
                  >
                    Talk to an Infrastructure Expert
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
