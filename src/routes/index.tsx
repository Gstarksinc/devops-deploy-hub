import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Solutions } from "@/components/Solutions";
import { Infrastructure } from "@/components/Infrastructure";
import { Technologies } from "@/components/Technologies";
import { WhyVxctech } from "@/components/WhyVxctech";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const title = "VXCTech — DevOps, Cloud & Managed Hosting";
const description =
  "VXCTech deploys, hosts, monitors and manages websites, applications and cloud infrastructure so your team can focus on building your product.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "VXCTech",
          url: "https://vxctech.com",
          email: "hello@vxctech.com",
          description,
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
        <HowItWorks />
        <Solutions />
        <Infrastructure />
        <Technologies />
        <WhyVxctech />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
