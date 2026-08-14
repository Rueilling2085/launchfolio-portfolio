import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LatestProjects } from "@/components/sections/LatestProjects";
import { WhatCanIBring } from "@/components/sections/WhatCanIBring";
import { AboutSection } from "@/components/sections/AboutSection";
import { Philosophy } from "@/components/sections/Philosophy";
import { BigQuote } from "@/components/sections/BigQuote";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col">
        <Nav />
        <Hero />
        <LatestProjects />
        <WhatCanIBring />
        <AboutSection />
        <Philosophy />
        <BigQuote />
      </main>
      <Footer />
    </>
  );
}
