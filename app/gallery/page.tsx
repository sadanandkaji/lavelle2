import React from "react";
import Image from 'next/image';

const sections = [
  {
    category: "The Beginning",
    title: "Botanical Harmony",
    description: "First impressions and the locals we met along the way.",
    images: [
      { src: '/images/diaryoutside.png', alt: 'Diary exterior', subtitle: 'First Note' },
      { src: '/images/cow.png', alt: 'A cow in the area', subtitle: 'Local Life' },
    ]
  },
  {
    category: "The Sacred Temple",
    title: "Verdant Sanctuaries",
    description: "Exploring the architecture and the spiritual atmosphere of the grounds.",
    images: [
      { src: '/images/templefarview.png', alt: 'Far view of the temple', wide: true, subtitle: 'Infinite Stillness' },
      { src: '/images/templeinside.png', alt: 'Inside the temple', subtitle: 'Inner Peace' },
      { src: '/images/templesurrounding.png', alt: 'Temple surroundings', subtitle: 'Architectural Detail' },
    ]
  },
  {
    category: "Rest & Reflection",
    title: "Private Equilibrium",
    description: "Finding peace in the quiet corners of the grounds.",
    images: [
      { src: '/images/sittingarea.png', alt: 'The sitting area', wide: true, subtitle: 'Reflecting Horizons' },
    ]
  }
];

export default function WhiteLuxuryGallery() {
  return (
    <main className="min-h-screen bg-white text-stone-900 py-26 px-6 md:px-12">
      {/* Header */}
      <header className="max-w-4xl mx-auto mb-24 text-center space-y-4">
        <div className="w-12 h-[1px] bg-[#B38728] mx-auto" />
        <p className="text-[#B38728] text-xs tracking-[0.5em] uppercase font-medium">
          The Collection
        </p>
        <h1 className="text-5xl md:text-6xl font-light italic leading-tight text-stone-800">
          Visual Journal
        </h1>
      </header>

      {/* Sections */}
      <div className="max-w-6xl mx-auto space-y-32">
        {sections.map((section, idx) => (
          <section key={idx} className="space-y-12">
            {/* Section Label */}
            <div className="space-y-3">
              <p className="text-[#B38728] text-[10px] tracking-[0.4em] uppercase font-semibold">
                {section.category}
              </p>
              <h2 className="text-3xl font-light italic text-stone-800">{section.title}</h2>
              <p className="max-w-md text-stone-500 text-sm leading-relaxed">
                {section.description}
              </p>
            </div>

            {/* Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
              {section.images.map((img, i) => (
                <div 
                  key={i} 
                  className={`group flex flex-col space-y-6 ${img.wide ? 'md:col-span-2' : ''}`}
                >
                  {/* Image Container - No Shading */}
                  <div className={`relative overflow-hidden rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] bg-stone-50 transition-all duration-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]
                    ${img.wide ? 'h-[500px]' : 'h-[450px]'}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Clean Caption Below Image */}
                  <div className="px-4 space-y-2">
                    <div className="flex items-center space-x-3">
                        <div className="w-6 h-[1px] bg-[#B38728]" />
                        <p className="text-[#B38728] text-[10px] tracking-[0.3em] uppercase font-bold">
                            {img.subtitle}
                        </p>
                    </div>
                    <h4 className="text-stone-800 text-xl font-light tracking-wide italic">
                      {img.alt}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
     
    </main>
  );
}