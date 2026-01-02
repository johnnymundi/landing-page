import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Curiosities from "@/components/sections/Curiosities";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Portfolio />
        <Curiosities />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
