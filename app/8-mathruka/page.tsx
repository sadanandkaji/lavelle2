"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MathrukaPage() {
  const mathrukas = [
    { name: "Brāhmī", attribute: "Creative Power", direction: "East" },
    { name: "Māheśvarī", attribute: "Transformative Power", direction: "North" },
    { name: "Kaumārī", attribute: "Youthful Energy", direction: "South" },
    { name: "Vaiṣṇavī", attribute: "Sustaining Force", direction: "West" },
    { name: "Vārāhī", attribute: "Victory & Command", direction: "South-East" },
    { name: "Indrāṇī", attribute: "Royal Sovereignty", direction: "South-West" },
    { name: "Cāmuṇḍā", attribute: "Destructive Wisdom", direction: "North-West" },
    { name: "Mahālakṣmī", attribute: "Infinite Abundance", direction: "North-East" },
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
          <source src="/videos/4btemple.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Subtle Light Overlay for a clean look */}
        <div className="absolute inset-0 bg-white/10" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] tracking-[0.6em] text-white uppercase font-bold mb-4 drop-shadow-md"
          >
            Avaraṇa Guardians
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-6xl md:text-9xl font-serif italic text-white drop-shadow-lg"
          >
            8 Māthṛkās
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10"
          >
            <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* --- NARRATIVE SECTION --- */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[10px] tracking-[0.4em] text-[#B38728] font-bold uppercase mb-8">Cardinal Geometry</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-neutral-800 mb-10 italic">The Geometry of Protection</h3>
          <p className="text-neutral-500 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            In the sacred architecture of Eshwari Siddha Peeta, the 8 Māthṛkās serve as the directional guardians. They represent the eight facets of the Divine Mother that shield the temple’s inner sanctum.
          </p>
          <div className="mt-16 h-[1px] w-32 bg-[#B38728]/30 mx-auto" />
        </motion.div>
      </section>

      {/* --- DIRECTIONAL GRID --- */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200">
          {mathrukas.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-white p-12 hover:bg-[#FBFBFA] transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-[9px] font-bold tracking-widest text-[#B38728] uppercase">
                  {m.direction}
                </span>
                <div className="w-6 h-[1px] bg-neutral-100 group-hover:w-10 group-hover:bg-[#B38728] transition-all duration-500" />
              </div>
              <h4 className="text-3xl font-serif text-neutral-900 mb-4 italic">{m.name}</h4>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                {m.attribute}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- ESSENCE BANNER --- */}
      <section className="bg-neutral-900 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-5xl font-serif italic mb-8 leading-snug"
          >
            "Aligning the individual’s path with the cardinal forces of the cosmos."
          </motion.p>
          <div className="h-[1px] w-20 bg-[#B38728] mx-auto" />
        </div>
      </section>

      {/* --- NAVIGATION FOOTER --- */}
      <section className="py-32 text-center border-t border-neutral-100">
        <Link 
          href="/64-yogini-temple"
          className="inline-flex flex-col items-center group"
        >
          <span className="text-[10px] tracking-[0.4em] text-neutral-400 uppercase mb-4 group-hover:text-[#B38728] transition-colors">Core Presence</span>
          <span className="text-4xl md:text-5xl font-serif italic text-neutral-800 border-b border-neutral-200 pb-4 group-hover:border-[#B38728] transition-all duration-500">
            64 Yoginī Temple
          </span>
        </Link>
      </section>
    </main>
  );
}