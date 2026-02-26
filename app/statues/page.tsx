"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StatuesPage() {
  const statueFeatures = [
    {
      title: "Veer Hanuman",
      height: "12 Feet",
      material: "Monolithic Stone",
      desc: "The guardian of Eshwari Farms. Standing at a commanding 12 feet, the Veer Hanuman statue symbolizes strength, unwavering devotion, and the protective energy that blankets the estate.",
    },
    {
      title: "The Guru Parampara",
      height: "Life Size",
      material: "Sacred Carvings",
      desc: "Surrounding the central temple are the figures of the Siddhas and Gurus, marking the spiritual lineage that guides the ideology of the Siddha Peeta.",
    }
  ];

  return (
    <main className="bg-[#F6F5F2] min-h-screen">
      {/* --- FULL SCREEN HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/3statues.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Subtle Overlay to make text pop */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] tracking-[0.6em] text-white uppercase font-bold mb-4"
          >
            The Guardians
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-6xl md:text-9xl font-serif italic text-white"
          >
            Statues
          </motion.h1>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" 
          />
        </div>
      </section>

      {/* --- VEER HANUMAN FEATURE SECTION --- */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[10px] tracking-[0.4em] text-[#B38728] font-bold uppercase mb-6">The Protector</h2>
          <h3 className="text-5xl md:text-7xl font-serif text-neutral-900 mb-8">
            Veer <span className="italic text-neutral-400">Hanuman</span>
          </h3>
          <p className="text-neutral-600 text-lg md:text-xl leading-relaxed font-light mb-12">
            Carved from monolithic stone, the 12-foot Veer Hanuman serves as the spiritual anchor of the grounds. His presence is a reminder of the courage and selfless service required on the path of Siddha Vidya.
          </p>
          
          <div className="flex justify-center gap-16 border-t border-neutral-200 pt-10">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-1">Scale</p>
              <p className="text-2xl font-serif italic text-neutral-800">12 Feet Tall</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-1">Energy</p>
              <p className="text-2xl font-serif italic text-neutral-800">Suraksha</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- SPIRITUAL LINEAGE SECTION --- */}
      <section className="bg-white py-32 px-6 border-y border-neutral-100">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-serif italic text-neutral-900 mb-6">The Guru Parampara</h2>
          <p className="text-neutral-500 font-light leading-relaxed text-lg">
            Interspersed throughout the estate are life-sized representations of the Siddhas. Each statue is placed according to sacred geometry to harmonize the environment's energetic flow.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100 border border-neutral-100">
           {statueFeatures.map((statue, idx) => (
             <motion.div 
               key={idx}
               whileHover={{ backgroundColor: "#FBFBFA" }}
               className="bg-white p-12 md:p-24 transition-colors duration-500"
             >
                <h4 className="text-3xl font-serif italic text-neutral-900 mb-6">{statue.title}</h4>
                <div className="flex gap-4 mb-8">
                  <span className="text-[10px] px-4 py-1 border border-neutral-200 rounded-full text-neutral-400 uppercase font-bold tracking-widest">{statue.height}</span>
                  <span className="text-[10px] px-4 py-1 border border-neutral-200 rounded-full text-neutral-400 uppercase font-bold tracking-widest">{statue.material}</span>
                </div>
                <p className="text-base text-neutral-500 leading-relaxed font-light">
                  {statue.desc}
                </p>
             </motion.div>
           ))}
        </div>
      </section>

      {/* --- QUOTE BANNER --- */}
      <section className="bg-[#111111] py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-[#B38728] text-2xl md:text-3xl font-serif italic max-w-3xl mx-auto leading-snug">
            "The statue is not the God, but a mirror—reflecting the infinite power that resides within the seeker."
          </p>
        </motion.div>
      </section>

      {/* --- NEXT PAGE NAV --- */}
      <section className="py-32 text-center">
        <Link 
          href="/64-yogini-temple"
          className="inline-flex flex-col items-center group"
        >
          <span className="text-[10px] tracking-[0.4em] text-neutral-400 uppercase mb-4 group-hover:text-[#B38728] transition-colors">Enter the Temple</span>
          <span className="text-4xl md:text-5xl font-serif italic text-neutral-800 border-b border-neutral-200 pb-4 group-hover:border-[#B38728] transition-all duration-500">64 Yoginī Temple</span>
        </Link>
      </section>
    </main>
  );
}