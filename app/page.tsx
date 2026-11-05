import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { CallToAction } from "@/components/call-to-action";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Features />
        <CallToAction />
      </main>
      <SiteFooter />
    </>
  );
}
