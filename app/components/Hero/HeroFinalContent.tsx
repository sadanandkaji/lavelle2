"use client";

import React from "react";

interface HeroFinalContentProps {
  contentRef: React.RefObject<HTMLDivElement | null>;
}

export default function HeroFinalContent({ contentRef }: HeroFinalContentProps) {
  return (
    <div
      ref={contentRef}
      className="absolute inset-0 z-50 bg-[#F8F6F2] flex items-center justify-center opacity-0 px-6"
    >
      <div className="text-center max-w-6xl">

        {/* Top Label */}
        <p className="uppercase tracking-[0.5em] text-[10px] sm:text-xs text-[#B89B5E] mb-8">
          A Landmark Collaboration
        </p>

        {/* Main Heading */}
        <h2
          className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          xl:text-7xl
          font-light
          text-[#111111]
          leading-[1.15]
        "
        >
          Lavelle Venture
          <br />
          <span className="italic font-extralight text-[#B89B5E]">
            × Eeshwari Farms
          </span>
        </h2>

        {/* Gold Divider */}
        <div className="w-24 h-[1px] bg-[#B89B5E] mx-auto my-10 opacity-70"></div>

        {/* Description */}
        <p
          className="
          text-sm
          sm:text-base
          md:text-lg
          text-gray-600
          font-light
          max-w-3xl
          mx-auto
          leading-relaxed
        "
        >
          Lavelle Venture, in collaboration with Eeshwari Farms,
          brings forth a refined vision of luxury living —
          where contemporary architecture meets serene natural landscapes.
          Designed for those who seek exclusivity, elegance, and intentional
          craftsmanship, this partnership redefines elevated living.
        </p>

        {/* CTA Section */}
       <div className="mt-12">
  <a 
    href="https://yagnaeshwari.com/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block"
  >
    <button
      className="
      border border-[#B89B5E]
      text-[#B89B5E]
      px-10 py-3
      text-xs
      tracking-[0.35em]
      uppercase
      hover:bg-[#B89B5E]
      hover:text-white
      transition-all duration-500
      "
    >
      Discover the Experience
    </button>
  </a>
</div>

      </div>
    </div>
  );
}