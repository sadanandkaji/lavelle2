"use client";

import React from "react";

interface HeroCardsProps {
  gardenRef: React.RefObject<HTMLDivElement | null>;
  sportsRef: React.RefObject<HTMLDivElement | null>;
  poolRef: React.RefObject<HTMLDivElement | null>;
}

export default function HeroCards({ gardenRef, sportsRef, poolRef }: HeroCardsProps) {
  const cards = [
    {
      ref: gardenRef,
      img: "/images/garden.jpg",
      tag: "Botanical Harmony",
      title: "Verdant Sanctuaries",
      desc: "Curated landscapes designed for serenity, balance and timeless outdoor living.",
    },
    {
      ref: sportsRef,
      img: "/images/sports1.jpg",
      tag: "Dynamic Balance",
      title: "Private Equilibrium",
      desc: "Seamless integration of recreation and architectural refinement.",
    },
    {
      ref: poolRef,
      img: "/images/pool.webp",
      tag: "Infinite Stillness",
      title: "Reflecting Horizons",
      desc: "Water features that blur the line between structure and nature.",
    },
  ];

  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
      {cards.map((card, i) => (
        <div
          key={i}
          ref={card.ref}
          className="absolute w-[88%] max-w-[350px] md:max-w-[400px] aspect-[3/4.6] 
          overflow-hidden rounded-[40px] 
          border border-white/20 
          shadow-[0_20px_50px_rgba(0,0,0,0.5)] 
          opacity-0 bg-[#0e0e0e] pointer-events-auto"
        >
          {/* Parallax Image Effect */}
          <div
            className="card-image absolute inset-0 w-full h-[120%] bg-cover bg-center"
            style={{ backgroundImage: `url("${card.img}")` }}
          />

          {/* Luxury Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {/* Content Box */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 space-y-4">
            <div className="w-12 h-[1.5px] bg-[#B38728]" />
            
            <p className="text-[#B38728] text-[10px] tracking-[0.5em] uppercase font-black">
              {card.tag}
            </p>

            <h4 className="text-white text-2xl md:text-4xl font-light italic leading-tight">
              {card.title}
            </h4>

            <p className="text-white/50 text-xs md:text-sm leading-relaxed line-clamp-3 font-medium">
              {card.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}