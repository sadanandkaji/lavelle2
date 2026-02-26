"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HolisticCenterPage() {
  const therapies = [
    { title: "Panchakarma", label: "Purification", desc: "The five-fold detoxification process designed to remove deep-seated toxins and restore the body's natural intelligence." },
    { title: "Marma Therapy", label: "Energy", desc: "Manipulation of vital energy points to release blockages and stimulate the body's innate healing mechanisms." },
    { title: "Siddha Medicine", label: "Alchemy", desc: "Ancient herbal formulations and mineral preparations rooted in the lineage of the 18 Siddhars." },
    { title: "Nāḍī Parīkṣā", label: "Diagnosis", desc: "Traditional pulse diagnosis to determine the unique prakṛti (constitution) and imbalances of the individual." },
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
          <source src="/videos/10holisticcenter.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Soft Healing Overlay */}
        <div className="absolute inset-0 bg-white/10" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] tracking-[0.6em] text-white uppercase font-bold mb-4 drop-shadow-md"
          >
            Science of Longevity
          </motion.span>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-5xl md:text-8xl lg:text-9xl font-serif italic text-white drop-shadow-2xl"
          >
            Eshwari Āyurveda
          </motion.h1>
          <p className="mt-8 text-white/90 font-light tracking-widest uppercase text-[10px] md:text-xs">
            A Sanctuary for Holistic Healing
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent" 
          />
        </div>
      </section>

      {/* --- HEALING PHILOSOPHY SECTION --- */}
      <section className="max-w-5xl mx-auto px-6 py-32 md:py-48 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[10px] tracking-[0.5em] text-[#B38728] font-bold uppercase mb-8">The Roots of Wellness</h2>
          <h3 className="text-5xl md:text-7xl font-serif text-neutral-900 mb-12 leading-tight">
            Restoring the <span className="italic text-neutral-400 font-light">Inner Balance.</span>
          </h3>
          
          <div className="max-w-3xl mx-auto space-y-8 text-neutral-600 text-lg md:text-xl font-light leading-relaxed">
            <p>
              The Eshwari Āyurveda Holistic Center is a space where ancient wisdom meets the modern quest for health. Rooted in the Siddha and Āyurvedic traditions, our center focuses on the triad of <strong>Body, Mind, and Spirit</strong>.
            </p>
            <p>
              Every treatment is personalized, utilizing herbs grown directly within the estate's medicinal gardens. We don't just treat symptoms; we realign the individual with the natural rhythms of the universe, ensuring a state of vibrant health and deep-seated peace.
            </p>
          </div>

          <div className="h-px w-24 bg-neutral-100 mx-auto mt-16" />
        </motion.div>
      </section>

      {/* --- THERAPIES GRID --- */}
      <section className="bg-white py-32 border-y border-neutral-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {therapies.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 bg-[#FBFBFA] border border-neutral-50 hover:border-[#B38728]/20 transition-all duration-700"
              >
                <div className="text-[9px] font-bold tracking-[0.4em] text-[#B38728] uppercase mb-6 block">{item.label}</div>
                <h4 className="text-2xl font-serif italic text-neutral-900 mb-4 group-hover:text-[#B38728] transition-colors duration-500">{item.title}</h4>
                <p className="text-sm text-neutral-500 font-light leading-relaxed">
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
           <span className="text-[20vw] font-serif italic">Arogya</span>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif italic text-neutral-900 leading-tight"
          >
            "Health is the foundation of all spiritual pursuit."
          </motion.h2>
          <div className="h-px w-24 bg-[#B38728]/30 mx-auto" />
        </div>
      </section>

      {/* --- NAVIGATION FOOTER --- */}
      <section className="py-32 text-center border-t border-neutral-50 bg-[#FBFBFA]">
        <Link 
          href="/lake"
          className="inline-flex flex-col items-center group"
        >
          <span className="text-[10px] tracking-[0.4em] text-neutral-400 uppercase mb-4 group-hover:text-[#B38728] transition-colors">Return to the Elements</span>
          <span className="text-4xl md:text-5xl font-serif italic text-neutral-800 border-b border-transparent group-hover:border-[#B38728] pb-2 transition-all duration-500">
            The Sacred Lake
          </span>
        </Link>
      </section>
    </main>
  );
}