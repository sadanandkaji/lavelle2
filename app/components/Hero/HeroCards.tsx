"use client";

import React from "react";

interface HeroCardsProps {
  gardenRef: React.RefObject<HTMLDivElement | null>;
  sportsRef: React.RefObject<HTMLDivElement | null>;
  poolRef: React.RefObject<HTMLDivElement | null>;
}

export default function HeroCards({
  gardenRef,
  sportsRef,
  poolRef,
}: HeroCardsProps) {
  const cards = [
    {
      ref: gardenRef,
      sectionTitle: "Garden Sanctuary",
      category: "Exterior Architecture",
      img: "/images/templefarview.png",
      desc: "An exploration of interior depth and transcendental architecture. This sanctuary is designed as a retreat from the external world — a space where proportion and silence coexist."
    },
    {
      ref: sportsRef,
      sectionTitle: "Athletic Club",
      category: "Private Enclave",
      img: "/images/tenniscourt.webp",
      desc: "A seamless integration of recreation and architectural refinement. This private athletic enclave redefines performance through space, proportion, and atmosphere."
    },
    {
      ref: poolRef,
      sectionTitle: "Dairy Farm",
      category: "Pastoral Heritage",
      img: "/images/diaryoutside.png",
      desc: "Rooted in heritage and landscape, this pastoral environment embodies grounded elegance. Expansive horizons blend with maintained natural surroundings."
    },
  ];

  return (
    <section className="relative w-full bg-[#F6F5F2] py-24 md:py-40 px-5 md:px-10 overflow-hidden">
      
      {/* --- PREMIUM BACKGROUND ELEMENTS --- */}
      {/* 1. Subtle Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      
      {/* 2. Architectural Grid Motif - DARKER & MORE DEFINED */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] opacity-[0.12] pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'linear-gradient(#B38728 1.5px, transparent 1.5px), linear-gradient(90deg, #B38728 1.5px, transparent 1.5px)', 
            backgroundSize: '80px 80px' 
          }} 
        />
      </div>

      {/* 3. Ethereal Light Glows */}
      <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-[#B38728]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-[#856624]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto space-y-32 md:space-y-64 relative z-10">
        {cards.map((card, i) => (
          <div
            key={i}
            ref={card.ref}
            className={`flex flex-col items-center group ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* IMAGE COMPONENT */}
            <div className="relative w-full md:w-[60%] lg:w-[65%]">
              {/* Decorative Frame Element - DARKER GOLD BORDER */}
              <div className={`absolute -inset-4 border-2 border-[#B38728]/40 rounded-[50px] md:rounded-[70px] pointer-events-none transition-all duration-700 group-hover:scale-[1.03] group-hover:border-[#B38728]/60 ${i % 2 === 0 ? "translate-x-3" : "-translate-x-3"}`} />
              
              <div className="relative overflow-hidden rounded-[40px] md:rounded-[60px] shadow-2xl shadow-black/10 aspect-[4/3] md:aspect-[16/10] bg-neutral-200">
                <img
                  src={card.img}
                  alt={card.sectionTitle}
                  className="w-full h-full object-cover transition-transform duration-[4s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
              </div>
            </div>

            {/* CONTENT CARD */}
            <div className={`
              w-full md:w-[48%] lg:w-[42%] 
              bg-white/90 backdrop-blur-2xl p-10 md:p-16 
              rounded-[40px] md:rounded-[48px] 
              shadow-[0_25px_60px_rgba(0,0,0,0.08)] border border-white/50
              mt-8 md:mt-0 z-10
              ${i % 2 === 0 ? "md:-ml-28" : "md:-mr-28"}
              transition-transform duration-700 group-hover:translate-y-[-15px]
            `}>
              <div className="flex flex-col items-start space-y-6 md:space-y-8">
                <div className="flex items-center gap-4">
                  {/* DARKER GOLD ACCENT LINE */}
                  <span className="h-[2px] w-12 bg-[#B38728]" />
                  <p className="text-[11px] tracking-[0.5em] uppercase font-black text-[#856624]">
                    {card.category}
                  </p>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-950 tracking-tight font-serif italic leading-tight">
                  {card.sectionTitle}
                </h2>
                
                <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-light font-sans">
                  {card.desc}
                </p>

                <div className="pt-4 w-full">
                  <button className="group/btn relative flex items-center justify-between w-full border-t-2 border-neutral-100 pt-6">
                    <span className="text-[11px] tracking-[0.4em] uppercase font-bold text-neutral-900 transition-all group-hover/btn:translate-x-2">
                      Discover Collection
                    </span>
                    <svg className="w-6 h-6 text-[#B38728] transition-transform duration-500 group-hover/btn:translate-x-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}