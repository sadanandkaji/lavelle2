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
      desc: "Curated landscapes designed for serenity and timeless outdoor living.",
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
    <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none px-4">
      {cards.map((card, i) => (
        <div
          key={i}
          ref={card.ref}
          className="absolute w-full max-w-[340px] md:max-w-[400px] aspect-[3/4.5] 
          overflow-hidden rounded-[30px] 
          border border-white/10 
          shadow-2xl opacity-0 bg-[#0e0e0e]"
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url("${card.img}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 space-y-4">
            <div className="w-10 h-[1px] bg-[#B38728]" />
            <p className="text-[#B38728] text-[10px] tracking-[0.4em] uppercase font-bold">{card.tag}</p>
            <h4 className="text-white text-2xl md:text-3xl font-light italic leading-tight">{card.title}</h4>
            <p className="text-white/60 text-xs md:text-sm leading-relaxed line-clamp-3">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}