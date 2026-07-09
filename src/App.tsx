import { Suspense, lazy, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import FloatingButtons from "./components/FloatingButtons";
import LoadingScreen from "./components/LoadingScreen";

const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Products = lazy(() => import("./components/Products"));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs"));
const Statistics = lazy(() => import("./components/Statistics"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Process = lazy(() => import("./components/Process"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const FAQ = lazy(() => import("./components/FAQ"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      <ScrollProgress />
      <Navbar />

      <main className="bg-white dark:bg-slate-950">
        <Hero />
        <Suspense fallback={<div className="py-20 text-center text-gray-400">Loading…</div>}>
          <About />
          <Services />
          <Products />
          <Statistics />
          <WhyChooseUs />
          <Portfolio />
          <Process />
          <Testimonials />
          <FAQ />
          <Contact />
          <Footer />
        </Suspense>
      </main>

      <FloatingButtons />
      <ScrollToTop />
    </ThemeProvider>
  );
}
