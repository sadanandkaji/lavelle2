"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const stats = [
    { label: "Residencies Sold", value: "200+" },
    { label: "Acres Developed", value: "500+" },
    { label: "Years of Expertise", value: "25+" },
    { label: "Satisfied Families", value: "1000+" },
  ];

  return (
    <main ref={containerRef} className="bg-[#FBFBFA] text-neutral-900 min-h-screen">
      
      {/* --- LUXURY HERO SECTION --- */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 0.5], [0, 200]) }}
          className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none"
        >
          <h1 className="text-[25vw] font-serif italic whitespace-nowrap">Lavelle</h1>
        </motion.div>

        <div className="relative z-10 text-center space-y-6 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-[10px] tracking-[0.8em] text-[#B38728] uppercase font-bold block mb-4">
              Est. 2005
            </span>
            <h2 className="text-6xl md:text-9xl font-serif italic text-neutral-900 leading-none">
              The Art of <br />
              <span className="text-neutral-300">Legacy</span>
            </h2>
          </motion.div>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-[1px] bg-[#B38728] mx-auto"
          />
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="text-[8px] tracking-[0.3em] uppercase text-neutral-400 font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#B38728] to-transparent" />
        </div>
      </section>

      {/* --- LEADERSHIP SECTION (Two Owners) --- */}
      <section className="max-w-7xl mx-auto px-6 py-32 md:py-48">
        <div className="text-center mb-24 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.5em] text-[#B38728] font-bold uppercase"
          >
            Our Founders
          </motion.h2>
          <h3 className="text-4xl md:text-6xl font-serif italic">Visionary Leadership</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          
          {/* Owner 1 - HALF SIZE / COMPACT */}
          <div className="space-y-10 flex flex-col items-center md:items-start">
            <div className="relative group w-full max-w-[340px]"> {/* Contrains width to roughly half of the column */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] overflow-hidden z-10 shadow-xl bg-neutral-100"
              >
                <img 
                  src="/images/owner.jpeg" 
                  alt="Founder" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
                />
              </motion.div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-stone-200 z-0" />
            </div>
            
            <div className="space-y-4 max-w-[400px]">
              <h4 className="text-2xl font-serif">Founder</h4>
              <p className="text-neutral-500 font-light leading-relaxed text-lg italic">
                "We don't just develop land; we curate environments where the soul can finally breathe."
              </p>
              <p className="text-stone-500 font-light leading-relaxed text-sm">
                With over two decades in real estate, he specializes in identifying land with profound spiritual significance, ensuring every project at Lavelle remains a sanctuary.
              </p>
            </div>
          </div>

          {/* Owner 2 - FULL SIZE / PROMINENT */}
          <div className="space-y-10 md:mt-32">
            <div className="relative group">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative aspect-[4/5] overflow-hidden z-10 shadow-2xl bg-neutral-100"
              >
                <img 
                  src="/images/owner2.jpeg" 
                  alt="Co-Founder" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
                />
              </motion.div>
              <div className="absolute -bottom-4 -left-4 w-full h-full border border-stone-200 z-0" />
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-serif">Founder</h4>
              <p className="text-neutral-500 font-light leading-relaxed text-lg italic">
                "Architecture must serve as a bridge between ancient wisdom and modern precision."
              </p>
              <p className="text-stone-500 font-light leading-relaxed text-sm">
                A master of strategic development and urban planning, she ensures that the structural integrity of our projects meets the highest global standards of luxury.
              </p>
            </div>
          </div>
        </div>

        {/* Unified Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 pt-24 mt-24 border-t border-stone-100 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-serif text-neutral-900 mb-1">{stat.value}</p>
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#B38728] font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="relative py-40 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
          >
            <img src="/images/iconlogo.png" alt="Logo" className="w-12 h-12 mx-auto mb-12 opacity-40" />
            <h2 className="text-3xl md:text-5xl font-serif italic text-neutral-800 leading-[1.4] mb-12">
              "True luxury is not about possession; it is about the silence and the sanctity of the earth we inhabit."
            </h2>
            <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-stone-200" />
                <p className="text-[10px] tracking-[0.5em] uppercase font-bold text-[#B38728]">The Lavelle Way</p>
                <div className="h-px w-12 bg-stone-200" />
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
      </section>

      {/* --- VISION & MISSION --- */}
      <section className="max-w-7xl mx-auto px-6 py-32 md:py-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1 border border-stone-200 text-[9px] tracking-[0.4em] uppercase font-bold text-stone-400">
              Purpose
            </div>
            <h4 className="text-4xl font-serif italic text-neutral-900">The Vision</h4>
            <p className="text-neutral-500 font-light leading-relaxed text-xl">
              To be the premier developer of conscious living spaces in India, where every project serves as a sanctuary for the mind, body, and soul.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#F6F5F2] p-12 md:p-20 space-y-8"
          >
            <h4 className="text-4xl font-serif italic text-neutral-900">The Mission</h4>
            <p className="text-neutral-500 font-light leading-relaxed text-xl">
              To blend ancient Siddha wisdom with modern real estate excellence, delivering high-value investments that offer profound peace and ecological sustainability.
            </p>
           
          </motion.div>
        </div>
      </section>
    </main>
  );
}