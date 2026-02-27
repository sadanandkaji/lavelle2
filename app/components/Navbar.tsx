"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<any | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Logic to check if we are on pages that require a solid white navbar
  const isSolidPage = pathname === "/about" || pathname === "/contact";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    setHoveredItem(null);
    setExpandedMobileItem(null);
    setTimeout(() => {
      setMenuOpen(false);
      router.push(href);
    }, 300);
  };

  const navigationData = [
    { title: "Cottage", href: "/cottage" },
    { title: "Kitchen Garden", subItems: ["Coconut & Areca Trees", "Fruit Orchards"] },
    { title: "Statues", href: "/statues" },
    { title: "Temple", subItems: ["64 Yogini Temple", "8 Mathruka", "Tripura Eshwari Peetam", "Sri Maha Meru Yantra"] },
    { title: "Farm", subItems: ["Gokula Gau Shala"] },
    { title: "Wedding Hall", href: "/wedding-hall" },
    { title: "Food Court", href: "/food-court" },
    { title: "Watch Tower", href: "/watch-tower" },
    { title: "Lake", href: "/lake" },
    { title: "Holistic Center", href: "/holistic-center" },
    { title: "Theatre", href: "/theatre" },
    { title: "Amenities", href: "/amenities" },
    { title: "Birds Aviary", href: "/birds-aviary" },
    { title: "Landscape Garden", href: "/landscape" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-[100] flex items-center px-6 md:px-16 transition-all duration-700 border-b
          ${(isScrolled || isSolidPage)
            ? "h-20 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] border-black/5"
            : "h-20 bg-transparent border-white/100"
          }`}
      >
        <div className="max-w-[1800px] mx-auto w-full flex items-center justify-between">
          
          {/* --- BRANDING --- */}
          <Link href="/" className="flex flex-col group relative">
            <motion.span 
              animate={{ letterSpacing: (isScrolled || isSolidPage) ? "0.15em" : "0.25em" }}
              className={`text-2xl font-serif leading-none transition-colors duration-500 ${(isScrolled || isSolidPage) ? "text-neutral-900" : "text-white"}`}
            >
              LAVELLE
            </motion.span>
            <span className={`text-[8px] tracking-[0.6em] uppercase font-bold mt-1 transition-colors duration-500 ${(isScrolled || isSolidPage) ? "text-[#B38728]" : "text-[#B38728]/90"}`}>
              Venture
            </span>
            <motion.div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#B38728] group-hover:w-full transition-all duration-500" />
          </Link>

          {/* --- NAV LINKS --- */}
          <nav className="hidden md:flex items-center gap-14">
            {["Home", "About", "Contact"].map((item) => {
              const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = pathname === href;
              return (
                <Link key={item} href={href} className="group relative py-2">
                  <span className={`text-[10px] tracking-[0.35em] uppercase font-bold transition-all duration-500 ${
                    isActive 
                      ? "text-[#B38728]" 
                      : ((isScrolled || isSolidPage) ? "text-neutral-500 hover:text-black" : "text-white/70 hover:text-white")
                  }`}>
                    {item}
                  </span>
                  <motion.span 
                    initial={false}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    className="absolute bottom-0 left-0 h-[1.5px] bg-[#B38728] transition-all duration-500 group-hover:w-full"
                  />
                </Link>
              );
            })}
          </nav>

          {/* --- CTA / MENU TRIGGER --- */}
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-4 group perspective-1000"
            >
              <span className={`text-[9px] tracking-[0.4em] uppercase font-black hidden lg:block transition-all duration-500 ${(isScrolled || isSolidPage) ? "text-neutral-800" : "text-white opacity-80 group-hover:opacity-100"}`}>
                Explore Estate
              </span>
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#B38728]/20 blur-md scale-0 group-hover:scale-150 transition-transform duration-500" />
                <div className="w-14 h-14 rounded-full flex flex-col items-center justify-center gap-1.5 transition-all duration-500 group-hover:rotate-90 bg-[#B38728] shadow-[0_8px_25px_rgba(179,135,40,0.4)] relative z-10">
                  <div className="w-6 h-[2px] bg-white rounded-full group-hover:w-4 transition-all" />
                  <div className="w-6 h-[2px] bg-white rounded-full transition-all" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* --- SIDEBAR SYSTEM --- */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => { setMenuOpen(false); setHoveredItem(null); }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[150]"
            />

            {/* MAIN PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%", transition: { delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-[450px] bg-[#0A0A0A] z-[160] shadow-[-20px_0_80px_rgba(0,0,0,0.5)] flex flex-col border-l border-white/5 text-white"
            >
              <div className="p-12 flex justify-between items-center">
                <div className="overflow-hidden">
                  <motion.div initial={{ y: 20 }} animate={{ y: 0 }} className="flex flex-col">
                    <span className="text-[10px] tracking-[0.6em] uppercase font-black text-[#B38728] mb-2">Navigator</span>
                    <span className="text-2xl font-serif tracking-tight uppercase">Discover Lavelle</span>
                  </motion.div>
                </div>
                <button 
                  onClick={() => { setMenuOpen(false); setHoveredItem(null); }}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500"
                >
                  ✕
                </button>
              </div>

              <div className="flex-1 overflow-y-auto no-scrollbar px-6 md:px-12 py-4">
                
                {/* --- MOBILE ONLY MAIN LINKS --- */}
                <div className="md:hidden flex flex-col mb-6 border-b border-white/10 pb-2">
                  {["Home", "About", "Contact"].map((item) => (
                    <button
                      key={item}
                      onClick={() => handleNavigation(item === "Home" ? "/" : `/${item.toLowerCase()}`)}
                      className="py-4 text-left group"
                    >
                      <span className="text-[13px] tracking-[0.3em] uppercase font-bold text-white/90 group-hover:text-[#B38728] transition-colors">
                        {item}
                      </span>
                    </button>
                  ))}
                </div>

                {navigationData.map((item, idx) => (
                  <motion.div 
                    key={item.title} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onMouseEnter={() => setHoveredItem(item)} 
                    className="flex flex-col"
                  >
                    <div 
                      onClick={() => {
                        if (item.subItems) setExpandedMobileItem(expandedMobileItem === item.title ? null : item.title);
                        else if (item.href) handleNavigation(item.href);
                      }}
                      className="py-5 flex items-center justify-between group cursor-pointer border-b border-white/[0.03]"
                    >
                      <div className="flex items-center gap-8">
                        <span className="text-[10px] font-mono text-[#B38728] opacity-50">0{idx + 1}</span>
                        <span className={`text-[13px] tracking-[0.3em] uppercase font-bold transition-all duration-500 ${hoveredItem?.title === item.title ? "text-white translate-x-4" : "text-white/40"}`}>
                          {item.title}
                        </span>
                      </div>
                      {item.subItems && (
                        <motion.span animate={{ rotate: expandedMobileItem === item.title ? 180 : 0 }} className="text-[#B38728] text-[10px]">
                          ↓
                        </motion.span>
                      )}
                    </div>

                    <AnimatePresence>
                      {expandedMobileItem === item.title && item.subItems && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-white/[0.02] lg:hidden">
                          {item.subItems.map(sub => (
                            <button 
                              key={sub} 
                              onClick={() => handleNavigation(`/${sub.toLowerCase().replace(/ /g, '-')}`)}
                              className="w-full text-left px-16 py-4 text-[10px] tracking-[0.2em] text-white/50 hover:text-[#B38728] uppercase font-bold border-b border-white/[0.02]"
                            >
                              {sub}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              <div className="p-12 border-t border-white/5 bg-black/40">
                 <p className="text-[9px] tracking-[0.5em] uppercase text-white/20 mb-3 font-black">Contact Registry</p>
                 <a href="mailto:lavelleventure@gmail.com" className="text-sm font-serif italic text-[#B38728] hover:text-white transition-colors duration-500">
                    lavelleventure@gmail.com
                 </a>
              </div>
            </motion.div>

            {/* SECONDARY PANEL (DESKTOP SUB-NAV) */}
            <AnimatePresence mode="wait">
              {hoveredItem?.subItems && (
                <motion.div
                  key={hoveredItem.title}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 80, opacity: 0, transition: { duration: 0.3 } }}
                  className="fixed top-0 right-[450px] h-full w-[380px] bg-[#0F0F0F] z-[155] border-r border-white/5 hidden lg:flex flex-col p-20 shadow-[-40px_0_80px_rgba(0,0,0,0.3)]"
                >
                  <motion.p 
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-[10px] tracking-[0.5em] uppercase text-[#B38728] font-black mb-16"
                  >
                    Specifications
                  </motion.p>
                  <div className="flex flex-col gap-10 text-white">
                    {hoveredItem.subItems.map((sub: string, i: number) => (
                      <motion.button
                        key={sub}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        onClick={() => handleNavigation(`/${sub.toLowerCase().replace(/ /g, '-')}`)}
                        className="text-[12px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-all flex items-center gap-6 group/item text-left font-bold"
                      >
                        <span className="w-0 h-[1.5px] bg-[#B38728] group-hover/item:w-12 transition-all duration-700 ease-out shadow-[0_0_10px_#B38728]" />
                        {sub}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </>
  );
}