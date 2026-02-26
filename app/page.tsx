"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import StatsSection from "./components/StatsSection";
import CTASection from "./components/CTASection";


import FloatingContact from "./components/FloatingContact";

export default function Home() {
  return (
    <main className="bg-white selection:bg-[#B38728] selection:text-white pb-20 md:pb-0">
      <HeroSection />
      <StatsSection />
      <CTASection />
      
      {/* Add it here */}
      <FloatingContact />
    </main>
  );
}