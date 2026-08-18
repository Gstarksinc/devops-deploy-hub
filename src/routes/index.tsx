import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { Solutions } from "@/components/Solutions";
import { HowItWorks } from "@/components/HowItWorks";
import { Technologies } from "@/components/Technologies";
import { Infrastructure } from "@/components/Infrastructure";
import { WhyVxctech } from "@/components/WhyVxctech";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const title = "VXCTech | DevOps, Cloud & Managed Hosting";
const description =
  "VXCTech provides DevOps, cloud infrastructure, website hosting, application hosting, deployment automation and infrastructure management for modern businesses.";
const url = "https://vxctech.com/";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "VXCTech",
          alternateName: "VCX Technology",
          url: "https://vxctech.com",
          email: "hello@vxctech.com",
          description,
          sameAs: [],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Solutions />
        <HowItWorks />
        <Technologies />
        <Infrastructure />
        <WhyVxctech />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
