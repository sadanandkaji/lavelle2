"use client";

import { useRef } from "react";
import HeroCards from "./HeroCards";
import HeroIntro from "./HeroIntro";
import HeroGoldText from "./HeroGoldText";

export default function HeroSection() {
  const gardenCardRef = useRef<HTMLDivElement | null>(null);
  const sportsCardRef = useRef<HTMLDivElement | null>(null);
  const poolCardRef = useRef<HTMLDivElement | null>(null);

  const goldTextRef = useRef<HTMLDivElement | null>(null);
  const goldBgRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="w-full bg-white">
      
      {/* VIDEO SECTION */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="w-full h-full object-cover"
        >
          {/* 🔥 Load from backend streaming API */}
          <source src="/api/render?file=lavellefirstscene1.mp4" type="video/mp4" />
        </video>

        {/* Intro Text Over Video */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-6 bg-black/10">
          <HeroIntro />
        </div>
      </div>

      {/* --- SPACES HEADER --- */}
      <div className="bg-[#F6F5F2] pt-20 pb-0 flex flex-col items-center">
        <div className="w-[1.5px] h-20 bg-gradient-to-b from-transparent via-[#B38728] to-[#B38728] mb-8" />
        
        <div className="text-center space-y-2">
          <h2 className="text-[#B38728] text-xs md:text-sm tracking-[1em] uppercase font-bold pl-[1em]">
            Spaces
          </h2>
          <p className="text-neutral-400 font-serif italic text-lg md:text-xl">
            A Curation of Environments
          </p>
        </div>
      </div>

      {/* HERO CARDS */}
      <HeroCards
        gardenRef={gardenCardRef}
        sportsRef={sportsCardRef}
        poolRef={poolCardRef}
      />

      {/* GOLD SECTION */}
      <div className="py-16">
        <HeroGoldText
          goldTextRef={goldTextRef}
          goldBgRef={goldBgRef}
        />
      </div>
    </section>
  );
}