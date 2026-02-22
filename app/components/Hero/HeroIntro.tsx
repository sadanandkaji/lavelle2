import { motion } from "framer-motion";

export default function HeroIntro({ textRef }: any) {
  return (
    <div ref={textRef} className="absolute inset-0 z-40 flex items-center justify-center text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-[10px] tracking-[1.5em] uppercase mb-6 opacity-40 text-white">
          The Art of Living
        </h2>
        <h1 className="text-5xl md:text-8xl font-extralight italic text-white">
          Quietly Found.
        </h1>
      </motion.div>
    </div>
  );
}