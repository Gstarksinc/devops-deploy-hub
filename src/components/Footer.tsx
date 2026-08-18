import { Hexagon } from "lucide-react";

const columns = [
  {
    title: "Services",
    href: "#services",
    links: [
      "DevOps",
      "Website Hosting",
      "Application Hosting",
      "Cloud Infrastructure",
      "Monitoring",
      "Security",
    ],
  },
  {
    title: "Solutions",
    href: "#solutions",
    links: ["Startups", "Growing Businesses", "SaaS Companies"],
  },
  {
    title: "Company",
    href: "#about",
    links: ["About", "Contact", "Privacy Policy", "Terms"],
  },
];

const targets: Record<string, string> = {
  About: "#about",
  Contact: "#contact",
  "Privacy Policy": "#contact",
  Terms: "#contact",
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-lg bg-secondary">
                <Hexagon className="size-5 text-primary" strokeWidth={2.2} />
              </span>
              <span className="font-display text-lg font-bold">
                VXC<span className="text-gradient">Tech</span>
              </span>
            </div>
            <p className="mt-4 font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
              DevOps • Cloud • Hosting • Infrastructure
            </p>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Deploy, host, monitor and manage production infrastructure with confidence.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href={targets[l] ?? col.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">© 2026 VXCTech. All rights reserved.</p>
          <a
            href="mailto:hello@vxctech.com"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            hello@vxctech.com
          </a>
        </div>
      </div>
    </footer>
  );
}
