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

  // Updated logic: Check if current page is contact OR about
  const isStaticWhitePage = pathname === "/contact" || pathname === "/about";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine theme colors based on scroll OR specific static pages
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
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 flex items-center px-6 md:px-12
          ${useDarkTheme ? "h-14 bg-white shadow-sm" : "h-20 bg-transparent"}`}
      >
        <div className="max-w-[1800px] mx-auto w-full flex items-center justify-between">
          <Link href="/" className="flex flex-col">
            <span className={`text-xl font-serif font-black tracking-tighter transition-colors ${useDarkTheme ? "text-black" : "text-white"}`}>
              LAVELLE
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {["Home", "About", "Contact"].map((item) => {
              const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              return (
                <Link key={item} href={href} className="relative group">
                  <span className={`text-[10px] tracking-[0.25em] uppercase font-bold transition-colors ${
                    pathname === href 
                      ? (useDarkTheme ? "text-black border-b border-black" : "text-white border-b border-white") 
                      : (useDarkTheme ? "text-neutral-400 hover:text-black" : "text-white/60 hover:text-white")
                  }`}>
                    {item}
                  </span>
                </Link>
              );
            })}
          </nav>

          <button 
            onClick={() => setMobileMenuOpen(true)}
            className={`flex items-center gap-3 group transition-all ${useDarkTheme ? "text-black" : "text-white"}`}
          >
            <span className="text-[9px] tracking-[0.2em] uppercase font-bold hidden sm:block">Estate Map</span>
            <div className={`w-8 h-8 rounded-full flex flex-col items-center justify-center gap-1 transition-colors ${useDarkTheme ? "bg-black" : "bg-white"}`}>
              <div className={`w-3 h-[1px] ${useDarkTheme ? "bg-white" : "bg-black"}`} />
              <div className={`w-3 h-[1px] ${useDarkTheme ? "bg-white" : "bg-black"}`} />
            </div>
          </button>
        </div>
      </motion.header>

      {/* --- SIDEBAR & FLYOUTS (Remains same as your provided code) --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setMobileMenuOpen(false); setHoveredItem(null); setExpandedMobileItem(null); }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[150]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[300px] md:w-[380px] bg-white z-[160] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#111111]">
                <span className="text-lg font-serif font-black tracking-tighter text-white uppercase">
                  Eshwari Farms
                </span>
                <button 
                  onClick={() => { setMobileMenuOpen(false); setHoveredItem(null); setExpandedMobileItem(null); }}
                  className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 hover:text-white flex items-center gap-2"
                >
                  <span className="text-lg leading-none">×</span> Close
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4 no-scrollbar">
                {navigationData.map((item) => (
                  <div key={item.title} className="flex flex-col border-b border-neutral-50 last:border-0">
                    <div 
                      onMouseEnter={() => setHoveredItem(item.title)}
                      onClick={() => handleItemClick(item)}
                      className="px-8 py-4 flex items-center justify-between group cursor-pointer hover:bg-[#F6F5F2] transition-all"
                    >
                      <span className={`text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase transition-colors ${
                        expandedMobileItem === item.title ? "text-[#B38728]" : "text-neutral-800 group-hover:text-[#B38728]"
                      }`}>
                        {item.title}
                      </span>
                      
                      {item.subItems && (
                        <motion.span 
                          animate={{ rotate: expandedMobileItem === item.title ? 180 : 0 }}
                          className="text-[10px] text-neutral-400 lg:hidden"
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
                          className="overflow-hidden bg-[#F9F8F6] lg:hidden"
                        >
                          <div className="px-10 py-4 flex flex-col gap-4 border-l-2 border-[#B38728]/20 ml-8 my-2">
                            {item.subItems.map((sub, idx) => (
                              <Link 
                                key={idx} 
                                href={`/${sub.toLowerCase().replace(/ /g, '-')}`} 
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-[10px] tracking-widest text-neutral-500 hover:text-[#B38728] uppercase transition-colors"
                              >
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
            </motion.div>

            {/* --- DESKTOP ONLY FLYOUT --- */}
            <AnimatePresence>
              {hoveredItem && activeSubItems && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="fixed top-0 right-[380px] h-full w-[260px] bg-[#F6F5F2] z-[155] shadow-xl hidden lg:flex flex-col justify-center p-10 border-r border-neutral-200"
                >
                  <span className="text-[8px] tracking-[0.4em] text-[#B38728] font-bold uppercase mb-3">Discovery</span>
                  <h3 className="text-xl font-serif italic text-neutral-900 mb-8">{hoveredItem}</h3>
                  <div className="flex flex-col gap-5 relative">
                    <div className="absolute left-0 top-0 w-[1px] h-full bg-neutral-200" />
                    {activeSubItems.map((sub, idx) => (
                      <Link 
                        key={idx} 
                        href={`/${sub.toLowerCase().replace(/ /g, '-')}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="pl-5 text-[11px] text-neutral-500 hover:text-black transition-colors block uppercase tracking-wider"
                      >
                        {sub}
                      </Link>
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