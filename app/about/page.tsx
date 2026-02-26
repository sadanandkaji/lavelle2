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
              Est. 1999
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
        
        {/* Decorative Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="text-[8px] tracking-[0.3em] uppercase text-neutral-400 font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#B38728] to-transparent" />
        </div>
      </section>

      {/* --- OWNER / LEADERSHIP SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-32 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Owner Image with Floating Frame Effect */}
          <div className="lg:col-span-5 relative group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative aspect-[4/6] overflow-hidden z-10"
            >
              <img 
                src="/images/owner.jpeg" 
                alt="Founder of Lavelle Ventures" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
              />
            </motion.div>
            {/* Background Decorative Box */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-stone-200 z-0 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />
          </div>

          {/* Owner Details */}
          <div className="lg:col-span-7 lg:pl-12 space-y-12">
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[10px] tracking-[0.5em] text-[#B38728] font-bold uppercase"
              >
                A Message from the Founder
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif leading-[1.1]"
              >
                Crafting spaces where <br />
                <span className="italic text-neutral-400 font-light">Spiritual Wisdom</span> <br />
                meets modern living.
              </motion.h3 >
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8 text-neutral-500 font-light leading-relaxed text-lg max-w-xl"
            >
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-[#B38728]">
                With over two decades of experience in the high-stakes world of real estate, our founder has built a reputation on the pillars of integrity, precision, and visionary planning.
              </p>
              <p>
                Having successfully delivered <strong>200+ premium residencies</strong>, his expertise lies in identifying land that possesses not just market value, but spiritual and ecological significance. 
              </p>
              <p className="italic text-stone-400">
                "We don't just develop; we curate environments for the soul."
              </p>
            </motion.div>

            {/* Stats Grid - Luxury Minimalist */}
            <div className="grid grid-cols-2 gap-y-12 gap-x-8 pt-12 border-t border-stone-100">
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
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION (Full Width Cinematic) --- */}
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

      {/* --- VISION & MISSION (Asymmetric Grid) --- */}
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
            <div className="pt-4">
                <button className="text-[10px] tracking-[0.3em] uppercase font-bold border-b border-[#B38728] pb-2 hover:text-[#B38728] transition-colors">
                    Join Our Legacy
                </button>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}