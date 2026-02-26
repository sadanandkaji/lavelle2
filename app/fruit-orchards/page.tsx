"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FruitOrchardsPage() {
  const orchardCrops = [
    { name: "Mango", icon: "🥭", trees: 6, yield: "240 kg", price: "₹40–48/kg", income: "₹9.6k–11.5k" },
    { name: "Jackfruit", icon: "🍈", trees: 2, yield: "400–800 kg", price: "₹80/kg", income: "₹32k–64k" },
    { name: "Jamun", icon: "🍇", trees: 6, yield: "240–360 kg", price: "₹80–120/kg", income: "₹19k–43k" },
    { name: "Nutmeg", icon: "🌰", trees: 6, yield: "7.2k–9k nuts", price: "₹3–5/nut", income: "₹21k–45k" },
    { name: "Amla", icon: "🌿", trees: 6, yield: "180–240 kg", price: "₹80/kg", income: "₹14k–19k" },
    { name: "Banana", icon: "🍌", plants: 10, yield: "200–250 kg", price: "₹25–50/kg", income: "₹5k–12.5k" },
    { name: "Cashew", icon: "🥜", trees: 6, yield: "48–60 kg", price: "₹150–200/kg", income: "₹7k–12k" },
    { name: "Moringa", icon: "🌳", trees: 12, yield: "120 kg", price: "₹25–40/kg", income: "₹3k–4.8k" },
  ];

  return (
    <main className="bg-[#FBFBFA] min-h-screen">
      
      {/* --- FULL SCREEN HERO (MOBILE & DESKTOP) --- */}
      {/* Changed h-[80vh] back to h-screen and added dvh for mobile address bar fixes */}
      <section className="relative h-screen h-[100dvh] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          /* object-cover is key here: it crops the sides to fill the vertical height on mobile */
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/2ckitchengarden.mp4" type="video/mp4" />
        </video>
        
        {/* Slightly darker overlay for mobile to make white text pop on smaller screens */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] tracking-[0.5em] text-white/90 uppercase font-bold mb-4"
          >
            The Harvest
          </motion.span>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            /* Responsive text: 4xl on small phones, 8xl on desktop */
            className="text-4xl sm:text-5xl md:text-8xl font-serif italic text-white"
          >
            Fruit Orchards
          </motion.h1>
          
          {/* Animated Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-12 flex flex-col items-center gap-2"
          >
            <span className="text-[8px] tracking-[0.2em] uppercase text-white/50 mb-2">Explore</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/80 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* --- DESCRIPTION --- */}
      <section className="max-w-4xl mx-auto px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[10px] tracking-[0.4em] text-[#B38728] font-bold uppercase mb-6">Chikkaballapura Bounty</h2>
          <p className="text-xl md:text-3xl font-serif text-neutral-800 leading-relaxed italic">
            "A diverse ecosystem of taste and nutrition, our orchards are a testament to the fertile soil of Narayanampalli."
          </p>
          <div className="h-[1px] w-24 bg-[#B38728] mx-auto mt-12" />
        </motion.div>
      </section>

      {/* --- ORCHARD GRID --- */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {orchardCrops.map((crop, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-neutral-100 p-8 shadow-sm"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl">{crop.icon}</span>
                <span className="text-[9px] font-bold tracking-tighter text-neutral-300 uppercase">
                  {crop.trees || crop.plants} Units
                </span>
              </div>
              <h4 className="text-lg font-serif text-neutral-900 mb-4">{crop.name}</h4>
              <div className="space-y-3 border-t border-neutral-50 pt-4 text-[11px] uppercase tracking-wider">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Yield</span>
                  <span className="text-neutral-800 font-medium">{crop.yield}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-dashed border-neutral-100 font-bold text-[#B38728]">
                  <span>Income</span>
                  <span>{crop.income}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- TOTALS SUMMARY --- */}
      <section className="bg-[#111111] py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-bold mb-2">Aggregate Performance</h2>
            <h3 className="text-white text-3xl md:text-4xl font-serif italic">Orchard Value</h3>
          </div>
          <div className="flex w-full md:w-auto justify-around gap-10">
             <div className="text-center">
                <p className="text-[#B38728] text-3xl md:text-5xl font-serif">₹1.13L</p>
                <p className="text-white/30 text-[9px] uppercase tracking-widest mt-2">Est. Min</p>
             </div>
             <div className="text-center border-l border-white/10 pl-10 md:pl-16">
                <p className="text-[#B38728] text-3xl md:text-5xl font-serif">₹2.11L</p>
                <p className="text-white/30 text-[9px] uppercase tracking-widest mt-2">Est. Max</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- NAV FOOTER --- */}
      <section className="py-24 text-center border-t border-neutral-100">
        <Link href="/statues" className="inline-flex flex-col items-center group">
          <span className="text-[10px] tracking-widest text-neutral-400 uppercase mb-4">Journey Continued</span>
          <span className="text-3xl font-serif italic text-neutral-800 border-b border-neutral-200 pb-2">The Statues</span>
        </Link>
      </section>
    </main>
  );
}