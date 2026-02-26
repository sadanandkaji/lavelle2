"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AmenitiesPage() {
  const facilities = [
    { title: "Śrī Vidyā Mandira", label: "Knowledge", desc: "A modern educational hub rooted in Vedic wisdom, designed for the transmission of traditional sciences and contemporary learning." },
    { title: "Prāṇa Athletics", label: "Vitality", desc: "State-of-the-art sports facilities including tennis courts and swimming zones, designed to enhance physical endurance and life-force." },
    { title: "Gurukulam Living", label: "Tradition", desc: "Residential spaces that foster a sense of community, discipline, and shared spiritual growth for students and seekers." },
    { title: "Zenith Courts", label: "Focus", desc: "Premium sports arenas where physical competition becomes a tool for developing mental concentration and agility." },
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
          <source src="/videos/12amenities.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Active Light Overlay */}
        <div className="absolute inset-0 bg-white/10" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] tracking-[0.6em] text-white uppercase font-bold mb-4 drop-shadow-md"
          >
            Evolution of Mind & Body
          </motion.span>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-6xl md:text-9xl font-serif italic text-white drop-shadow-2xl"
          >
            Śrī Vidyā Mandira
          </motion.h1>
          <p className="mt-8 text-white/90 font-light tracking-widest uppercase text-[10px] md:text-xs">
            Where Wisdom Meets Vitality
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent" 
          />
        </div>
      </section>

      {/* --- INTEGRATED WELLNESS SECTION --- */}
      <section className="max-w-5xl mx-auto px-6 py-32 md:py-48 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[10px] tracking-[0.5em] text-[#B38728] font-bold uppercase mb-8">The Dual Path</h2>
          <h3 className="text-5xl md:text-7xl font-serif text-neutral-900 mb-12 leading-tight">
            Nurturing the <br /><span className="italic text-neutral-400 font-light">Whole Being.</span>
          </h3>
          
          <div className="max-w-3xl mx-auto space-y-8 text-neutral-600 text-lg md:text-xl font-light leading-relaxed">
            <p>
              The amenities at Eshwari Siddha Peeta are designed to facilitate the "balanced life." While the Mandira serves as a sanctuary for intellectual and spiritual inquiry, our sports facilities provide the necessary outlet for physical discipline.
            </p>
            <p>
              We believe that a sharp mind requires a strong vessel. Whether you are delving into the depths of Śrī Vidyā philosophy or engaging in a spirited match on the courts, every facility is geared toward the holistic evolution of the individual.
            </p>
          </div>

          <div className="h-px w-24 bg-neutral-100 mx-auto mt-16" />
        </motion.div>
      </section>

      {/* --- AMENITIES GRID --- */}
      <section className="bg-white py-32 border-y border-neutral-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {facilities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 border border-neutral-100 hover:border-[#B38728] transition-all duration-500"
              >
                <div className="text-[9px] font-bold tracking-[0.4em] text-[#B38728] uppercase mb-6 block">{item.label}</div>
                <h4 className="text-2xl font-serif italic text-neutral-900 mb-4">{item.title}</h4>
                <p className="text-sm text-neutral-500 font-light leading-relaxed group-hover:text-neutral-700">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- QUOTE BANNER --- */}
      <section className="py-48 text-center relative overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03]">
           <span className="text-[20vw] font-serif italic text-neutral-900">Sādhanā</span>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif italic text-neutral-900 leading-tight"
          >
            "A strong body is the foundation of a sharp mind."
          </motion.h2>
          <div className="h-px w-24 bg-[#B38728]/30 mx-auto" />
        </div>
      </section>

      {/* --- NAVIGATION FOOTER --- */}
      <section className="py-32 text-center border-t border-neutral-50 bg-[#FBFBFA]">
        <Link 
          href="/theatre"
          className="inline-flex flex-col items-center group"
        >
          <span className="text-[10px] tracking-[0.4em] text-neutral-400 uppercase mb-4 group-hover:text-[#B38728] transition-colors">Return to Culture</span>
          <span className="text-4xl md:text-5xl font-serif italic text-neutral-800 border-b border-transparent group-hover:border-[#B38728] pb-2 transition-all duration-500">
            Amphitheater
          </span>
        </Link>
      </section>
    </main>
  );
}