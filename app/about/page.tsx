"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutPage() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 200]);

  const stats = [
    { label: "Residencies Sold", value: "200+" },
    { label: "Acres Developed", value: "500+" },
    { label: "Years of Expertise", value: "10+" },
    { label: "Satisfied Families", value: "1000+" },
  ];

  return (
    <main
      ref={containerRef}
      className="bg-[#FBFBFA] text-neutral-900 min-h-screen"
    >
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-6">
        {/* Background Typography */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none"
        >
          <h1 className="text-[30vw] md:text-[18vw] font-serif italic whitespace-nowrap">
            Lavelle
          </h1>
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[9px] md:text-[10px] tracking-[0.6em] md:tracking-[0.8em] text-[#B38728] uppercase font-bold block mb-4">
              Est. 2019
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif italic leading-tight">
             Lavelle Venture
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-base sm:text-lg md:text-xl text-neutral-600 font-light leading-relaxed max-w-3xl mx-auto"
          >
            Lavelle Ventures is a Bangalore-based real estate development firm
            committed to creating high-value residential communities rooted in
            sustainability, spiritual harmony, and long-term investment growth.
            We focus on premium plotted developments and thoughtfully planned
            living spaces that blend modern infrastructure with timeless values.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="pt-6 border-t border-stone-200 max-w-md mx-auto"
          >
            <p className="text-sm text-neutral-500 leading-relaxed">
              <span className="uppercase tracking-[0.3em] text-[#B38728] font-bold text-[9px] block mb-3">
                Corporate Office
              </span>
              Number 125, Raj Tower, 3rd Floor,
              <br />
              MM Road, Frazer Town,
              <br />
              Bangalore – 560005.
            </p>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.9, duration: 1 }}
            className="h-[1px] bg-[#B38728] mx-auto mt-6"
          />
        </div>
      </section>

      {/* ================= LEADERSHIP SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-40">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] text-[#B38728] font-bold uppercase"
          >
            Our Founders
          </motion.h2>

          <h3 className="text-3xl md:text-5xl font-serif italic">
            Visionary Leadership
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Founder 1 */}
          <div className="space-y-8 flex flex-col items-center md:items-start">
            <div className="relative group w-full max-w-sm md:max-w-[420px] [perspective:1200px]">
              <motion.div
                whileHover={{ rotateY: 8, rotateX: 6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative aspect-[4/5] overflow-hidden shadow-2xl bg-neutral-100 rounded-xl transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src="/images/owner.jpeg"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>
            </div>

            <div className="space-y-4 text-center md:text-left max-w-sm">
              <h4 className="text-xl md:text-2xl font-serif">
                Mr. Mehboob Pasha
              </h4>
              <p className="text-neutral-500 font-light italic">
                "We don't just develop land; we curate environments where the
                soul can finally breathe."
              </p>
              <p className="text-stone-500 text-sm leading-relaxed">
                With extensive real estate expertise, he specializes in
                identifying land with strong investment potential and
                sustainable value.
              </p>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="space-y-8 flex flex-col items-center md:items-start md:mt-20">
            <div className="relative group w-full max-w-sm md:max-w-[420px] [perspective:1200px]">
              <motion.div
                whileHover={{ rotateY: -8, rotateX: 6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative aspect-[4/5] overflow-hidden shadow-2xl bg-neutral-100 rounded-xl transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src="/images/owner2.jpeg"
                  alt="Co-Founder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>
            </div>

            <div className="space-y-4 text-center md:text-left max-w-sm">
              <h4 className="text-xl md:text-2xl font-serif">
                Dr. Anjum Azhar
              </h4>
              <p className="text-neutral-500 font-light italic">
                "Architecture must serve as a bridge between ancient wisdom and modern precision."
              </p>
              <p className="text-stone-500 text-sm leading-relaxed">
                He ensures each development maintains structural excellence,
                luxury standards, and long-term urban value.
              </p>
            </div>
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 md:pt-24 mt-16 border-t border-stone-100 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl md:text-4xl font-serif mb-2">
                {stat.value}
              </p>
              <p className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase text-[#B38728] font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}