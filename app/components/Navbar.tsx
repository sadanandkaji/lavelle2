"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLightText = mounted && isHomePage && !isScrolled;

  const navLinkStyle = `px-6 py-2 rounded-full text-[10px] tracking-[0.4em] uppercase font-black transition-all duration-500 flex items-center justify-center`;
  
  const activeLinkTheme = isLightText 
    ? "bg-black text-white hover:bg-white hover:text-black shadow-lg" 
    : "bg-black/5 text-black hover:bg-black hover:text-white";

  return (
    <>
      {/* 1. FIXED LOGO SECTION - ADJUSTED 'LEFT' CLASSES TO MOVE FURTHER LEFT */}
      <div className="fixed top-3 left-2 md:left-4 z-[110] pointer-events-none">
        <Link 
          href="/" 
          className={`group flex items-center pointer-events-auto px-4 py-3 md:px-5 md:py-4 rounded-2xl transition-all duration-500
            ${isLightText 
              ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl" 
              : "bg-white/80 backdrop-blur-md border border-black/5 shadow-lg"
            }`}
        >
          {/* Icon */}
          <div className="relative w-12 h-12 md:w-20 md:h-20 transition-transform duration-500 group-hover:scale-105">
            <img src="/images/iconlogo.png" alt="Icon" className="w-full h-full object-contain" />
          </div>

          {/* Separator Line */}
          <div className={`h-10 md:h-14 w-[1.5px] mx-3 md:mx-6 transition-all duration-500 ${isLightText ? "bg-white/30" : "bg-black/10"}`} />

          {/* Text Logos */}
          <div className="flex flex-col -space-y-1.5 md:-space-y-3">
            <img 
              src="/images/lavelle.png" 
              alt="Lavelle" 
              className={`h-7 md:h-12 w-auto object-contain transition-all duration-500 `} 
            />
            <img 
              src="/images/ventures.png" 
              alt="Ventures" 
              className={`h-7 md:h-12 w-auto object-contain opacity-90 transition-all duration-500 `} 
            />
          </div>
        </Link>
      </div>

      {/* 2. FLOATING NAVBAR / TOGGLE SECTION */}
      <div className="fixed top-0 right-0 left-0 z-[100] flex justify-end items-center h-24 px-6 md:px-12 pointer-events-none">
        <nav 
          className={`
            transition-all duration-700 ease-in-out flex items-center pointer-events-auto
            ${isScrolled 
                ? "bg-white/90 backdrop-blur-md shadow-xl px-4 py-2 rounded-full border border-black/5" 
                : "bg-transparent px-0 py-0"
            }
          `}
        >
          <div className="hidden md:flex items-center gap-4">
            <Link href="/" className={`${navLinkStyle} ${activeLinkTheme}`}>Home</Link>
            <Link href="/gallery" className={`${navLinkStyle} ${activeLinkTheme}`}>Gallery</Link>
            <Link href="/contact" className={`${navLinkStyle} ${activeLinkTheme}`}>Contact</Link>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(true)} 
            className={`md:hidden flex flex-col items-end gap-1.5 p-4 rounded-full transition duration-500 
              ${isScrolled ? "text-black bg-black/5" : "text-white bg-black shadow-2xl"}`}
          >
            <div className="w-8 h-[2px] bg-current rounded-full" />
            <div className="w-5 h-[2px] bg-current rounded-full" />
          </button>
        </nav>
      </div>

      {/* MOBILE SIDE DRAWER (Remains same) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm z-[160] bg-white flex flex-col px-10 py-12"
            >
              <div className="flex justify-between items-center mb-16">
                <img src="/images/iconlogo.png" alt="Logo" className="w-16 h-16 object-contain" />
                <button 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-black text-[10px] tracking-[0.4em] uppercase font-black border-b-2 border-black pb-1"
                >
                  Close
                </button>
              </div>
              <div className="flex-1 flex flex-col justify-center gap-6">
                {["Home", "Gallery", "Contact"].map((item) => (
                  <Link 
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="w-full py-6 bg-black text-white text-center text-2xl tracking-[0.2em] uppercase font-black rounded-xl hover:bg-stone-800 transition shadow-lg"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}