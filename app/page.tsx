"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import StatsSection from "./components/StatsSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <main className="bg-white selection:bg-[#B38728] selection:text-white">
      <HeroSection />
      <StatsSection />
      <CTASection />
    </main>
  );
}