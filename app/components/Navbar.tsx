"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const isStaticWhitePage = pathname === "/contact" || pathname === "/about";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const useDarkTheme = isScrolled || isStaticWhitePage;

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

  const activeSubItems = navigationData.find(item => item.title === hoveredItem)?.subItems;

  const handleItemClick = (item: any) => {
    if (item.subItems) {
      setExpandedMobileItem(expandedMobileItem === item.title ? null : item.title);
    } else if (item.href) {
      setMobileMenuOpen(false);
      router.push(item.href);
    }
  };

  return (
    <>
      {/* --- MAIN NAVBAR --- */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 flex items-center px-8 md:px-16
          ${useDarkTheme 
            ? "h-16 bg-white/95 backdrop-blur-md border-b-2 border-white shadow-sm" 
            : "h-24 bg-transparent border-b-2 border-white/40"
          }`}
      >
        <div className="max-w-[1800px] mx-auto w-full flex items-center justify-between">
          <Link href="/" className="flex flex-col group">
            <span className={`text-2xl font-serif font-black tracking-tighter transition-colors duration-500 ${useDarkTheme ? "text-black" : "text-white"}`}>
              LAVELLE
            </span>
            <span className={`text-[8px] tracking-[0.4em] uppercase font-bold transition-colors duration-500 ${useDarkTheme ? "text-[#B38728]" : "text-white"}`}>
              Ventures
            </span>
          </Link>

          {/* Desktop Links - Hidden on Mobile */}
          <nav className="hidden md:flex items-center gap-10">
            {["Home", "About", "Contact"].map((item) => {
              const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = pathname === href;
              return (
                <Link key={item} href={href} className="relative group py-2">
                  <span className={`text-[10px] tracking-[0.25em] uppercase font-black transition-colors ${
                    isActive 
                      ? (useDarkTheme ? "text-[#B38728]" : "text-white") 
                      : (useDarkTheme ? "text-neutral-400 hover:text-black" : "text-white/70 hover:text-white")
                  }`}>
                    {item}
                  </span>
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              );
            })}
          </nav>

          {/* Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className={`flex items-center gap-4 group transition-all ${useDarkTheme ? "text-black" : "text-white"}`}
          >
            <span className="text-[9px] tracking-[0.3em] uppercase font-black hidden lg:block">Estate Map</span>
            <div className={`w-10 h-10 rounded-full flex flex-col items-center justify-center gap-1.5 transition-all duration-500 group-hover:scale-110 shadow-md ${useDarkTheme ? "bg-black" : "bg-white"}`}>
              <div className={`w-5 h-[2px] ${useDarkTheme ? "bg-white" : "bg-black"}`} />
              <div className={`w-5 h-[2px] ${useDarkTheme ? "bg-white" : "bg-black"}`} />
            </div>
          </button>
        </div>
      </motion.header>

      {/* --- SIDEBAR MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => { setMobileMenuOpen(false); setHoveredItem(null); setExpandedMobileItem(null); }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[150]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-[400px] bg-white z-[160] shadow-2xl flex flex-col border-l-2 border-white"
            >
              {/* Sidebar Header */}
              <div className="p-8 flex justify-between items-center border-b-2 border-neutral-100">
                <div className="flex flex-col">
                  <span className="text-xl font-serif font-black tracking-tighter text-black uppercase leading-none">
                    Discovery
                  </span>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#B38728] font-bold mt-1">Estate Map</span>
                </div>
                <button 
                  onClick={() => { setMobileMenuOpen(false); setHoveredItem(null); setExpandedMobileItem(null); }}
                  className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all border border-white"
                >
                  ✕
                </button>
              </div>

              <div className="flex-1 overflow-y-auto no-scrollbar">
                
                {/* 1. MOBILE ONLY MAIN LINKS (Home, About, Contact) */}
                <div className="bg-neutral-50 py-2 border-b-2 border-neutral-100">
                  {["Home", "About", "Contact"].map((item) => {
                    const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                    const isActive = pathname === href;
                    return (
                      <Link 
                        key={item} 
                        href={href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-8 py-5 flex items-center group border-b border-white last:border-0"
                      >
                        <span className={`text-[11px] tracking-[0.3em] uppercase font-black ${
                          isActive ? "text-[#B38728]" : "text-neutral-500 group-hover:text-black"
                        }`}>
                          {item}
                        </span>
                      </Link>
                    );
                  })}
                </div>

                {/* 2. ESTATE NAVIGATION ITEMS */}
                <div className="py-4">
                  {navigationData.map((item, idx) => (
                    <div key={item.title} className="flex flex-col">
                      <div 
                        onMouseEnter={() => setHoveredItem(item.title)}
                        onClick={() => handleItemClick(item)}
                        className="px-8 py-5 flex items-center justify-between group cursor-pointer hover:bg-neutral-50 transition-all border-b border-neutral-50 last:border-0"
                      >
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] font-serif italic text-neutral-300 group-hover:text-[#B38728]">0{idx + 1}</span>
                            <span className={`text-[11px] font-black tracking-[0.2em] uppercase transition-colors ${
                            expandedMobileItem === item.title ? "text-[#B38728]" : "text-neutral-800 group-hover:text-[#B38728]"
                            }`}>
                            {item.title}
                            </span>
                        </div>
                        {item.subItems && (
                          <motion.span 
                            animate={{ rotate: expandedMobileItem === item.title ? 180 : 0 }}
                            className="text-[8px] text-neutral-400"
                          >
                            ▼
                          </motion.span>
                        )}
                      </div>

                      <AnimatePresence>
                        {expandedMobileItem === item.title && item.subItems && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-[#FBFBFA]"
                          >
                            <div className="px-12 py-6 flex flex-col gap-5 border-l-2 border-neutral-200 ml-8 my-2">
                              {item.subItems.map((sub, idx) => (
                                <Link 
                                  key={idx} 
                                  href={`/${sub.toLowerCase().replace(/ /g, '-')}`} 
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-[10px] tracking-widest text-neutral-500 hover:text-[#B38728] uppercase font-bold transition-colors flex items-center gap-3"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#B38728]" />
                                  {sub}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar Footer */}
              <div className="p-8 bg-neutral-900 text-white border-t border-white/20">
                 <p className="text-[7px] tracking-[0.4em] uppercase text-white/40 mb-3 font-bold">Inquiries</p>
                 <p className="text-xs font-serif italic text-[#B38728]">lavelleventure@gmail.com</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}