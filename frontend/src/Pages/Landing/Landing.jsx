import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "../../Components/Common/Loader";
import NavBar from "../../Components/Landing/NavBar";
import Hero from "../../Components/Landing/Hero";
import Problem from "../../Components/Landing/Problem";
import HowItWorks from "../../Components/Landing/HowItWorks";
import CropEngine from "../../Components/Landing/CropEngine";
import Technology from "../../Components/Landing/Technology";
import DashboardPreview from "../../Components/Landing/DashboardPreview";
import FinalCTA from "../../Components/Landing/FinalCTA";

export default function Landing() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);
  return (
    <>
      <AnimatePresence>
        {loading && (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <main className="min-h-screen overflow-hidden bg-white">
        <NavBar />
        <Hero />
        <Problem />
        <HowItWorks />
        <CropEngine />
        <Technology />
        <DashboardPreview />
        <FinalCTA />
      </main>
    </>
  );
}
