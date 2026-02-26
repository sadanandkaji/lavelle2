"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GauShalaPage() {
  const features = [
    { title: "Desi Breeds", label: "Preservation", desc: "Home to indigenous Indian cattle breeds, maintained with traditional Vedic care and modern hygiene." },
    { title: "Sattvic Energy", label: "Vibration", desc: "The presence of the Gau Shala creates a natural sanctuary of peace, grounding the estate's spiritual energy." },
    { title: "Pancha-Gavya", label: "Healing", desc: "Utilizing sacred cow products for organic farming, medicinal purposes, and temple rituals." },
    { title: "Go Seva", label: "Dharma", desc: "A space for devotees to engage in the ancient practice of feeding and caring for the sacred bovine." },
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
          <source src="/videos/5farm.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Soft morning-light overlay */}
        <div className="absolute inset-0 bg-white/10" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span 
          
            transition={{ duration: 1 }}
            className="text-[10px] text-white uppercase font-bold mb-4 drop-shadow-md"
          >
            Vedic Living
          </motion.span>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-6xl md:text-9xl font-serif italic text-white drop-shadow-2xl"
          >
            Gokula Gau Shāla
          </motion.h1>
          <p className="mt-8 text-white/90 font-light tracking-widest uppercase text-[10px] md:text-xs">
            The Soul of Eshwari Siddha Peeta
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-20 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* --- NARRATIVE SECTION --- */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] tracking-[0.5em] text-[#B38728] font-bold uppercase mb-8">Sacred Compassion</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-10 leading-tight">
              A Sanctuary <br />
              <span className="italic text-neutral-400 font-light">of Pure Vibration.</span>
            </h3>
            <p className="text-neutral-600 text-lg font-light leading-relaxed mb-6">
              In Vedic tradition, the cow is revered as the mother of all beings. The Gokula Gau Shāla is not just a farm; it is an integral part of the Peeta’s spiritual ecosystem. 
            </p>
            <p className="text-neutral-600 text-lg font-light leading-relaxed">
              The health and happiness of our cows are believed to directly impact the energetic purity of the temple. Here, ancient "Go-Vigyan" (Cow Science) meets compassionate care, ensuring a life of dignity for the guardians of our land.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-1 bg-[#F6F5F2] border border-neutral-100 shadow-sm"
          >
            <div className="bg-white p-12 border border-neutral-100 text-center">
                <h4 className="text-xl font-serif italic text-[#B38728] mb-4">Gau-Mātā Presence</h4>
                <p className="text-sm text-neutral-500 font-light italic leading-loose">
                  "Wherever cows reside, that place is purified. Their breath is the wind of the gods, and their presence is the foundation of prosperity."
                </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURE GRID --- */}
      <section className="bg-white py-32 border-y border-neutral-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-4"
              >
                <span className="text-[9px] font-bold tracking-[0.3em] text-[#B38728] uppercase border-b border-[#B38728]/20 pb-2 inline-block mb-2">
                    {item.label}
                </span>
                <h4 className="text-2xl font-serif italic text-neutral-800">{item.title}</h4>
                <p className="text-sm text-neutral-500 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ORGANIC HARMONY SECTION --- */}
      <section className="py-40 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif italic text-neutral-900 mb-10 leading-snug">
              "The cycle of life begins with the soil, and the soil is blessed by the cow."
            </h2>
            <div className="h-px w-24 bg-neutral-200 mx-auto mb-10" />
            <p className="text-neutral-500 font-light text-lg">
              The Gau Shāla provides the life-blood for our natural farming initiatives, closing the circle between spiritual practice and sustainable living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- NAVIGATION FOOTER --- */}
      <section className="py-32 text-center border-t border-neutral-50">
        <Link 
          href="/sri-maha-meru-yantra"
          className="inline-flex flex-col items-center group"
        >
          <span className="text-[10px] tracking-[0.4em] text-neutral-400 uppercase mb-4 group-hover:text-[#B38728] transition-colors">Return to Temple</span>
          <span className="text-4xl md:text-5xl font-serif italic text-neutral-800 border-b border-transparent group-hover:border-[#B38728] pb-2 transition-all duration-500">
            Śrī Mahā Meru
          </span>
        </Link>
      </section>
    </main>
  );
}