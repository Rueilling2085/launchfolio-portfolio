import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { LatestProjects } from "@/components/sections/LatestProjects";
import { BigQuote } from "@/components/sections/BigQuote";
import { Services } from "@/components/sections/Services";
import { AboutMe } from "@/components/sections/AboutMe";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { BookACall } from "@/components/sections/BookACall";
import { Articles } from "@/components/sections/Articles";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col">
        <Nav />
        <Hero />
        <LatestProjects />
        <Philosophy />
        <BigQuote />
        <Services />
        <AboutMe />
        <Pricing />
        <Testimonials />
        <FAQ />
        <BookACall />
        <Articles />
      </main>
      <Footer />
    </>
  );
}
