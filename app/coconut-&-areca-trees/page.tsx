"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CoconutArecaPage() {
  const harvestData = [
    {
      title: "Coconut (Cocos nucifera)",
      icon: "🥥",
      description: "Known as Kalpavriksha, our coconut palms are selected for high yield and sweet water content. They offer year-round utility, from refreshing water to rich culinary milk.",
      stats: [
        { label: "Tree Count", value: "2 Specimen Trees" },
        { label: "Annual Yield", value: "~160–180 Nuts" },
        { label: "Market Price", value: "₹25–₹30 / nut" },
        { label: "Est. Income", value: "₹4,800–₹5,400", highlight: true },
      ],
    },
    {
      title: "Areca Nut (Areca catechu)",
      icon: "🌴",
      description: "The gold standard of Karnataka plantation crops. These slender palms add architectural elegance to the estate while serving as a robust financial pillar.",
      stats: [
        { label: "Tree Count", value: "8 High-Yield Trees" },
        { label: "Annual Yield", value: "~16 kg (Dried)" },
        { label: "Market Price", value: "₹400–₹800 / kg" },
        { label: "Est. Income", value: "₹6,400–₹12,800", highlight: true },
      ],
    },
  ];

  return (
    <main className="bg-[#FBFBFA] min-h-screen">
      {/* --- FULL SCREEN HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/2bkitchengarden.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] tracking-[0.5em] text-white/80 uppercase font-bold mb-4"
          >
            The Foundation
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-5xl md:text-8xl font-serif italic text-white"
          >
            Coconut & Areca
          </motion.h1>

          {/* Scroll Indicator Line */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* --- NARRATIVE SECTION --- */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10px] tracking-[0.4em] text-[#B38728] font-bold uppercase mb-6">Vertical Sentinels</h2>
            <h3 className="text-4xl md:text-6xl font-serif leading-tight text-neutral-900">
              Legacy crops that define the <br /> 
              <span className="italic text-neutral-500">Karnataka skyline.</span>
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-neutral-600 text-lg leading-relaxed font-light"
          >
            <p>
              At Eshwari Farms, our Coconut and Areca palms are more than just crops; they are a legacy. 
              These trees provide a cooling canopy for the kitchen garden while ensuring a consistent 
              source of prosperity through high-yield varieties optimized for the Chikkaballapur climate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- DETAILED DATA CARDS --- */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {harvestData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white border border-neutral-100 p-8 md:p-16 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-6 mb-10">
                <span className="text-5xl">{item.icon}</span>
                <h4 className="text-3xl font-serif italic text-neutral-900">{item.title}</h4>
              </div>
              
              <p className="text-base text-neutral-500 mb-12 leading-relaxed font-light">
                {item.description}
              </p>

              <div className="space-y-5">
                {item.stats.map((stat, sIdx) => (
                  <div 
                    key={sIdx} 
                    className={`flex justify-between items-center py-4 border-b border-neutral-50 last:border-0 ${
                      stat.highlight ? "text-[#B38728] font-bold" : "text-neutral-700"
                    }`}
                  >
                    <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">{stat.label}</span>
                    <span className={stat.highlight ? "text-xl font-serif" : "text-base font-medium"}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- MARKET SUMMARY BANNER --- */}
      <section className="bg-[#111111] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white/50 text-[10px] tracking-[0.5em] uppercase font-bold mb-6">Combined Annual Forecast</h2>
          <div className="h-[1px] w-24 bg-[#B38728] mx-auto mb-10" />
          <p className="text-white text-5xl md:text-7xl font-serif mb-6">
            ₹11,200 <span className="text-2xl text-white/40 font-sans mx-4 tracking-normal">to</span> ₹18,200
          </p>
          <p className="text-white/40 text-sm tracking-widest font-light italic">ESTIMATED ANNUAL REVENUE FROM PRIMARY PALMS</p>
        </div>
      </section>

      {/* --- NAVIGATION FOOTER --- */}
      <section className="py-32 text-center border-t border-neutral-100">
        <Link 
          href="/kitchen-garden/fruit-orchards"
          className="inline-flex flex-col items-center group"
        >
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            <span className="text-[10px] tracking-[0.4em] text-neutral-400 uppercase mb-4 group-hover:text-[#B38728] transition-colors">Next Discovery</span>
            <span className="text-4xl md:text-5xl font-serif italic text-neutral-800 border-b border-neutral-200 pb-2 group-hover:border-[#B38728] transition-all duration-500">Fruit Orchards</span>
          </motion.div>
        </Link>
      </section>
    </main>
  );
}