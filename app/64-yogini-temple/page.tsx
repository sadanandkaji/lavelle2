"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function YoginiTemplePage() {
  const pillars = [
    { title: "Śakti as Supreme", desc: "Recognizing the Divine Feminine as the ultimate source of reality and creation." },
    { title: "Sacred Architecture", desc: "Structure as a transformation tool, where stone becomes a living mantra." },
    { title: "Collective Sādhana", desc: "Spiritual evolution through shared energy and universal welfare." },
    { title: "Karmic Shield", desc: "The removal of fear, negativity, and malefic influences through divine intervention." },
  ];

  return (
    <main className="bg-[#FBFBFA] text-neutral-900 min-h-screen">
     {/* --- FULL SCREEN HERO SECTION --- */}
<section className="relative h-screen h-[100dvh] w-full overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="/videos/4atemple.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  
  {/* --- FIXED OVERLAY --- */}
  {/* Removed bg-white/20. Replaced with a subtle radial gradient that is dark in the center and clear on the edges */}
  <div className="absolute inset-0 bg-black/30 md:bg-black/20" /> 
  {/* OR use a radial gradient for a more 'premium' look: */}
  <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.4)_0%,_transparent_70%)]" />

  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
    <motion.span 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-[10px] tracking-[0.5em] text-[#B38728] uppercase font-bold mb-4 drop-shadow-md"
    >
      Eshwari Siddha Peeta
    </motion.span>
    <motion.h1 
      initial={{ y: 30, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.2 }}
      className="text-5xl md:text-9xl font-serif italic text-white drop-shadow-2xl"
    >
      64 Yoginī Temple
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mt-6 text-white/90 drop-shadow-lg max-w-2xl font-light tracking-wide italic text-lg md:text-xl"
    >
      "A cosmic womb of transformation and a living energy grid for human evolution."
    </motion.p>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
    <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent opacity-70" />
  </div>
</section>

      {/* --- SUPREME CENTER SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] tracking-[0.4em] text-[#B38728] font-bold uppercase mb-6">Supreme Center</h2>
            <h3 className="text-4xl md:text-7xl font-serif text-neutral-900 mb-8 leading-tight">
              Śrī Lalitā <br /> 
              <span className="italic text-neutral-400 font-light">Tripura Sundarī</span>
            </h3>
            <p className="text-neutral-600 leading-relaxed text-xl font-light">
              At the heart of the Peeta is the Paraśakti—the Supreme Consciousness manifesting as beauty, wisdom, and compassion. She is the source of Sṛṣṭi (Creation), Sthiti (Sustenance), and Saṁhāra (Transformation).
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative border border-neutral-200 p-12 md:p-20 bg-white shadow-sm"
          >
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-[#B38728]" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-[#B38728]" />
            <h4 className="text-[#B38728] font-serif italic text-3xl mb-8">The Living Śrīcakra</h4>
            <p className="text-lg text-neutral-500 leading-relaxed font-light">
              The Peeta is envisioned as the world’s largest living Śrīcakra temple. 
              Here, structure becomes mantra in stone. Every Avaraṇa (layer) and the 
              Central Bindu are mathematically aligned to transform the devotee’s 
              internal subtle energies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- THE 64 YOGINI ENERGIES --- */}
      <section className="bg-white border-y border-neutral-100 py-32 px-6">
        <div className="max-w-5xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif italic text-neutral-900 mb-8">Activation of Inner Shakti</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto font-light text-lg">
            The 64 Yoginīs represent the 64 Kalās of consciousness and the 64 subtle nāḍī junctions within the human body.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200">
          {[
            { title: "Karmic Purification", desc: "Removal of deep-seated blockages and ancestral burdens." },
            { title: "Kundalini Ascent", desc: "A physical mandala designed for the awakening of inner fire." },
            { title: "Cosmic Protection", desc: "A sacred refuge from malefic planetary and subtle influences." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: "#FBFBFA" }}
              className="p-16 bg-white text-center transition-all duration-500"
            >
              <div className="text-[#B38728] text-xs mb-6 uppercase tracking-[0.3em] font-bold">Phase 0{i+1}</div>
              <h4 className="text-2xl font-serif mb-6 text-neutral-900">{item.title}</h4>
              <p className="text-neutral-500 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- IDEOLOGICAL PILLARS GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-40">
        <div className="mb-20 text-center">
          <h2 className="text-[10px] tracking-[0.5em] text-[#B38728] font-bold uppercase mb-4">Core Ideology</h2>
          <div className="h-px w-20 bg-[#B38728] mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-t border-neutral-100 pt-8"
            >
              <h5 className="text-neutral-900 font-serif italic text-xl mb-4">{pillar.title}</h5>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FINAL ESSENCE BANNER --- */}
      <section className="relative py-48 overflow-hidden bg-white border-t border-neutral-100">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
            <span className="text-[25vw] font-serif italic text-black whitespace-nowrap">Śrī Vidyā</span>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h3 className="text-4xl md:text-6xl font-serif italic text-neutral-900 mb-10">
            "A place where saṅkalpa becomes siddhi."
          </h3>
          <p className="text-neutral-500 font-light mb-16 text-lg max-w-2xl mx-auto">
            The Eshwari Siddha Peeta stands as a testament to the integration of Vedic and Tantric traditions—a scientific energy field for the evolution of the soul.
          </p>
        
        </div>
      </section>

      {/* --- NAVIGATION FOOTER --- */}
      <section className="py-32 text-center border-t border-neutral-50 bg-[#FBFBFA]">
        <Link href="/statues" className="group inline-flex flex-col items-center">
          <span className="text-[10px] tracking-[0.4em] text-neutral-400 uppercase mb-4 group-hover:text-[#B38728] transition-colors">Return to Map</span>
          <span className="text-4xl font-serif italic text-neutral-800 border-b border-transparent group-hover:border-[#B38728] pb-2 transition-all duration-500">The Statues</span>
        </Link>
      </section>
    </main>
  );
}