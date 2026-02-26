"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TripuraEshwariPage() {
  const qualities = [
    { title: "Sṛṣṭi", label: "Creation", desc: "The primordial source from which all matter and consciousness emerge." },
    { title: "Sthiti", label: "Sustenance", desc: "The nurturing force that maintains the harmony of the universe." },
    { title: "Saṁhāra", label: "Transformation", desc: "The grace that dissolves the old to make way for spiritual rebirth." },
    { title: "Ātma Tattva", label: "The Self", desc: "The realization of the inner divinity within every seeker." },
  ];

  return (
    <main className="bg-[#FBFBFA] text-neutral-900 min-h-screen">
      {/* --- FULL SCREEN HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/4ctemple.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Soft light wash for high-end feel */}
        <div className="absolute inset-0 bg-white/10" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span 
         
            transition={{ duration: 1 }}
            className="text-[10px] text-white uppercase font-bold mb-4 drop-shadow-md"
          >
            The Central Bindu
          </motion.span>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-5xl md:text-8xl lg:text-9xl font-serif italic text-white drop-shadow-2xl"
          >
            Tripura Eshwari
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="w-32 h-px bg-white mt-8"
          />
        </div>

        {/* Vertical Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent" 
          />
        </div>
      </section>

      {/* --- THE SUPREME CENTER NARRATIVE --- */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.5em] text-[#B38728] font-bold uppercase mb-6"
          >
            The Heart of the Peeta
          </motion.h2>
          <h3 className="text-4xl md:text-6xl font-serif text-neutral-900 leading-tight">
            The Living Presence of <br />
            <span className="italic text-neutral-400 font-light">Paraśakti.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-lg text-neutral-600 font-light leading-relaxed"
          >
            <p>
              Tripura Eshwari Peetam is the innermost sanctum of the estate—the <strong>Bindu</strong> from which the entire energy of Eshwari Siddha Peeta radiates. 
            </p>
            <p>
              She is worshipped not merely as a deity in stone, but as the <strong>Living Consciousness</strong> that governs the Śrīcakra. Her presence is the culmination of the seeker's journey through the Avaraṇas, representing the union of the individual soul with the Universal Divine.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 border border-neutral-100 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#B38728]/5 -mr-16 -mt-16 rounded-full" />
            <h4 className="text-[#B38728] font-serif italic text-2xl mb-6">Manifestation of Beauty</h4>
            <p className="text-sm text-neutral-500 leading-loose">
              "Tripura Sundarī" translates to the Beauty of the Three Worlds. This beauty is not physical, but the spiritual radiance of wisdom and compassion that dissolves fear and bestows liberation (Mukti).
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FOUR QUALITIES GRID --- */}
      <section className="bg-white py-32 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {qualities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="text-[#B38728] font-serif italic text-3xl mb-2">{item.title}</div>
                <div className="text-[10px] tracking-widest text-neutral-400 font-bold uppercase mb-6">{item.label}</div>
                <p className="text-sm text-neutral-500 font-light leading-relaxed group-hover:text-neutral-900 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHICAL QUOTE --- */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <p className="text-2xl md:text-4xl font-serif italic text-neutral-800 leading-snug">
              "The Peeta is her living body in architectural form—a manifested Śrīcakra for the evolution of the soul."
            </p>
            <div className="flex justify-center gap-2">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#B38728]" />
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- NAVIGATION FOOTER --- */}
      <section className="py-32 text-center border-t border-neutral-100">
        <Link 
          href="/8-mathruka"
          className="inline-flex flex-col items-center group"
        >
          <span className="text-[10px] tracking-[0.4em] text-neutral-400 uppercase mb-4 group-hover:text-[#B38728] transition-colors">Return to Outer Circles</span>
          <span className="text-4xl md:text-5xl font-serif italic text-neutral-800 border-b border-transparent group-hover:border-[#B38728] pb-2 transition-all duration-500">
            8 Māthṛkās
          </span>
        </Link>
      </section>
    </main>
  );
}