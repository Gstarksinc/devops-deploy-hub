import { useState, type FormEvent } from "react";
import { Mail, Globe, Check, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const services = [
  "DevOps / CI/CD",
  "Website Hosting",
  "Application Hosting",
  "Cloud Infrastructure",
  "Server Management",
  "Monitoring",
  "Security",
  "Other",
];

const fieldClass =
  "w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-ring focus:outline-none";

type Errors = Partial<Record<"name" | "company" | "email" | "phone" | "message", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const phonePattern = /^[+()\d\s-]{7,20}$/;

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const next: Errors = {};
    if (get("name").length < 2) next.name = "Please enter your full name.";
    if (get("company").length < 2) next.company = "Please enter your company name.";
    if (!emailPattern.test(get("email"))) next.email = "Enter a valid work email address.";
    const phone = get("phone");
    if (phone && !phonePattern.test(phone)) next.phone = "Enter a valid phone number.";
    if (get("message").length < 20) next.message = "Please add at least 20 characters.";

    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border bg-surface/30 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Contact"
              title="Let's Talk Infrastructure"
              subtitle="Whether you're launching a new application, migrating an existing system or looking for someone to manage your infrastructure, we'd like to hear from you."
            />
            <Reveal delay={160}>
              <ul className="mt-8 space-y-3">
                <li>
                  <a
                    href="mailto:hello@vxctech.com"
                    className="glass-panel flex items-center gap-3 rounded-xl px-5 py-4 text-sm transition-colors hover:border-primary/40"
                  >
                    <Mail className="size-4 text-primary" />
                    hello@vxctech.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://vxctech.com"
                    className="glass-panel flex items-center gap-3 rounded-xl px-5 py-4 text-sm transition-colors hover:border-primary/40"
                  >
                    <Globe className="size-4 text-primary" />
                    vxctech.com
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center py-14 text-center">
                  <span className="grid size-12 place-items-center rounded-full bg-primary/15">
                    <Check className="size-6 text-primary" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">Inquiry received</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Thanks for reaching out. The VXCTech team will get back to you at the email
                    address you provided.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Name" error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      className={fieldClass}
                      placeholder="Your name"
                    />
                  </Field>
                  <Field id="company" label="Company" error={errors.company}>
                    <input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      className={fieldClass}
                      placeholder="Company name"
                    />
                  </Field>
                  <Field id="email" label="Email" error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={fieldClass}
                      placeholder="you@company.com"
                    />
                  </Field>
                  <Field id="phone" label="Phone" error={errors.phone}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className={fieldClass}
                      placeholder="Optional"
                    />
                  </Field>
                  <Field id="service" label="Service Required" className="sm:col-span-2">
                    <select
                      id="service"
                      name="service"
                      defaultValue={services[0]}
                      className={fieldClass}
                    >
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-background">
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field
                    id="message"
                    label="Message"
                    error={errors.message}
                    className="sm:col-span-2"
                  >
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={fieldClass}
                      placeholder="Tell us about your stack, hosting setup and what you'd like managed."
                    />
                  </Field>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_18px_40px_-18px_var(--primary)] sm:col-span-2"
                  >
                    Send Inquiry
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

function Field({
  id,
  label,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-xs font-medium text-muted-foreground">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
