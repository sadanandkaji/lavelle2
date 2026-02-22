"use client";
import { motion } from "framer-motion";

export default function StatsSection() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("/images/lakescene.png")` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 px-8 max-w-6xl text-center">
        {[
          { number: "10", label: "Masterpieces Completed" },
          { number: "1K+", label: "Distinguished Residents" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.2 }}
          >
            <h2 className="text-white text-5xl md:text-8xl font-extralight">
              {item.number}
            </h2>
            <p className="text-white/60 italic mt-4 text-lg">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}