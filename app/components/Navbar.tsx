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

  const navLinkStyle = `px-8 py-3 rounded-full text-[10px] tracking-[0.4em] uppercase font-black transition-all duration-700 flex items-center justify-center border`;
  
  const activeLinkTheme = isLightText 
    ? "bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white hover:text-black" 
    : "bg-black/5 backdrop-blur-md text-black border-black/5 hover:bg-black hover:text-white";

  return (
    <>
      {/* 1. LOGO SECTION */}
      <div className="fixed top-4 left-4 md:top-6 md:left-6 z-[110] pointer-events-none">
        <Link 
          href="/" 
          className={`group flex items-center pointer-events-auto px-4 py-3 md:px-6 md:py-5 rounded-3xl transition-all duration-500
            ${isLightText 
              ? "bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl" 
              : "bg-white/70 backdrop-blur-xl border border-black/5 shadow-lg"
            }`}
        >
          <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform duration-500 group-hover:scale-105">
            <img src="/images/iconlogo.png" alt="Icon" className="w-full h-full object-contain" />
          </div>
          <div className={`h-10 md:h-12 w-[1px] mx-4 md:mx-6 transition-all duration-500 ${isLightText ? "bg-white/30" : "bg-black/10"}`} />
          <div className="flex flex-col -space-y-1 md:-space-y-2">
            <img src="/images/lavelle.png" alt="Lavelle" className="h-6 md:h-9 w-auto object-contain" />
            <img src="/images/ventures.png" alt="Ventures" className="h-6 md:h-9 w-auto object-contain opacity-80" />
          </div>
        </Link>
      </div>

      {/* 2. NAVIGATION BAR */}
      <div className="fixed top-0 right-0 left-0 z-[100] flex justify-end items-center h-24 md:h-28 px-4 md:px-12 pointer-events-none">
        <nav 
          className={`
            transition-all duration-700 ease-in-out flex items-center pointer-events-auto gap-4
            ${isScrolled 
                ? "bg-white/40 backdrop-blur-2xl shadow-xl px-2 py-2 rounded-full border border-white/40" 
                : "bg-transparent"
            }
          `}
        >
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-4">
            {["Home", "Gallery", "Contact"].map((item) => (
              <Link 
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                className={`${navLinkStyle} ${activeLinkTheme}`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* FIXED SIZE Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(true)} 
            className={`md:hidden flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-500 border backdrop-blur-xl
              ${isScrolled 
                ? "text-black bg-white/20 border-black/10 shadow-lg" 
                : "text-white bg-black/40 border-white/20 shadow-2xl"}`}
          >
            <div className="flex flex-col items-end gap-1.5">
              <div className="w-6 h-[2px] bg-current rounded-full" />
              <div className="w-4 h-[2px] bg-current rounded-full" />
            </div>
          </button>
        </nav>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[150] bg-black/30 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm z-[160] 
                         bg-white/90 backdrop-blur-3xl border-l border-white/40 
                         flex flex-col px-10 py-12 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-16">
                <img src="/images/iconlogo.png" alt="Logo" className="w-14 h-14 object-contain" />
                <button 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-black text-[10px] tracking-[0.4em] uppercase font-black border-b border-black/40 pb-1"
                >
                  Close
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center gap-5">
                {["Home", "Gallery", "Contact"].map((item) => (
                  <Link 
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="w-full py-7 bg-white/30 backdrop-blur-lg border border-black/5 
                               text-black text-center text-xl tracking-[0.3em] uppercase font-black 
                               rounded-2xl active:scale-95 transition-all duration-300"
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