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
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none pt-24 md:pt-32">

      {/* ================= GARDEN ================= */}
      <div
        ref={gardenRef}
        className="absolute w-[80%] md:w-[380px] aspect-[3/4.5] 
        overflow-hidden rounded-[30px] 
        border border-white/10 
        shadow-2xl 
        opacity-0 bg-[#0e0e0e]"
      >
        <div
          className="card-image absolute inset-0 w-full h-[120%] bg-cover bg-center"
          style={{ backgroundImage: `url("/images/garden.jpg")` }}
        />

        {/* Softer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 space-y-4">
          <div className="w-10 h-[1px] bg-[#B38728]" />
          
          <p className="text-[#B38728] text-[10px] tracking-[0.4em] uppercase font-medium">
            Botanical Harmony
          </p>

          <h4 className="text-white text-2xl md:text-3xl font-light italic leading-tight">
            Verdant Sanctuaries
          </h4>

          <p className="text-white/60 text-sm leading-relaxed">
            Curated landscapes designed for serenity, balance and timeless outdoor living.
          </p>
        </div>
      </div>

      {/* ================= SPORTS ================= */}
      <div
        ref={sportsRef}
        className="absolute w-[80%] md:w-[380px] aspect-[3/4.5] 
        overflow-hidden rounded-[30px] 
        border border-white/10 
        shadow-2xl 
        opacity-0 bg-[#0e0e0e]"
      >
        <div
          className="card-image absolute inset-0 w-full h-[120%] bg-cover bg-center"
          style={{ backgroundImage: `url("/images/sports1.jpg")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 space-y-4">
          <div className="w-10 h-[1px] bg-[#B38728]" />

          <p className="text-[#B38728] text-[10px] tracking-[0.4em] uppercase font-medium">
            Dynamic Balance
          </p>

          <h4 className="text-white text-2xl md:text-3xl font-light italic leading-tight">
            Private Equilibrium
          </h4>

          <p className="text-white/60 text-sm leading-relaxed">
            Seamless integration of recreation and architectural refinement.
          </p>


        </div>
      </div>

      {/* ================= POOL ================= */}
      <div
        ref={poolRef}
        className="absolute w-[80%] md:w-[380px] aspect-[3/4.5] 
        overflow-hidden rounded-[30px] 
        border border-white/10 
        shadow-2xl 
        opacity-0 bg-[#0e0e0e]"
      >
        <div
          className="card-image absolute inset-0 w-full h-[120%] bg-cover bg-center"
          style={{ backgroundImage: `url("/images/pool.webp")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 space-y-4">
          <div className="w-10 h-[1px] bg-[#B38728]" />

          <p className="text-[#B38728] text-[10px] tracking-[0.4em] uppercase font-medium">
            Infinite Stillness
          </p>

          <h4 className="text-white text-2xl md:text-3xl font-light italic leading-tight">
            Reflecting Horizons
          </h4>

          <p className="text-white/60 text-sm leading-relaxed">
            Water features that blur the line between structure and nature.
          </p>

        </div>
      </div>

    </div>
  );
}