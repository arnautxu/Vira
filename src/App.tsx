import { useEffect } from "react";
import Lenis from "lenis";
import { Nav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { Problem } from "./sections/Problem";
import { Features } from "./sections/Features";
import { Mascot } from "./sections/Mascot";
import { HowItWorks } from "./sections/HowItWorks";
import { Backed } from "./sections/Backed";
import { CTA } from "./sections/CTA";
import { Footer } from "./sections/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Mascot />
        <HowItWorks />
        <Backed />
        <CTA />
        <Footer />
      </main>
      <div className="grain" aria-hidden />
    </>
  );
}

export default App;
