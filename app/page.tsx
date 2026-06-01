import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { ExpertiseAreas } from "@/components/ExpertiseAreas";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Technologies } from "@/components/Technologies";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <ExpertiseAreas />
        <Technologies />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
